import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../../utils';
import { Person } from '../../../interface';
import { PATCH_URL } from '../patch';

export const updateClient: any = createAsyncThunk(
	'clients/updateClient',
	async (data: Person) => {
		try {
			const response = await request(`${PATCH_URL.CLIENTS}/${data.id}`, 'PATCH', {
				image: data.image,
				name: data.name,
				phone: data.phone,
				age: data.age,
			});
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);
