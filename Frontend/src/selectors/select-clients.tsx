import { AppReducerState, Person } from '../interface';




interface AppState {
	appReducer: AppReducerState;
}

// Типизированный селектор
export const selectClients = (state: AppState): Person[] => {
	return state.appReducer.clients;
};
