import { useDispatch } from 'react-redux';
import { Button, Input } from '../../../../components';
import { Categories, Exercises } from './components';
import { useState } from 'react';
import { actionAddExercise } from '../../../../actions';
import styled from 'styled-components';

const ExerciseListContainer = ({ className }: { className?: string }) => {
	const [input, setInput] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Спина');
	const [showComponent, setShowComponent] = useState(false); // Состояние для управления отображением компонента

	const dispatch = useDispatch();
	const addExercise = () => {
		dispatch(actionAddExercise({ exerciseName: input, category: selectedCategory }));
		setShowComponent(!showComponent);
	};
	return (
		<div className={className}>
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
			<Button onClick={addExercise} width="200px" height="40px">
				Добавить упражнение
			</Button>
			<Exercises showComponent={showComponent} />
		</div>
	);
};

export const ExerciseList = styled(ExerciseListContainer)`
	.conteiner {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 15px;
		margin-bottom: 20px;
	}

	.text-add {
		font-size: 18px;
		margin-bottom: 10px;
	}
`;
