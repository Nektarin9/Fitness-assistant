import { Dispatch } from 'redux';
import { ACTION_TYPE } from './index';
import { request } from '../utils';

export const actionClients =
	(): any => async (dispatch: Dispatch<{ type: string; payload: object[] }>) => {
		try {
			const clients = await request('http://localhost:3005/clients');
			dispatch({
				type: ACTION_TYPE.GET_CLIENTS,
				payload: clients,
			});
		} catch (error) {
			console.error(error);
		}
	};
