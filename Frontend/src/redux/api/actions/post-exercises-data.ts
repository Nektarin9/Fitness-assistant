import { ExercisesData } from '../../../interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

export const addExercisesData: any = createAsyncThunk(
	'clients/addExercisesData',
	async (exercise: ExercisesData) => {
		try {
			const response = await backendApiAxios.post(PATCH_URL.EXERCISES, exercise);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
