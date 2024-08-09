import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

export const postTrainingTable: any = createAsyncThunk(
	'clients/postTrainingTable',
	async (id: number | string) => {
		try {
			const response = await request(
				`http://localhost:3005/clients/${id}`,
				'POST',
				{
					table: [
						{
							exercise: '',
							description: '',
						},
					],
				},
			);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
