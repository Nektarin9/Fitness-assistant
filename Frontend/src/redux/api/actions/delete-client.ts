import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import { backendApiAxios } from '../axiosConfig';

export const deleteClient: any = createAsyncThunk('clients/deleteClient', async (id) => {
	try {
		await backendApiAxios.delete(`${PATCH_URL.CLIENTS}/${id}`);
		return id;
	} catch (error) {
		console.error(error);
	}
});
