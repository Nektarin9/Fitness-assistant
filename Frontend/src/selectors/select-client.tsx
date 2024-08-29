import { СlientsSliceState, Person } from '../interface';

interface AppState {
	clientSlice: СlientsSliceState;
}

export const selectClient = (state: AppState): Person => {
	return state.clientSlice.client;
};
