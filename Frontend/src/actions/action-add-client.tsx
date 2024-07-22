import { Dispatch } from 'redux';
import { ACTION_TYPE } from './index';
import { request } from '../utils';
import { Person } from '../interface/person';

export const actionAddClient =
	(clientInfo: Person): any =>
	async (dispatch: Dispatch<{ type: string; payload: object[] }>) => {
		try {
			const data = await request(
				'http://localhost:3005/clients',
				'POST',
				clientInfo,
			);
			dispatch({
				type: ACTION_TYPE.ADD_CLIENT,
				payload: data,
			});
		} catch (error) {
			console.error(error);
		}
	};
