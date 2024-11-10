import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import axios from 'axios';

export const deleteExercisesData: any = createAsyncThunk(
	'clients/deleteClient',
	async (id: number | string) => {
		try {
			await axios.delete(`${PATCH_URL.EXERCISES}/${id}`);
			return id;
		} catch (error) {
			console.error(error);
		}
	},
);
