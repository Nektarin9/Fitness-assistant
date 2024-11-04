import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../utils';
import { TrainingProgram } from '../../../interface';
import { PATCH_URL } from '../patch';

interface data {
	id?: string | number;
	training?: TrainingProgram;
}

export const addTrainingTable: any = createAsyncThunk(
	'addTrainingTable',
	async (data: data) => {
		try {
			await request(`${PATCH_URL.CLIENTS_SAVE_TABLE}/${data.id}`, 'PATCH', {
				...data.training,
			});
			return data.training?.id;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
