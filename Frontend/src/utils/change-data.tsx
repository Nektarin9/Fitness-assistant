import { Person } from '../interface/person';

export const changeData = (
	data: Person[],
	payload: Person | number | string,
	type: string,
): void => {
	if (type === 'UPDATE' && typeof payload === 'object') {
		const copyData = [...data];
		copyData.forEach(({ id }, index) => {
			if (id === payload.id) {
				copyData[index] = { ...payload };
			}
		});
	} else if (type === 'DELETE') {
		data.forEach((item, index) => {
			if (item.id === payload) {
				data.splice(index, 1);
			}
		});
	} else if (type === 'ADD' && typeof payload === 'object') {
		data.push(payload);
	}
};
