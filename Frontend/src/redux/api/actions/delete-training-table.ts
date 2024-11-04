import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../utils';
import { PATCH_URL } from '../patch';

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
			await request(PATCH_URL.CLIENTS_TRAINING, 'DELETE', {
				id,
				trainingId,
			});
			return trainingId;
		} catch (error) {
			console.error(error);
		}
	},
);
