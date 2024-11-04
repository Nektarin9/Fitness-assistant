import { request } from '../../../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';

export const deleteClient: any = createAsyncThunk('clients/deleteClient', async (id) => {
	try {
		await request(`${PATCH_URL.CLIENTS}/${id}`, 'DELETE');
		return id;
	} catch (error) {
		console.error(error);
	}
});
