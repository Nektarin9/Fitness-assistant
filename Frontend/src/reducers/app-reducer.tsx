import { ACTION_TYPE } from '../actions';
import { AppReducerState, Person } from '../interface';
import { changeData } from '../utils';

const initialAppState = {
	clients: [],
	actionMessage: '',
};

export const appReducer = (
	state: AppReducerState = initialAppState,
	action: { type: string; payload: Person | number | string | boolean },
) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.GET_CLIENTS:
			return {
				...state,
				clients: payload,
			};
		case ACTION_TYPE.ADD_CLIENT:
			if (typeof payload === 'object') {
				return {
					...state,
					clients: changeData(state.clients, payload, 'ADD'),
				};
			}
			return { ...state };
		case ACTION_TYPE.DELETE_CLIENT:
			if (typeof payload === 'number' || typeof payload === 'string') {
				return {
					clients: changeData(state.clients, payload, 'DELETE'),
				};
			}
			return { ...state };
		case ACTION_TYPE.UPDATE_CLIENT:
			if (typeof payload === 'number' || typeof payload === 'string') {
				return {
					...state,
					clients: changeData(state.clients, payload, 'UPDATE'),
				};
			}
			return { ...state };

		case ACTION_TYPE.ACTION_MESSAGE:
			return {
				...state,
				actionMessage: payload,
			};
		case ACTION_TYPE.CLEAR_MESSAGE:
			return {
				...state,
				actionMessage: '',
			};
		default:
			return state;
	}
};
