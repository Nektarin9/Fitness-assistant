/* eslint-disable react-hooks/exhaustive-deps */
import { ClientForm } from './client-form/client-form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients, postClient, updateClient } from '../../redux/api/actions';
import { useNavigate, useParams } from 'react-router-dom';
import { selectClients } from '../../redux/selectors';
import { findClient } from '../../utils';
import { useClearMessage } from '../../hooks';
import { message } from '../../redux/app-slice';
import styled from 'styled-components';
import { IMG_URL } from '../../redux/api/patch';

const AdditionContainer = ({ className }: { className?: string }) => {
	// Создаем один объект состояния для всех полей
	const [photoFile, setPhotoFile] = useState<File | null>(null);
	const [clientName, setClientName] = useState<string>('');
	const [clientPhone, setClientPhone] = useState<string>('');
	const [clientAge, setClientAge] = useState<string>('');
	const [photoUrl, setPhotoUrl] = useState<string>('');
	const [defaultImg, setDefaultImg] = useState<string>('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const clearMessage = useClearMessage;
	const clients = useSelector(selectClients);
	const client = findClient(clients, params.id);

	const handleAdd = async () => {
		const formData = new FormData();
		formData.append('defaultImg', defaultImg);
		formData.append('imageFile', photoFile || ''); // Добавьте файл изображения
		formData.append('name', clientName);
		formData.append('phone', clientPhone);
		formData.append('age', clientAge);
		formData.append(
			'trainingProgram',
			JSON.stringify([
				{ table: [{ exercise: 'Упражнение', description: 'Описание' }] },
			]),
		); // Преобразуйте массив в строку JSON

		await dispatch(postClient(formData));

		dispatch(message('Карточка добавлена'));
		clearMessage(dispatch);
		navigate('/');
	};
	const handleUpdate = async () => {
		const formData = new FormData();
		formData.append('defaultImg', defaultImg);
		formData.append('imageFile', photoFile || ''); // Добавьте файл изображения
		formData.append('name', clientName);
		formData.append('phone', clientPhone);
		formData.append('age', clientAge);
		formData.append('id', params.id || '');

		await dispatch(updateClient(formData));

		dispatch(message('Карточка изменена'));
		clearMessage(dispatch);
		navigate('/');
	};
	useEffect(() => {
		dispatch(fetchClients());
	}, []);
	useEffect(() => {
		const { image, name, phone, age } = client;
		setPhotoUrl(image ? image : IMG_URL.DEFAULT_PHOTO);
		setClientName(name ? name : '');
		setClientPhone(phone ? phone : '');
		setClientAge(age ? age : '');
	}, [dispatch, params.id, clients]);

	return (
		<div className={className}>
			<ClientForm
				setPhotoFile={setPhotoFile}
				photoFile={photoFile}
				setClientName={setClientName}
				clientName={clientName}
				setClientPhone={setClientPhone}
				clientPhone={clientPhone}
				setClientAge={setClientAge}
				clientAge={clientAge}
				btnOnclick={params.id ? handleUpdate : handleAdd}
				setPhotoUrl={setPhotoUrl}
				photoUrl={photoUrl}
				setDefaultImg={setDefaultImg}
			>
				{params.id ? 'Изменить' : 'Добавить'}
			</ClientForm>
		</div>
	);
};

export const Addition = styled(AdditionContainer)`
	margin: 50px auto;
	max-width: 900px;
`;
