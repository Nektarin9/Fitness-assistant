import { ACTION_TYPE } from './action-type';
export const actionMessage = (message: string) => {
	return {
		type: ACTION_TYPE.ACTION_MESSAGE,
		payload: message,
	};
};
