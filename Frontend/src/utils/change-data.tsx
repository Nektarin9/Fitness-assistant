import { Person } from '../interface/person';

export const changeData = (
	data: Person[],
	payload: Person | number | string,
	type: string,
): Person[] | undefined => {
	if (type === 'UPDATE' && typeof payload === 'object') {
		const copyData = [...data];
		copyData.forEach(({ id }, index) => {
			if (id === payload.id) {
				copyData[index] = { ...payload };
			}
		});
		return copyData;
	} else if (type === 'DELETE') {
		return data.filter((product) => product.id !== payload);
	} else if (type === 'ADD' && typeof payload === 'object') {
		data.push(payload);
		return data;
	}
};
