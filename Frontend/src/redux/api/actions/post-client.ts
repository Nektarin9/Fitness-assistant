import { Person } from '../../../interface/person';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import axios from 'axios';

export const postClient: any = createAsyncThunk(
	'clients/postClient',
	async (clientInfo: Person) => {
		try {
			const response = await axios.post(PATCH_URL.CLIENTS, clientInfo);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
