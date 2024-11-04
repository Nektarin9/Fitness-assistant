import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../button/button';
import { addTrainingTable, deleteTrainingTable } from '../../../../redux/api/actions';
import { selectClient } from '../../../../redux/selectors';
import styled from 'styled-components';

interface ControlPanelContainerProps {
	className?: string;
	setEdit?: (edit: boolean) => void;
	id?: number | string;
	trainingId?: number | string;
}

const ControlPanelContainer: React.FC<ControlPanelContainerProps> = ({
	className,
	setEdit,
	id,
	trainingId,
}) => {
	const dispatch = useDispatch();
	const deleteTrening = (id?: number | string, trainingId?: number | string) => {
		dispatch(deleteTrainingTable({ id, trainingId }));
	};
	const clietn = useSelector(selectClient);
	const trainingProgram = clietn.trainingProgram?.find(
		(elem) => elem.id === trainingId,
	);

	return (
		<div className={className}>
			<div className="editing-table">
				<i
					onClick={() => setEdit && setEdit(false)}
					className="fa fa-pencil"
					aria-hidden="true"
				></i>
				<i
					onClick={async () => {
						await dispatch(
							addTrainingTable({ id, training: trainingProgram }),
						);
						setEdit && setEdit(true);
					}}
					className="fa fa-check"
					aria-hidden="true"
				></i>
			</div>

			<Button
				backgroundColor="#820000"
				width="30px"
				height="30px"
				backgroundColorHover="red"
				onClick={() => deleteTrening(id, trainingId)}
			>
				<p className="minus">
					<i className="fa fa-times" aria-hidden="true"></i>
				</p>
			</Button>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	justify-content: space-between;

	.editing-table {
		margin: 0 0 10px 10px;
		font-size: 24px;
	}
	i {
		cursor: pointer;
		margin: 0 5px 0 5px;
	}
	.delete {
		color: white;
	}
	.minus {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
