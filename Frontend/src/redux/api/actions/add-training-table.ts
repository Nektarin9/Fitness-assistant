import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrainingProgram } from '../../../interface';
import { PATCH_URL } from '../patch';
import axios from 'axios';

interface data {
	id?: string | number;
	training?: TrainingProgram;
}

export const addTrainingTable: any = createAsyncThunk(
	'addTrainingTable',
	async (data: data) => {
		try {
			await axios.patch(`${PATCH_URL.CLIENTS_SAVE_TABLE}/${data.id}`, {
				...data.training,
			});
			return data.training?.id;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
