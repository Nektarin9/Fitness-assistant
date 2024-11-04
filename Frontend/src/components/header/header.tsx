import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from '../../redux/selectors';
import { Button } from '../button/button';
import { logoutUser } from '../../redux/api/actions';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectAuthenticated);
	const navigate = useNavigate();
	const logout = () => {
		dispatch(logoutUser());
		sessionStorage.removeItem('AUTHORIZATION');
		navigate('/');
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
	z-index: 20;
	justify-content: end;
	align-items: center;
	width: 100%;
	height: 60px;
	background-color: rgb(26, 28, 34);
	border-bottom: 1px solid rgba(222, 222, 222, 0.627);
	.container {
		position: relative;
		display: flex;
		align-items: center;
		right: 20px;
	}
	.login {
		margin-right: 10px;
		font-size: 18px;
		color: white;
	}
	@media (max-width: 600px) {
		height: 45px;
	}
`;
