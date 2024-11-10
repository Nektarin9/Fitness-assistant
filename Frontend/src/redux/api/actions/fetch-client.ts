import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import axios from 'axios';

export const fetchClient: any = createAsyncThunk(
	'clients/fetchClient',
	async (id: string | number) => {
		try {
			const response = await axios.get(`${PATCH_URL.CLIENTS}/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
