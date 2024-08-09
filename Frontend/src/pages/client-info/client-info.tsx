import { BackButton } from '../../components';
import { Link, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

const ClientInfoContainer = ({ className }: { className?: string }) => {
	const params = useParams();
	return (
		<>
			<div className={className}>
				<div className="backButton">
					<BackButton />
				</div>
				<Link to={`/client/:${params.id}/add`} className="add-table">
					<i className="fa fa-plus-square fa-4x" aria-hidden="true"></i>
				</Link>
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
