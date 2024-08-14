import { request } from '../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface SearchParams {
	searchName?: string;
	page?: number;
	limit?: number;
}

export const fetchExercisesData: any = createAsyncThunk(
	'exercises/fetchExercisesData',
	async ({ searchName = '', page = 1, limit = 8 }: SearchParams) => {
		try {
			const response = await request(
				`http://localhost:4000/exercises?&page=${page}&limit=${limit}&search=${searchName}`,
			)
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
)
