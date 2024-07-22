import { Dispatch } from 'redux';
import { request } from '../utils';
import { ACTION_TYPE } from './action-type';
import { Person } from '../interface/person';

export const actionUpdateClient =
	(id: number | string | undefined, data: Person): any =>
	async (
		dispatch: Dispatch<{ type: string; payload: number | string | undefined }>,
	) => {
		try {
			const response = await request(
				`http://localhost:3005/clients/${id}`,
				'PATCH',
				{
					image: data.image,
					name: data.name,
					phone: data.phone,
					age: data.age,
				},
			);
			dispatch({
				type: ACTION_TYPE.UPDATE_CLIENT,
				payload: response,
			});
		} catch (error) {
			console.error(error);
		}
	};
