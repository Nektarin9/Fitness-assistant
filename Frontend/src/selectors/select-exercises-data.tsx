import { ExercisesData, TrainingDataSliceState } from '../interface';

interface TrainingDataState {
	trainingDataSlice: TrainingDataSliceState;
}

export const selectExercisesData = (state: TrainingDataState): ExercisesData => {
	return state.trainingDataSlice.exercisesData;
};
