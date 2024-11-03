import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

export const fetchClient: any = createAsyncThunk(
	'clients/fetchClient',
	async (id: string | number) => {
		try {
			const response = await request(`/clients/${id}`);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
