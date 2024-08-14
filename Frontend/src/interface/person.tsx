export interface Person {
	id?: number | string;
	name?: string;
	phone?: string;
	age?: string | number;
	image?: string;
	training_program?: [{ table?: TrainingProgram[]; id?: number | string }];
}

export interface TrainingProgram {
	id?: number | string;
	exercise?: string;
	description?: string;
}
