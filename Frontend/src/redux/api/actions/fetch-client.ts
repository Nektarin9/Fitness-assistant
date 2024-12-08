import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

export const fetchClient: any = createAsyncThunk(
	'clients/fetchClient',
	async (id: string | number) => {
		try {
			const response = await backendApiAxios.get(`${PATCH_URL.CLIENTS}/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
