import styled from 'styled-components';
const AuthorizationContainer = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<div className="container">
				<h1>Авторизация</h1>
				<div>
					<input type="text" />
					<input type="text" />
					<button>Войти</button>
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
	input:focus {
		background-color: #e0e0e0;
		transform: 0.3s;
		transition: 0.3s;
	}

	button {
		cursor: pointer;
		width: 100%;
		height: 40px;
		font-size: 18px;
		border-radius: 5px;
		background-color: #ffffff;
		transform: 0.3s;
		transition: 0.3s;
	}
	button:hover {
		background-color: #e0e0e0;
		transform: 0.3s;
		transition: 0.3s;
	}
`;
