import { AppSliceState } from '../interface';

interface AppState {
	trainingDataSlice: AppSliceState;
}

// Типизированный селектор

export const selectLastPage = (state: AppState) => {
	return state.trainingDataSlice.lastPage;
};
