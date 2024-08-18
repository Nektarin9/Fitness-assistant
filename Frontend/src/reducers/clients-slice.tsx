import { createSlice } from '@reduxjs/toolkit';
import {
	fetchClient,
	fetchClients,
	postClient,
	postTrainingTable,
	updateClient,
} from '../actions';
import { changeData } from '../utils';
import { deleteClient } from '../actions/delete-client';
import { Person } from '../interface';

export const clientsSlice = createSlice({
	name: 'clients',
	initialState: {
		clients: [] as Person[],
		client: {} as Person,
	},
	reducers: {
		clearClient: (state) => {
			state.client = {};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchClients.fulfilled, (state, action) => {
			state.clients = action.payload;
		});
		builder.addCase(fetchClient.fulfilled, (state, action) => {
			state.client = action.payload;
		});
		builder.addCase(postClient.fulfilled, (state, action) => {
			changeData(state.clients, action.payload, 'ADD');
		});
		builder.addCase(updateClient.fulfilled, (state, action) => {
			changeData(state.clients, action.payload, 'UPDATE');
		});
		builder.addCase(deleteClient.fulfilled, (state, action) => {
			changeData(state.clients, action.payload, 'DELETE');
		});
		builder.addCase(postTrainingTable.fulfilled, (state, action) => {
			if (Array.isArray(state.client.trainingProgram)) {
				changeData(state.client.trainingProgram, action.payload, 'ADD');
			}
		});
	},
});
// Экспортируем редукторы
export const { clearClient} = clientsSlice.actions;
export default clientsSlice.reducer;
