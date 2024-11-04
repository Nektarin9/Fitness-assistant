import { Button, Pagination } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteExercisesData, fetchExercisesData } from '../../../redux/api/actions';
import { message } from '../../../redux/app-slice';
import { useClearMessage } from '../../../hooks';
import { selectExercisesData } from '../../../redux/selectors';
import styled from 'styled-components';

const ExercisesContainer = ({
	className,
	showComponent,
}: {
	className?: string;
	showComponent?: boolean;
}) => {
	const dispatch = useDispatch();
	const clearMessage = useClearMessage;
	const data = useSelector(selectExercisesData);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		dispatch(fetchExercisesData({ searchName: '', page }));
	}, [dispatch, showComponent, page, isLoading]);

	const deleteExercises = async (id: string | number | undefined) => {
		await dispatch(deleteExercisesData(id));
		dispatch(message('Упражнение удалено'));
		clearMessage(dispatch);
		setIsLoading(!isLoading);
		if (data.exercises?.length && data.exercises?.length - 1 === 0) {
			if (page !== 1) {
				setPage(page - 1);
			}
		}
	};

	return (
		<div className={className}>
			{data.exercises &&
				data.exercises.map(({ id, exerciseName, category }) => (
					<div className="exercises" key={id}>
						<span>{exerciseName}</span>
						<span>{category}</span>
						<Button
							width="25px"
							height="25px"
							backgroundColor="#820000"
							backgroundColorHover="red"
							onClick={() => {
								deleteExercises(id);
							}}
						>
							<p className="minus">
								<i className="fa fa-times" aria-hidden="true"></i>
							</p>
						</Button>
					</div>
				))}
			<div className="pagination">
				<Pagination page={page} setPage={setPage} lastPage={data.total} />
			</div>
		</div>
	);
};

export const Exercises = styled(ExercisesContainer)`
	margin-top: 20px;
	padding: 5px 5px 20px 5px;
	width: 460px;
	border: 1px solid #bfbebe8e;
	border-radius: 10px;
	.exercises {
		display: flex;
		justify-content: left;
		align-items: center;
		background-color: #ffffff;
		font-size: 18px;
		border-radius: 5px;
		margin: 10px 0 10px 0;
		padding: 5px;
	}

	span {
		word-wrap: break-word; /* Перенос слов */
		width: 200px;
	}
	.minus {
		position: relative;
		font-size: 14px;
		top: -1px;
		left: 0px;
	}
	.pagination {
		display: flex;
		align-items: end;
		justify-content: center;
	}
	@media (max-width: 600px) {
		width: 100%;
		min-height: 300px;
		margin-top: 10px;
		padding: 3px 3px 10px 3px;
		.exercises {
			font-size: 14px;
			margin: 5px 0 5px 0;
			padding: 2px;
		}
		span {
			width: 100%;
		}
		.minus {
			display: flex;
			justify-content: center;
			font-size: 14px;
			top: -1px;
			left: 0px;
		}
	}
`;
