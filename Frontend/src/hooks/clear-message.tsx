import { Dispatch, UnknownAction } from 'redux';
import { clearMessage } from '../redux/app-slice';

export const useClearMessage = (dispatch: Dispatch<UnknownAction>) => {
	setTimeout(() => {
		dispatch(clearMessage());
	}, 3000);
};
