import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../utils';
import { PATCH_URL } from '../patch';

export const logoutUser: any = createAsyncThunk('users/logoutUser', async () => {
	try {
		const response = await request(PATCH_URL.LOGOUT, 'POST');
		return response;
	} catch (error) {
		console.error(error);
		throw error;
	}
});
