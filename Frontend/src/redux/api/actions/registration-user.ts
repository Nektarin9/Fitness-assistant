import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../utils';
import { PATCH_URL } from '../patch';

interface UserType {
	login: string;
	password: string;
}

export const registrationUser: any = createAsyncThunk(
	'users/registrationUser',
	async (user: UserType) => {
		try {
			const response = await request(PATCH_URL.REGISTRATION_USER, 'POST', user);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
