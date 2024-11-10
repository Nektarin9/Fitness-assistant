import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import axios from 'axios';

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
			await axios.post(PATCH_URL.CLIENTS_TRAINING, {
				id,
				trainingId,
			});
			return trainingId;
		} catch (error) {
			console.error(error);
		}
	},
);
