import { Dispatch, UnknownAction } from 'redux';
import { clearMessage } from '../reducers/app-slice';

export const useClearMessage = (dispatch: Dispatch<UnknownAction>) => {
	setTimeout(() => {
		dispatch(clearMessage());
	}, 3000);
};
