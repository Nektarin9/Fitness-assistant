import { Dispatch } from 'redux';
import { request } from '../utils';
import { ExercisesData } from '../interface';
import { ACTION_TYPE } from './action-type';

export const actionAddExercise =
	(exercise: ExercisesData): any =>
	async (dispatch: Dispatch<{ type: string; payload: object[] }>) => {
		try {
			const data = await request(
				'http://localhost:3005/exercises',
				'POST',
				exercise,
			);
			dispatch({
				type: ACTION_TYPE.ADD_EXERCISES,
				payload: data,
			});
		} catch (error) {
			console.error(error);
		}
	};
