import { createSlice } from '@reduxjs/toolkit';
import {
	fetchExercisesData,
} from '../actions';

export const trainingDataSlice = createSlice({
	name: 'trainingData',
	initialState: {
		exercisesData: {exercises: [],
			total: null
		},
		lastPage: 1,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchExercisesData.fulfilled, (state, action) => {
			state.exercisesData = action.payload;
		});
	},
});
// Экспортируем редукторы
export default trainingDataSlice.reducer;
