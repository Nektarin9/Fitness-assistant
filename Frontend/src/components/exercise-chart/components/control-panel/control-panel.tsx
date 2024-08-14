import { Button } from '../../../button/button';
import styled from 'styled-components';


interface ControlPanelContainerProps {
    className?: string;
    setEdit?: (edit: boolean) => void;
}
const ControlPanelContainer: React.FC<ControlPanelContainerProps> = ({ className, setEdit }) => {
    return (
        <div className={className}>
            <div className="editing-table">
                <i
                    onClick={() => setEdit && setEdit(false)}
                    className="fa fa-pencil"
                    aria-hidden="true"
                ></i>
                <i
                    onClick={() => setEdit && setEdit(true)}
                    className="fa fa-check"
                    aria-hidden="true"
                ></i>
            </div>
            <Button
                backgroundColor="#820000"
                width="30px"
                height="30px"
                backgroundColorHover="red"
            >
                ✖
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
`;
