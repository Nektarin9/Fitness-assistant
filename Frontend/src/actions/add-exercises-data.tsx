import { request } from '../utils';
import { ExercisesData } from '../interface';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addExercisesData: any = createAsyncThunk(
	'clients/addExercisesData',
	async (exercise: ExercisesData) => {
		try {
			const response = await request(
				'http://localhost:3005/exercises',
				'POST',
				exercise,
			);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
