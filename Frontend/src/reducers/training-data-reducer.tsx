import { ACTION_TYPE } from '../actions';
import { ExercisesData, TrainingDataReducerState } from '../interface';
import { changeData } from '../utils';

const initialAppState = {
	exercisesData: [],
};

export const trainingDataReducer = (
	state: TrainingDataReducerState = initialAppState,
	action: { type: string; payload: ExercisesData | number | string | boolean },
) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.GET_EXERCISES_DATA:
			return {
				...state,
				exercisesData: payload,
			};
		case ACTION_TYPE.ADD_EXERCISES:
			if (typeof payload === 'object') {
				return {
					...state,
					exercisesData: changeData(state.exercisesData, payload, 'ADD'),
				};
			}
			return { ...state };
		case ACTION_TYPE.DELETE_EXERCISES:
			if (typeof payload === 'number' || typeof payload === 'string') {
				return {
					...state,
					exercisesData: changeData(state.exercisesData, payload, 'DELETE'),
				};
			}
			return { ...state };

		default:
			return state;
	}
};
