import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

interface UserType {
	login: string,
	password: string
}

export const authUser: any = createAsyncThunk(
	'users/authUser',
	async (user: UserType) => {
		try {
			const response = await request(
				`/login`,
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
