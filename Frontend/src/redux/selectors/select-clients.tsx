import { СlientsSliceState, Person } from '../../interface';

interface AppState {
	clientsSlice: СlientsSliceState;
}

// Типизированный селектор
export const selectClients = (state: AppState): Person[] => {
	return state.clientsSlice.clients;
};
