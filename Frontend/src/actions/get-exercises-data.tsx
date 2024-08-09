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
				`http://localhost:3005/exercises?exerciseName_like=${searchName}&_page=${page}&_limit=${limit}`,
			)
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);

/*?name_like=${searchName}&job_title_like=${searchJobTitle}&phone_like=${searchPhone}&level_like=${searchLevel}&mail_like=${searchMail}&_page=${page}&_limit=${limit}*/
