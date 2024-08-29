import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

export const postTrainingTable: any = createAsyncThunk(
	'clients/postTrainingTable',
	async (id: number | string) => {
		try {
			const response = await request(
				`http://localhost:4000/clients-training/${id}`,
				'POST',
				{
					table: [
						{
							exercise: 'Упражнение',
							description: 'Описание',
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
