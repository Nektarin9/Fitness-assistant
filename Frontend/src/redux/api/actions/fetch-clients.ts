import { createAsyncThunk } from '@reduxjs/toolkit';
import { Person } from '../../../interface';
import { request } from '../../../utils';
import { PATCH_URL } from '../patch';

export const fetchClients: any = createAsyncThunk<Person[], void>(
	'clients/fetchClients',
	async () => {
		try {
			const response = await request(PATCH_URL.CLIENTS);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
