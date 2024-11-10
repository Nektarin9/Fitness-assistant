import { BackButton } from '../../../components';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const ClientInfoContainer = ({ className }: { className?: string }) => {
	return (
		<>
			<div className={className}>
				<BackButton />
				<Outlet />
			</div>
		</>
	);
};

export const ClientInfo = styled(ClientInfoContainer)`
	.add-table {
		position: fixed;
		cursor: pointer;
		right: 50px;
		bottom: 100px;
	}
	@media (max-width: 600px) {
		margin-bottom: 100px;
		.backButton {
			position: fixed;
			left: 45px;
			top: 50px;
		}
	}
`;
