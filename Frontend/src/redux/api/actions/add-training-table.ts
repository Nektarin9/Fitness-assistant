import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrainingProgram } from '../../../interface';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

interface data {
	id?: string | number;
	training?: TrainingProgram;
}

export const addTrainingTable: any = createAsyncThunk(
	'addTrainingTable',
	async (data: data) => {
		try {
			await backendApiAxios.patch(`${PATCH_URL.CLIENTS_SAVE_TABLE}/${data.id}`, {
				...data.training,
			});
			return data.training?.id;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
