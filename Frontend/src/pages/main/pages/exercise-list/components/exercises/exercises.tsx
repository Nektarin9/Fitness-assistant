import { Button, Pagination } from '../../../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercisesData } from '../../../../../../selectors';
import { useEffect, useState } from 'react';
import { deleteExercisesData, fetchExercisesData } from '../../../../../../actions';
import { message } from '../../../../../../reducers/app-slice';
import { useClearMessage } from '../../../../../../hooks';
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
							width="40px"
							height="40px"
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
	position: relative;
	margin-top: 20px;
	padding: 5px 5px 50px 5px;
	width: 460px;
	min-height: 600px;
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
		font-size: 25px;
		top: -1px;
		left: 1px;
	}
	.pagination {
		position: absolute;
		bottom: 0;
		left: 55px;
	}
`;
