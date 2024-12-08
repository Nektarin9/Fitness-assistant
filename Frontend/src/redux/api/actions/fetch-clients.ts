import { createAsyncThunk } from '@reduxjs/toolkit';
import { Person } from '../../../interface';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

export const fetchClients: any = createAsyncThunk<Person[], void>(
	'clients/fetchClients',
	async () => {
		try {
			const response = await backendApiAxios.get(PATCH_URL.CLIENTS);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
