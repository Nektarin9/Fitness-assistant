import { request } from '../../../utils';
import { Person } from '../../../interface/person';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';

export const postClient: any = createAsyncThunk(
	'clients/postClient',
	async (clientInfo: Person) => {
		try {
			const response = await request(PATCH_URL.CLIENTS, 'POST', clientInfo);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
