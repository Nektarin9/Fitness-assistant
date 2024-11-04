import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authUser, logoutUser, registrationUser } from './api/actions';

export interface UserType {
	user?: { login?: string; rule?: string };
	error: boolean;
}
export interface initialStateType {
	user: UserType;
	register: string;
}
const initialState: initialStateType = {
	user: { error: true },
	register: '',
};
export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		saveUser: (state, action) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		/* Получение users */
		builder.addCase(
			authUser.fulfilled,
			(state: initialStateType, action: PayloadAction<UserType>) => {
				state.user = action.payload;
			},
		);
		/* Регистрация */
		builder.addCase(
			registrationUser.fulfilled,
			(state: initialStateType, action: PayloadAction<string>) => {
				state.register = action.payload;
			},
		);
		/* Выход из аккаунта */
		builder.addCase(
			logoutUser.fulfilled,
			(state: initialStateType, action: PayloadAction<string>) => {
				state.register = action.payload;
			},
		);
	},
});

// Экспортируем редукторы
export const { saveUser } = usersSlice.actions;
export default usersSlice.reducer;
