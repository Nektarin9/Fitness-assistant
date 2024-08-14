export interface ExercisesData {
	exercises?: Exercises[];
	total?: number;
}

interface Exercises {
	id?: number | string;
	exerciseName?: string;
	category?: string;
}
