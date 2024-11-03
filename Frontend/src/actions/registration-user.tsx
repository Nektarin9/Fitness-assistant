import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

interface UserType {
	login: string,
	password: string
}

export const registrationUser: any = createAsyncThunk(
	'users/registrationUser',
	async (user: UserType) => {
		try {
			const response = await request(
				`/register`,
				'POST',
				user
			);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
