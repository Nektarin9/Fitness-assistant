import { СlientsSliceState, Person } from '../interface';

interface AppState {
	clientsSlice: СlientsSliceState;
}

export const selectClient = (state: AppState): Person => {
	return state.clientsSlice.client;
};
