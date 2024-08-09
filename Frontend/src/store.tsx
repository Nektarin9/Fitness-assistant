import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { trainingDataReducer } from './reducers';
import appSlice from './reducers/app-slice';

const rootReducer = combineReducers({
	appReducer: appSlice,
	trainingDataReducer,
});
export const store = configureStore({ reducer: rootReducer });
