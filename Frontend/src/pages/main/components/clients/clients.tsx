import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectClients } from '../../../../selectors';
import { useEffect } from 'react';
import { Button } from '../../../../components';
import { deleteClient, fetchClients } from '../../../../actions';
import styled from 'styled-components';


const ClienstsContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const clients = useSelector(selectClients);
	useEffect(() => {
		dispatch(fetchClients());
	}, [dispatch]);
	const removeCard = (id: number | string | undefined) => {
		dispatch(deleteClient(id));
	};
	return (
		<div className={className}>
			{clients.map(({ id, name, phone, image }) => (
				<div key={id}>
					<Link to={`/client/${id}`} className="card">
						<div>
							<img src={image} alt={name} />
							<p className="p-text">{name}</p>
							<p className="p-text">{phone}</p>
						</div>
					</Link>
					<div className="btn-container">
						<Button
							width="100px;"
							backgroundColor={'#820000;'}
							backgroundColorHover={'#cf0101'}
							onClick={() => removeCard(id)}
						>
							Удалить
						</Button>
						<Link to={`/cardEditing/${id}`}>
							<Button width="100px;">Изменить</Button>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export const Clients = styled(ClienstsContainer)`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	.card {
		width: 250px;
		height: 250px;
		display: flex;
		justify-content: center;
		cursor: pointer;
		background-color: #ffffff;
		border-radius: 10px;
		margin: 10px;
		padding: 10px;
		-webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
		-moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
		box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
		transform: 0.3s;
		transition: 0.3s;
	}

	.card:hover {
		transform: 0.3s;
		transition: 0.3s;
		background-color: #d7fec6cc;
	}
	img {
		border-radius: 10px;
		width: 150px;
		margin: 0;
		padding: 0;
	}

	.p-text {
		vertical-align: center;
		font-size: 18px;
	}
	.btn-container {
		margin: 0 0 50px 0;
		display: flex;
		justify-content: center;
		gap: 20px;
	}
`;
