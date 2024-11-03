import { request } from '../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteClient: any = createAsyncThunk('clients/deleteClient', async (id) => {
	try {
		await request(`/clients/${id}`, 'DELETE');
		return id;
	} catch (error) {
		console.error(error);
	}
});
