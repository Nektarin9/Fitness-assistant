import { actionClearMessage } from '../actions';
import { Dispatch, UnknownAction } from 'redux';

export const useClearMessage = (dispatch: Dispatch<UnknownAction>) => {
	setTimeout(() => {
		dispatch(actionClearMessage());
	}, 3000);
};
