import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

export const deleteTrainingTable: any = createAsyncThunk(
	'clients/deleteTrainingTable',
	async ({
		id,
		trainingId,
	}: {
		id?: number | string;
		trainingId?: number | string;
	}) => {
		try {
			await backendApiAxios.post(PATCH_URL.CLIENTS_TRAINING, {
				id,
				trainingId,
			});
			return trainingId;
		} catch (error) {
			console.error(error);
		}
	},
);
