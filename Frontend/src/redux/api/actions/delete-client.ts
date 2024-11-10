import { createAsyncThunk } from '@reduxjs/toolkit';
import { PATCH_URL } from '../patch';
import axios from 'axios';

export const deleteClient: any = createAsyncThunk('clients/deleteClient', async (id) => {
	try {
		await axios.delete(`${PATCH_URL.CLIENTS}/${id}`);
		return id;
	} catch (error) {
		console.error(error);
	}
});
