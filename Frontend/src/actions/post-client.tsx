import { request } from '../utils';
import { Person } from '../interface/person';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postClient: any = createAsyncThunk(
	'clients/postClient',
	async (clientInfo: Person) => {
		try {
			const response = await request(
				'http://localhost:3005/clients',
				'POST',
				clientInfo,
			);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
