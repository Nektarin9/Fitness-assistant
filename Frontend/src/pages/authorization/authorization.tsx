import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authUser, registrationUser } from '../../redux/api/actions';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import styled from 'styled-components';

const AuthorizationContainer = ({ className }: { className?: string }) => {
	const dispatch = useDispatch();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	return (
		<div className={className}>
			<div className="container">
				<h1>Авторизация</h1>
				<div>
					<input
						value={login}
						placeholder="Логин"
						onChange={({ target }) => setLogin(target.value)}
						type="text"
					/>
					<input
						value={password}
						placeholder="Пароль"
						onChange={({ target }) => setPassword(target.value)}
						type="text"
					/>
					<div className='button-container'>
						<Button
							backgroundColor="green"
							onClick={() => {
								dispatch(authUser({ login, password }));
								navigate('/');
							}}
						>
							Войти
						</Button>
					</div>

					{/*<button
						onClick={() => {
							dispatch(registrationUser({ login, password }));
						}}
					>
						Регистрация
					</button>*/}
				</div>
			</div>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;

	h1 {
		color: #ffffff;
		font-size: 24px;
	}
	& .container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 10px 20px 10px 20px;
		width: 280px;
		height: 300px;
		border-radius: 1em;
		background-color: #3e3e3e;
	}
	input {
		margin-bottom: 20px;
		width: 100%;
		height: 40px;
		border-radius: 5px;
		transform: 0.3s;
		transition: 0.3s;
	}
	.button-container {
		text-align:center;
	}
	input:focus {
		background-color: #e0e0e0;
		transform: 0.3s;
		transition: 0.3s;
	}
`;
