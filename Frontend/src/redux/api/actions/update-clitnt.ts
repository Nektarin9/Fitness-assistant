import { createAsyncThunk } from '@reduxjs/toolkit';
import { Person } from '../../../interface';
import { PATCH_URL } from '../patch';
import axios from 'axios';

export const updateClient: any = createAsyncThunk(
	'clients/updateClient',
	async (data: Person) => {
		try {
			const response = await axios.patch(PATCH_URL.CLIENTS,
				data
		);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
