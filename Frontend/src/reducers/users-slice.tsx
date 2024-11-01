import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authUser, registrationUser } from "../actions";

export interface UserType {
	login?: string,
	rule?: string
	error: boolean
}
export interface initialStateType {
	user: UserType,
	register: string
}
const initialState: initialStateType = {
	user: {error: true},
	register: ""
}
export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		/* Получение users */
		builder.addCase(authUser.fulfilled, (state: initialStateType, action: PayloadAction<UserType>) => {
			state.user = action.payload;
		});
		/* Регистрация */
		builder.addCase(registrationUser.fulfilled, (state: initialStateType, action: PayloadAction<string>) => {
			state.register = action.payload;
		});
	},

});

// Экспортируем редукторы
export const {  } = usersSlice.actions;
export default usersSlice.reducer;
