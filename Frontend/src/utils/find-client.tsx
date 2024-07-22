import { Person } from '../interface/person';

export const findClient = (clients: Person[], id: number | string | undefined): Person => {

	let client: Person = {};
	clients.forEach((elem) => {
		if (id == elem.id) {
			client = {...elem};
		}
	});
	return client;
};
