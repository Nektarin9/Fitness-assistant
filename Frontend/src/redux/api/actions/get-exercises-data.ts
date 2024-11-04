import { request } from '../../../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';

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
				`${PATCH_URL.EXERCISES}?&page=${page}&limit=${limit}&search=${searchName}`,
			);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
