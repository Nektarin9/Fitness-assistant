import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackButtonContainer = ({ className }: { className?: string }) => {
	const navigate = useNavigate();
	return (
		<button onClick={() => navigate(-1)} className={className}>
			<i className="fa fa-angle-left" aria-hidden="true"></i>
		</button>
	);
};

export const BackButton = styled(BackButtonContainer)`
	font-size: 45px;
	color: rgba(21, 21, 21, 0.582);
	background: none;
	cursor: pointer;
	transition: 0.15s;
	transform: 0.15s;
	:hover {
		color: rgb(0, 0, 0);
		transform: 0.15s;
		transition: 0.15s;
	}
`;
