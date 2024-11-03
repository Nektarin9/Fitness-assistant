import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../utils';
import { TrainingProgram } from '../interface';

interface data {
	id?: string | number;
	training?: TrainingProgram;
}

export const addTrainingTable: any = createAsyncThunk(
	'addTrainingTable',
	async (data: data) => {
		try {
			await request(
				`/clients/save-table/${data.id}`,
				'PATCH',
				{
					...data.training,
				},
			);
			return data.training?.id;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
