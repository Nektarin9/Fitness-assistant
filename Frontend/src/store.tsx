import { configureStore, combineReducers } from '@reduxjs/toolkit';
import trainingDataSlice from './reducers/training-data-slice';
import clientsSlice from './reducers/clients-slice';
import appSlice from './reducers/app-slice';
import clientSlice from './reducers/client-slice';

const rootReducer = combineReducers({
	clientsSlice,
	trainingDataSlice,
	appSlice,
	clientSlice
});
export const store = configureStore({ reducer: rootReducer });
