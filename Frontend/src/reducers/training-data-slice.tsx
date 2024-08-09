import { createSlice } from '@reduxjs/toolkit';
import {
	addExercisesData,
	deleteExercisesData,
	fetchExercisesData,
	fetchExercisesDataLastPage,
} from '../actions';
import { changeData } from '../utils';

export const trainingDataSlice = createSlice({
	name: 'trainingData',
	initialState: {
		exercisesData: [],
		lastPage: 1,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchExercisesData.fulfilled, (state, action) => {
			state.exercisesData = action.payload;
		});
		builder.addCase(fetchExercisesDataLastPage.fulfilled, (state, action) => {
			state.lastPage = action.payload;
		});
		builder.addCase(addExercisesData.fulfilled, (state, action) => {
			changeData(state.exercisesData, action.payload, 'ADD');
		});
		builder.addCase(deleteExercisesData.fulfilled, (state, action) => {
			changeData(state.exercisesData, action.payload, 'DELETE');
		});
	},
});
// Экспортируем редукторы
export default trainingDataSlice.reducer;
