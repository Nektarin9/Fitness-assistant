import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../utils';
import { PATCH_URL } from '../patch';

export const deleteExercisesData: any = createAsyncThunk(
	'clients/deleteClient',
	async (id: number | string) => {
		try {
			await request(`${PATCH_URL.EXERCISES}/${id}`, 'DELETE');
			return id;
		} catch (error) {
			console.error(error);
		}
	},
);
