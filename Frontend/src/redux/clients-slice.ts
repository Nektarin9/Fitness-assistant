import { createSlice } from '@reduxjs/toolkit';
import { fetchClients, postClient, updateClient, deleteClient } from './api/actions';
import { changeData } from '../utils';
import { Person } from '../interface';

export const clientsSlice = createSlice({
	name: 'clients',
	initialState: {
		clients: [] as Person[],
	},
	reducers: {},
	extraReducers: (builder) => {
		/* Получение обьектов с клиентами */
		builder.addCase(fetchClients.fulfilled, (state, action) => {
			state.clients = action.payload;
		});

		/* CRUD операции с карточками клиентов */
		builder.addCase(postClient.fulfilled, (state, action) => {
			changeData(state.clients, action.payload, 'ADD');
		});
		builder.addCase(updateClient.fulfilled, (state, action) => {
			changeData(state.clients, action.payload, 'UPDATE');
		});
		builder.addCase(deleteClient.fulfilled, (state, action) => {
			changeData(state.clients, action.payload, 'DELETE');
		});
	},
});

// Экспортируем редукторы

export default clientsSlice.reducer;
