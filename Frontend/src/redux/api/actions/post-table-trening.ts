import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../utils';
import { PATCH_URL } from '../patch';

export const postTrainingTable: any = createAsyncThunk(
	'clients/postTrainingTable',
	async (id: number | string) => {
		try {
			const response = await request(
				`${PATCH_URL.CLIENTS_TRAINING}/${id}`,
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
