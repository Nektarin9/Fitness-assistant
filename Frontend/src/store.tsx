import { configureStore, combineReducers } from '@reduxjs/toolkit';
import trainingDataSlice from './reducers/training-data-slice';
import clientsSlice from './reducers/clients-slice';
import appSlice from './reducers/app-slice';

const rootReducer = combineReducers({
	clientsSlice,
	trainingDataSlice,
	appSlice,
});
export const store = configureStore({ reducer: rootReducer });
