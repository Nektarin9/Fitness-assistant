import { AppReducerState } from '../interface';

interface AppState {
	appReducer: AppReducerState;
}

// Типизированный селектор
export const selectMessage = (state: AppState): string => {
	return state.appReducer.actionMessage;
};
