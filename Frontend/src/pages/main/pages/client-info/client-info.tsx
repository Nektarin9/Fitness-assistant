import styled from 'styled-components';
import { SearchWorkouts } from '../../../../components';

const ClientInfoContainer = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<SearchWorkouts />
		</div>
	);
};

export const ClientInfo = styled(ClientInfoContainer)`
	font-size: 18px;
	margin-bottom: 10px;
`;
