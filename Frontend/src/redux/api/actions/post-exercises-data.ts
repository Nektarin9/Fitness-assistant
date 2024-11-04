import { request } from '../../../utils';
import { ExercisesData } from '../../../interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';

export const addExercisesData: any = createAsyncThunk(
	'clients/addExercisesData',
	async (exercise: ExercisesData) => {
		try {
			const response = await request(PATCH_URL.EXERCISES, 'POST', exercise);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
