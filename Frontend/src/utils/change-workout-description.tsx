import { Person } from '../interface';
import { v4 as uuidv4 } from 'uuid';

export const changeWorkoutDescription = (
	objId: { value?: string; trainingId?: string | number; id?: string | number },
	client: Person,
	field: string,
) => {
	const { value, trainingId, id } = objId;
	client.trainingProgram?.forEach((item) => {
		if (item.id === trainingId && client.trainingProgram) {
			item.table?.forEach((element) => {
				if (element.id === id) {
					if (field === 'exercise') {
						element.exercise = value;
					} else if (field === 'description') {
						element.description = value;
					}
				}
			});
		}
	});
};

export const addField = (client: Person, id: string | number) => {
	client.trainingProgram?.forEach((item, index) => {
		if (item.id === id && client.trainingProgram) {
			client.trainingProgram[index].table?.push({
				id: uuidv4(),
				exercise: '',
				description: '',
			});
		}
	});
};

export const filterTable = (client: Person, id: string | number) => {
	client.trainingProgram?.forEach((item) => {
		if (item.id === id && item.table) {
			item.table = [
				...item.table.filter(
					({ description, exercise }) => description || exercise,
				),
			];
		}
	});
};
