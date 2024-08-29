import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';

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
			await request(`http://localhost:4000/clients-training`, 'DELETE', {
				id,
				trainingId,
			});
			return trainingId;
		} catch (error) {
			console.error(error);
		}
	},
);
