import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

export const logoutUser: any = createAsyncThunk('users/logoutUser', async () => {
	try {
		const response = await backendApiAxios.post(PATCH_URL.LOGOUT, 'POST');
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
});
