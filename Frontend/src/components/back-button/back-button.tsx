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
	position: fixed;
	left: 115px;
	top: 67px;
	font-size: 45px;
	z-index: 9999;
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
	@media (max-width: 600px) {
		left: 65px;
        top: 45px
	}
`;
