import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

interface UserType {
	login: string;
	password: string;
}

export const registrationUser: any = createAsyncThunk(
	'users/registrationUser',
	async (user: UserType) => {
		try {
			const response = await backendApiAxios.post(PATCH_URL.REGISTRATION_USER, user);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
