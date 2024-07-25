import { Dispatch } from 'redux';
import { request } from '../utils';
import { ACTION_TYPE } from './action-type';

export const actionGetExercisesData =
	(): any => async (dispatch: Dispatch<{ type: string; payload: object[] }>) => {
		try {
			const exercises = await request('http://localhost:3005/exercises');
			dispatch({
				type: ACTION_TYPE.GET_EXERCISES_DATA,
				payload: exercises,
			});
			return exercises
		} catch (error) {
			console.error(error);
		}
	};
