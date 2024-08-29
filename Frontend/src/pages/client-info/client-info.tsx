import { BackButton } from '../../components';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const ClientInfoContainer = ({ className }: { className?: string }) => {
	return (
		<>
			<div className={className}>
				<div className="backButton">
					<BackButton />
				</div>

				<Outlet />
			</div>
		</>
	);
};

export const ClientInfo = styled(ClientInfoContainer)`
	margin: 150px auto;
	.backButton {
		position: absolute;
		left: 115px;
		top: 67px;
	}

	.add-table {
		position: fixed;
		cursor: pointer;
		right: 50px;
		bottom: 100px;
	}
`;
