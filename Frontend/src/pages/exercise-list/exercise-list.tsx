import { useDispatch } from 'react-redux';
import { Button, Input } from '../../components';
import { Categories, Exercises } from './index';
import { useCallback, useState } from 'react';
import { addExercisesData, fetchExercisesData } from '../../redux/api/actions';
import { inputSearch, message } from '../../redux/app-slice';
import { useClearMessage } from '../../hooks';
import { debounce } from '../../utils';
import styled from 'styled-components';

const ExerciseListContainer = ({ className }: { className?: string }) => {
	const [input, setInput] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Спина');
	const [showComponent, setShowComponent] = useState(false); // Состояние для управления отображением компонента

	const clearMessage = useClearMessage;
	const dispatch = useDispatch();
	const debouncedOnChange = useCallback(
		debounce((search) => {
			dispatch(fetchExercisesData({ searchName: search }));
		}, 500),
		[],
	);

	const addExercise = async () => {
		await dispatch(
			addExercisesData({ exerciseName: input, category: selectedCategory }),
		);
		setShowComponent(!showComponent);
		dispatch(message('Упражнение добавлено'));
		clearMessage(dispatch);
	};
	return (
		<div className={className}>
				<Input
					onChange={({ target }) => {
						dispatch(inputSearch(target.value));
						debouncedOnChange(target.value);
					}}
					type="text"
					width="220px"
					placeholder="Начните поиск"
					maxLength={35}
				/>
			<div className="conteiner">
				<div>
					<p className="text-add">Выберите категорию</p>
					<Categories
						onChange={({ target }) => {
							setSelectedCategory(target.value);
						}}
					/>
				</div>
				<div>
					<p className="text-add">Введите упражнение</p>
					<Input
						value={input}
						onChange={({ target }) => setInput(target.value)}
						type="text"
					/>
				</div>
			</div>
			<Button onClick={addExercise} width="240px" height="40px">
				Добавить упражнение
			</Button>
			<Exercises showComponent={showComponent} />
		</div>
	);
};

export const ExerciseList = styled(ExerciseListContainer)`
	position: relative;
	margin-top: 60px;
	.conteiner {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 15px;
		margin: 20px 0;
	}

	.text-add {
		font-size: 18px;
		margin-bottom: 10px;
	}

	@media (max-width: 600px) {
		.conteiner {
			max-width: 400px;
			gap: 10px;
			margin: 10px auto;
		}
		.searchIcon {
			top: 0;
		}
	}
`;
