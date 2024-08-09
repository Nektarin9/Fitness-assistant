import styled from 'styled-components';
import { Input } from '../input/input';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercisesData } from '../../selectors';
import { ExercisesData } from '../../interface';
import { fetchExercisesData } from '../../actions';

const SearchWorkoutsContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchExercisesData());
	}, [dispatch]);

	const exercisesData = useSelector(selectExercisesData);

	const [search, setSearch] = useState('');
	const [resualt, setResualt] = useState<Array<ExercisesData>>([]);
	// let result: Array<ExercisesData> = []

	const getResult = (word: string, exercises: Array<ExercisesData>) => {
		const regex = new RegExp(word, 'gi');
		const res = exercises.filter(({ exerciseName }) => {
			return exerciseName?.match(regex);
		});
		setResualt(res);
	};

	useEffect(() => {
		getResult(search, exercisesData);
	}, [search, exercisesData]);

	return (
		<div className={className}>
			<Input
				onChange={({ target }) => setSearch(target.value)}
				width="350px"
				type="text"
				placeholder="Введите название тренеровки"
			/>
			{resualt.map(({ exerciseName, id }) => (
				<div key={id}>
					<div className="list">{exerciseName}</div>
				</div>
			))}
		</div>
	);
};

export const SearchWorkouts = styled(SearchWorkoutsContainer)`
	& .list {
		font-size: 18px;
		margin-bottom: 10px;
	}
`;
