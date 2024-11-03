import { Message } from './components';
import { selectMessage } from './selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Routing } from './routing/routing';
import styled from 'styled-components';
import { selectAuthenticated } from './selectors/select-authenticated';
import { useEffect } from 'react';
import { saveUser } from './reducers/users-slice';

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
			{message && <Message>{message}</Message>}
			<Routing isAuthenticated={isAuthenticated}/>
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
