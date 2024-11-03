import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { selectAuthenticated } from '../../selectors/select-authenticated';
import { Button } from '../button/button';
import { logoutUser } from '../../actions';

const HeaderContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectAuthenticated);
	const logout = () => {
		dispatch(logoutUser());
		sessionStorage.removeItem('AUTHORIZATION');
		location.reload();
	};
	return (
		<header className={className}>
			<div className="container">
				<span className="login">{user.user?.login}</span>
				<Button
					onClick={logout}
					backgroundColor="#791d1d"
					backgroundColorHover="#3f0808"
					width="80px"
				>
					Выйти
				</Button>
			</div>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	position: fixed;
	z-index: 10;
	justify-content: end;
	align-items: center;
	width: 100%;
	height: 60px;
	background-color: #d8d8d8;
	.container {
		position: relative;
		display: flex;
		align-items: center;
		margin-right: 20px;
	}
	.login {
		margin-right: 10px;
		font-size: 18px;
	}
`;
