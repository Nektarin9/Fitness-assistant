import { Button, ExerciseChart, Loader } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectClient } from '../../../../redux/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchClient, postTrainingTable } from '../../../../redux/api/actions';
import styled from 'styled-components';

const ListWorkoutsContainer = ({ className }: { className?: string }) => {
	const client = useSelector(selectClient);
	const dispatch = useDispatch();
	const params = useParams();
	useEffect(() => {
		dispatch(fetchClient(params.id));
	}, [dispatch, params.id]);
	return (
		client.id ? <div className={className}>
			<div className="client-info">
				<div>
					<p>{client.name}</p>
					<a href={`tel:${client.phone}`}>{client.phone}</a>
					<h2>Программа тренировок</h2>
					<Button
						onClick={() => dispatch(postTrainingTable(params.id))}
						width="200px"
					>
						Добавить тренировку
					</Button>
				</div>
				<img src={client.image} />
			</div>
			<div className="training-container">
				{client.trainingProgram?.map(({ id, table }) => (
					<ExerciseChart
						key={id}
						id={params.id}
						trainingId={id}
						table={table}
					/>
				))}
			</div>
		</div> : <Loader/>
	);
};

export const ListWorkouts = styled(ListWorkoutsContainer)`
	margin: auto;
	font-size: 18px;
	margin-bottom: 10px;
	padding: 15px;
	max-width: 600px;
	border-radius: 10px;
	background-color: #ffffff;

	.client-info {
		margin-top: 100px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap-reverse;
	}
	img {
		max-width: 150px;
		width: 100%;
		border-radius: 5px;
	}
	h2 {
		margin: 20px auto;
		font-size: 20px;
		font-weight: 500;
	}
	.training-container {
		margin-top: 30px;
	}
	@media (max-width: 600px) {
		h2 {
			margin: 10px auto;
			font-size: 16px;
		}
	}
`;
