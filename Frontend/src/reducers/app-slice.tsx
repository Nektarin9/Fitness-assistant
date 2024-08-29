import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
	name: 'app',
	initialState: {
		actionMessage: '',
		search: '',
	},
	reducers: {
		message: (state, action) => {
			state.actionMessage = action.payload;
		},
		clearMessage: (state) => {
			state.actionMessage = '';
		},
		inputSearch: (state, action) => {
			state.search = action.payload;
		},
	},
});

// Экспортируем редукторы
export const { message, clearMessage, inputSearch } = appSlice.actions;
export default appSlice.reducer;
