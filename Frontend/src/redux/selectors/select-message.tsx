import { AppSliceState } from '../../interface';

interface AppState {
	appSlice: AppSliceState;
}

// Типизированный селектор
export const selectMessage = (state: AppState): string => {
	return state.appSlice.actionMessage;
};
