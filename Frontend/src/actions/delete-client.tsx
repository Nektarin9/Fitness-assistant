import { request } from '../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteClient: any = createAsyncThunk('clients/deleteClient', async (id) => {
	try {
		await request(`http://localhost:4000/clients/${id}`, 'DELETE');
		return id;
	} catch (error) {
		console.error(error);
	}
});
