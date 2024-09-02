import { createSlice } from '@reduxjs/toolkit';
import { fetchExercisesData } from '../actions';

export const trainingDataSlice = createSlice({
	name: 'trainingData',
	initialState: {
		exercisesData: { exercises: [], total: null },
		lastPage: 1,
	},
	reducers: {
		clearExercisesData: (state) => {
			state.exercisesData = { exercises: [], total: null };
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchExercisesData.fulfilled, (state, action) => {
			state.exercisesData = action.payload;
		});
	},
});
// Экспортируем редукторы
export const {
	clearExercisesData
} = trainingDataSlice.actions;
export default trainingDataSlice.reducer;
