import { configureStore, combineReducers } from '@reduxjs/toolkit';
import trainingDataSlice from './training-data-slice';
import clientsSlice from './clients-slice';
import appSlice from './app-slice';
import clientSlice from './client-slice';
import usersSlice from './users-slice';

const rootReducer = combineReducers({
	clientsSlice,
	trainingDataSlice,
	appSlice,
	clientSlice,
	usersSlice,
});
export const store = configureStore({ reducer: rootReducer });
