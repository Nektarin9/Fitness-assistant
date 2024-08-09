import { useDispatch } from 'react-redux';
import { Button, Input } from '../../../../components';
import { Categories, Exercises } from './components';
import { useState } from 'react';
import { addExercisesData } from '../../../../actions';
import styled from 'styled-components';
import { message } from '../../../../reducers/app-slice';
import { useClearMessage } from '../../../../hooks';


const ExerciseListContainer = ({ className }: { className?: string }) => {
	const [input, setInput] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Спина');
	const [showComponent, setShowComponent] = useState(false); // Состояние для управления отображением компонента
	const clearMessage = useClearMessage
	const dispatch = useDispatch();


	const addExercise = () => {
		dispatch(addExercisesData({ exerciseName: input, category: selectedCategory }));
		setShowComponent(!showComponent);
		dispatch(message('Упражнение добавлено'));
		clearMessage(dispatch);
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
	position: relative;
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
