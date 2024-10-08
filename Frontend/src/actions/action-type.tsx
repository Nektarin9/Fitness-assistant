type StringMap = {
	[key: string]: string;
};

export const ACTION_TYPE: StringMap = {
	GET_CLIENTS: 'GET_CLIENTS',
	ADD_CLIENT: 'ADD_CLIENT',
	DELETE_CLIENT: 'DELETE_CLIENT',
	ACTION_MESSAGE: 'ACTION_MESSAGE',
	CLEAR_MESSAGE: 'CLEAR_MESSAGE',
	UPDATE_CLIENT: 'UPDATE_CLIENT',
	GET_EXERCISES_DATA: 'GET_EXERCISES_DATA',
	ADD_EXERCISES: 'ADD_EXERCISES',
	DELETE_EXERCISES: 'DELETE_EXERCISES',
};
