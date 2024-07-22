/* eslint-disable react-hooks/exhaustive-deps */
import { ClientForm } from '../../../../components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddClient, actionMessage, actionUpdateClient } from '../../../../actions';
import { useNavigate, useParams } from 'react-router-dom';
import { selectClients } from '../../../../selectors';
import { findClient } from '../../../../utils';
import { useClearMessage } from '../../../../hooks';
import styled from 'styled-components';

const AdditionContainer = ({ className }: { className?: string }) => {
	// Создаем один объект состояния для всех полей
	const [photoUrl, setPhotoUrl] = useState('');
	const [clientName, setClientName] = useState('');
	const [clientPhone, setClientPhone] = useState('');
	const [clientAge, setClientAge] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const clearMessage = useClearMessage;
	const clients = useSelector(selectClients);
	const client = findClient(clients, params.id);

	const handleAdd = () => {
		dispatch(
			actionAddClient({
				image: photoUrl,
				name: clientName,
				phone: clientPhone,
				age: clientAge,
				training_program: {},
			}),
		);
		dispatch(actionMessage('Карточка добавлена'));
		clearMessage(dispatch);
		navigate('/');
	};
	const handleUpdate = () => {
		dispatch(
			actionUpdateClient(params.id, {
				image: photoUrl,
				name: clientName,
				phone: clientPhone,
				age: clientAge,
			}),
		);
		dispatch(actionMessage('Карточка изменена'));
		clearMessage(dispatch);
		navigate('/');
	};
	useEffect(() => {
		const { image, name, phone, age } = client;
		setPhotoUrl(image ? image : '');
		setClientName(name ? name : '');
		setClientPhone(phone ? phone : '');
		setClientAge(age ? age : '');
	}, [dispatch, params.id, clients]);

	return (
		<div className={className}>
			<ClientForm
				setPhotoUrl={setPhotoUrl}
				photoUrl={photoUrl}
				setClientName={setClientName}
				clientName={clientName}
				setClientPhone={setClientPhone}
				clientPhone={clientPhone}
				setClientAge={setClientAge}
				clientAge={clientAge}
				btnOnclick={params.id ? handleUpdate : handleAdd}
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
