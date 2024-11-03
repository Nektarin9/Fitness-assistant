import { createAsyncThunk } from '@reduxjs/toolkit';
import { Person } from '../interface';
import { request } from '../utils';

export const fetchClients: any = createAsyncThunk<Person[], void>(
	'clients/fetchClients',
	async () => {
		try {
			const response = await request('/clients');
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
