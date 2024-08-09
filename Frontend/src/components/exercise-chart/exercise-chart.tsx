import { Input } from '../input/input';
import { useState } from 'react';
import styled from 'styled-components';
import { TrainingProgram } from '../../interface';
import { Button } from '../button/button';
import { ControlPanel } from './components';


const ExerciseChartConteiner = ({
	className,
	table,
}: {
	className?: string;
	table?: TrainingProgram[];
}) => {
	const [edit, setEdit] = useState(true);

	return (
		<div className={className}>
			<ControlPanel setEdit={setEdit} />

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
									value={exercise}
									disabled={edit}
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
			<div className="add-btn">{!edit && <Button>Добавить</Button>}</div>
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
		margin: 10px;
		display: flex;
		justify-content: center;
		gap: 20px;
	}
`;
