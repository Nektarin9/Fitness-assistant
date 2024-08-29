import { createSlice } from '@reduxjs/toolkit';

import {
	addTrainingTable,
	deleteTrainingTable,
	fetchClient,
	postTrainingTable,
} from '../actions';
import { addField, changeData, changeWorkoutDescription } from '../utils';
import { Person } from '../interface';
import { filterTable } from '../utils/change-workout-description';

export const clientSlice = createSlice({
	name: 'client',
	initialState: {
		client: {} as Person,
	},
	reducers: {
		/* Очистка */
		clearClient: (state) => {
			state.client = {};
		},
		/* Обработка ячеек таблиц */
		exerciseInput: (state, action) => {
			changeWorkoutDescription(action.payload, state.client, 'exercise');
		},
		descriptionInput: (state, action) => {
			changeWorkoutDescription(action.payload, state.client, 'description');
		},
		addExerciseTable: (state, action) => {
			addField(state.client, action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchClient.fulfilled, (state, action) => {
			/* Получение клиента */
			state.client = action.payload;
		});
		/* Добавление и удаление таблиц с упражнениями */
		builder.addCase(postTrainingTable.fulfilled, (state, action) => {
			if (Array.isArray(state.client.trainingProgram)) {
				changeData(state.client.trainingProgram, action.payload, 'ADD');
			}
		});
		builder.addCase(deleteTrainingTable.fulfilled, (state, action) => {
			if (Array.isArray(state.client.trainingProgram)) {
				changeData(state.client.trainingProgram, action.payload, 'DELETE');
			}
		});
		builder.addCase(addTrainingTable.fulfilled, (state, action) => {
			filterTable(state.client, action.payload);
		});
	},
});

// Экспортируем редукторы

export const {
	clearClient,
	addExerciseTable,
	exerciseInput,
	descriptionInput,
} = clientSlice.actions;
export default clientSlice.reducer;
