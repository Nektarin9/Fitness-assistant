import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../utils';
import { PATCH_URL } from '../patch';

export const fetchClient: any = createAsyncThunk(
	'clients/fetchClient',
	async (id: string | number) => {
		try {
			const response = await request(`${PATCH_URL.CLIENTS}/${id}`);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
