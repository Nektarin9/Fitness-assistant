import { initialStateType, UserType } from '../reducers/users-slice';

interface AppState {
	usersSlice: initialStateType;
}

export const selectAuthenticated = (state: AppState): UserType => {
	return state.usersSlice.user;
};
