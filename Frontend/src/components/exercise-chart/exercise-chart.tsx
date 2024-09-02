import { Input } from '../input/input';
import { useState } from 'react';
import { TrainingProgram } from '../../interface';
import { Button } from '../button/button';
import { ControlPanel } from './components';
import { useDispatch } from 'react-redux';
import {
	addExerciseTable,
	descriptionInput,
	exerciseInput,
} from '../../reducers/client-slice';
import styled from 'styled-components';

const ExerciseChartConteiner = ({
	className,
	table,
	id,
	trainingId,
}: {
	className?: string;
	table?: TrainingProgram[];
	id?: number | string;
	trainingId?: number | string;
}) => {
	const [edit, setEdit] = useState(true);
	const dispatch = useDispatch();
	return (
		<div className={className}>
			<ControlPanel id={id} trainingId={trainingId} setEdit={setEdit} />

			<table className="table">
				<thead>
					<tr>
						<th>№</th>
						<th>Упражнение</th>
						<th>Подходы/вес</th>
					</tr>
				</thead>
				<tbody>
					{table?.map(({ id, exercise, description }, index) => (
						<tr key={id}>
							<td>{index + 1}</td>
							<td>
								<Input
									action={'SEARCH'}
									value={exercise}
									exerciseId={{ id, trainingId }}
									disabled={edit}
									onChange={({ target }) =>
										dispatch(
											exerciseInput({
												value: target.value,
												trainingId,
												id,
											}),
										)
									}
									background="transparent"
									border={edit ? 'none' : '1px solid #000000'}
									width="150px"
									type="text"
								/>
							</td>
							<td>
								<Input
									value={description}
									disabled={edit}
									onChange={({ target }) =>
										dispatch(
											descriptionInput({
												value: target.value,
												trainingId,
												id,
											}),
										)
									}
									background="transparent"
									border={edit ? 'none' : '1px solid #000000'}
									width="150px"
									type="text"
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="add-btn">
				{!edit && (
					<Button onClick={() => dispatch(addExerciseTable(trainingId))}>
						Добавить
					</Button>
				)}
			</div>
		</div>
	);
};

export const ExerciseChart = styled(ExerciseChartConteiner)`
	.table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: center;
	}
	th {
		background-color: #f2f2f2;
	}

	tr:nth-child(even) {
		background-color: #f9f9f9;
	}
	.add-btn {
		margin: auto;
		margin: 10px;
		display: flex;
		justify-content: center;
		gap: 20px;
	}
`;
