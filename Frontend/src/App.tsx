import { Header, Message } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { Routing } from './routing/routing';
import { useEffect } from 'react';
import { saveUser } from './redux/users-slice';
import { selectMessage, selectAuthenticated } from './redux/selectors';
import styled from 'styled-components';

const AppConteiner = ({ className }: { className?: string }) => {
	const message = useSelector(selectMessage);
	const isAuthenticated = useSelector(selectAuthenticated);
	// Проверяем авторизацию
	const dispatch = useDispatch();
	!isAuthenticated.error &&
		sessionStorage.setItem('AUTHORIZATION', JSON.stringify(isAuthenticated));
	useEffect(() => {
		!isAuthenticated.error &&
			sessionStorage.setItem('AUTHORIZATION', JSON.stringify(isAuthenticated));
		const authorizationData = sessionStorage.getItem('AUTHORIZATION');
		if (authorizationData) {
			dispatch(saveUser(JSON.parse(authorizationData)));
		}
	}, []);
	return (
		<div className={className}>
			{!isAuthenticated.error && <Header />}

			{message && <Message>{message}</Message>}
			<Routing isAuthenticated={isAuthenticated} />
		</div>
	);
};

export const App = styled(AppConteiner)`
	display: block;
	margin: 0;

	@media (max-width: 600px) {
		max-width: 580px;
		& .test {
			font-size: 12px;
		}
	}
`;
