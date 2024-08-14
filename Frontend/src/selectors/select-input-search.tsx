import { AppSliceState } from '../interface';

interface AppState {
	appSlice: AppSliceState;
}

// Типизированный селектор
export const selectInputSearch = (state: AppState): string => {
	return state.appSlice.search;
};
