import { Dispatch } from "redux";
import { request } from "../utils";
import { ACTION_TYPE } from "./action-type";

export const actionDeleteExercises =
	(id: number | string | undefined): any =>
	async (
		dispatch: Dispatch<{ type: string; payload: number | string | undefined }>,
	) => {
		try {
			await request(`http://localhost:3005/exercises/${id}`, 'DELETE');
			dispatch({
				type: ACTION_TYPE.DELETE_EXERCISES,
				payload: id,
			});
		} catch (error) {
			console.error(error);
		}
	};
