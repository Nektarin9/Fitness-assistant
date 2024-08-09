import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

export const fetchExercisesDataLastPage: any = createAsyncThunk(
	'exercises/fetchExercisesDataLastPage',
	async (limit: number = 8) => {
		try {
			const response = await request(`http://localhost:3005/exercises`);
			console.log(response);
			return Math.ceil(response.length ? response.length / limit : 1);
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
