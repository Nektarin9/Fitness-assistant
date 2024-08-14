import { ExercisesData } from './exercises-data';
import { Person } from './person';

export interface AppSliceState {
	actionMessage: string;
	search: string;
	lastPage: number;
	// Добавьте другие свойства состояния, если необходимо
}

export interface СlientsSliceState {
	clients: Person[];
	client: Person
	// Добавьте другие свойства состояния, если необходимо
}

export interface TrainingDataSliceState {
	exercisesData: ExercisesData;
	// Добавьте другие свойства состояния, если необходимо
}
