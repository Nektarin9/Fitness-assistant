import { ExercisesData } from './exercises-data';
import { Person } from './person';

export interface AppReducerState {
	clients: Person[];
	actionMessage: string;
	// Добавьте другие свойства состояния, если необходимо
}

export interface TrainingDataReducerState {
	exercisesData: ExercisesData[];
	// Добавьте другие свойства состояния, если необходимо
}
