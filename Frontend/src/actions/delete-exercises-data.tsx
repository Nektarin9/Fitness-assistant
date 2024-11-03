import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

export const deleteExercisesData: any = createAsyncThunk(
	'clients/deleteClient',
	async (id: number | string) => {
		try {
			await request(`/exercises/${id}`, 'DELETE');
			return id;
		} catch (error) {
			console.error(error);
		}
	},
);
