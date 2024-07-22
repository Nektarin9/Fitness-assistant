import { Button } from '../../../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercisesData } from '../../../../../../selectors';
import { useEffect } from 'react';
import { actionDeleteExercises, actionGetExercisesData } from '../../../../../../actions';
import styled from 'styled-components';

const ExercisesContainer = ({
	className,
	showComponent,
}: {
	className?: string;
	showComponent?: boolean;
}) => {
	const dispatch = useDispatch();
	const exercises = useSelector(selectExercisesData);
	useEffect(() => {
		dispatch(actionGetExercisesData());
	}, [dispatch, showComponent]);
	return (
		<>
			{exercises.map(({ id, exerciseName, category }) => (
				<div className={className} key={id}>
					<span>{exerciseName}</span>
					<span>{category}</span>
					<Button
						width="40px"
						height="40px"
						backgroundColor="#820000"
						backgroundColorHover="red"
						onClick={() => dispatch(actionDeleteExercises(id))}
					>
						<p className="minus">
							<i className="fa fa-times" aria-hidden="true"></i>
						</p>
					</Button>
				</div>
			))}
		</>
	);
};

export const Exercises = styled(ExercisesContainer)`
	display: flex;
	justify-content: left;
	align-items: center;
	background-color: #ffffff;
	font-size: 18px;
	border-radius: 5px;
	margin: 10px 0 10px 0;
	padding: 5px;
	border: 1px solid #aeaeaecd;

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
`;
