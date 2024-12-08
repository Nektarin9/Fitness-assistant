import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

export const postTrainingTable: any = createAsyncThunk(
	'clients/postTrainingTable',
	async (id: number | string) => {
		try {
			const response = await backendApiAxios.post(
				`${PATCH_URL.CLIENTS_TRAINING}/${id}`,
				{
					table: [
						{
							exercise: 'Упражнение',
							description: 'Описание',
						},
					],
				},
			);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
