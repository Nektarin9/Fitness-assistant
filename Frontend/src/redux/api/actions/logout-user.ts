import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';

export const logoutUser: any = createAsyncThunk('users/logoutUser', async () => {
	try {
		const response = await axios.post(PATCH_URL.LOGOUT, 'POST');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
});
