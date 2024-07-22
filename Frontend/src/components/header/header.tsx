import styled from 'styled-components';

const HeaderContainer = ({ className }: { className?: string }) => {
	return (
		<header className={className}>
			<div className="container">
				<input type="text" placeholder="Начните поиск" maxLength={35}></input>
				<div className="searchIcon">
					<i className="fa fa-neuter" aria-hidden="true"></i>
				</div>
			</div>

		</header>
	);
};

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	background-color: #d8d8d8;
	input {
		width: 500px;
		padding: 5px 10px 5px 10px;
		font-size: 18px;
		border-radius: 5px;
		border: none;
	}
	.container {
		position: relative;
	}
	.searchIcon {
		position: absolute;
		top: 0;
		right: 20px;
		font-size: 24px;
		color: rgb(110, 110, 110);
		transform: rotate(-45deg);
		background: none;
		border: none;
		transition: 0.15s;
	}

`;
