import { Dispatch } from 'redux';
import { request } from '../utils';
import { ACTION_TYPE } from './action-type';

export const actionDeleteClient =
	(id: number | string | undefined): any =>
	async (
		dispatch: Dispatch<{ type: string; payload: number | string | undefined }>,
	) => {
		try {
			await request(`http://localhost:3005/clients/${id}`, 'DELETE');
			dispatch({
				type: ACTION_TYPE.DELETE_CLIENT,
				payload: id,
			});
		} catch (error) {
			console.error(error);
		}
	};
