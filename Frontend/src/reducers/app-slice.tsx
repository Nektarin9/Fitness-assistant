import { createSlice, current } from '@reduxjs/toolkit';
import { fetchClients, postClient, updateClient } from '../actions';
import { changeData } from '../utils';
import { deleteClient } from '../actions/delete-client';

export const appSlice = createSlice({
	name: 'clients',
	initialState: {
		clients: [],
		actionMessage: '',
	},
	reducers: {
		message: (state, action) => {
			state.actionMessage = action.payload;
		},
		clearMessage: (state) => {
			state.actionMessage = '';
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchClients.fulfilled, (state, action) => {
			state.clients = action.payload;
		});
		builder.addCase(postClient.fulfilled, (state, action) => {
			changeData(state.clients, action.payload, 'ADD');
		});
		builder.addCase(updateClient.fulfilled, (state, action) => {
			changeData(state.clients, action.payload, 'UPDATE');
		});
		builder.addCase(deleteClient.fulfilled, (state, action) => {
			changeData(state.clients, action.payload, 'DELETE');
			console.log(current(state.clients));
		});
	},
});
// Экспортируем редукторы
export const { message, clearMessage } = appSlice.actions;
export default appSlice.reducer;
