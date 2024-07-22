import { ExercisesData, TrainingDataReducerState } from '../interface';

interface TrainingDataState {
	trainingDataReducer: TrainingDataReducerState;
}

export const selectExercisesData = (state: TrainingDataState): ExercisesData[] => {
	return state.trainingDataReducer.exercisesData;
};
