import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';


export const logoutUser: any = createAsyncThunk(
	'users/logoutUser',
	async () => {
		try {
			const response = await request(`http://localhost:4000/logout`, 'POST');
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);