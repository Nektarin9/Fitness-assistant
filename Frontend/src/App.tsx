import { Message } from './components';
import { selectMessage } from './selectors';
import { useSelector } from 'react-redux';
import { Routing } from './routing/routing';
import styled from 'styled-components';

const AppConteiner = ({ className }: { className?: string }) => {
	const message = useSelector(selectMessage);

	return (
		<div className={className}>
			{message && <Message>{message}</Message>}
			<Routing />
		</div>
	);
};

export const App = styled(AppConteiner)`
	display: block;
	margin: 0 auto;

	@media (max-width: 600px) {
		max-width: 580px;
		& .test {
			font-size: 12px;
		}
	}
`;
