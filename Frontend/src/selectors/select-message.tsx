import { AppSliceState } from '../interface/reduser-state';

interface AppState {
	appSlice: AppSliceState;
}

// Типизированный селектор
export const selectMessage = (state: AppState): string => {
	return state.appSlice.actionMessage;
};
