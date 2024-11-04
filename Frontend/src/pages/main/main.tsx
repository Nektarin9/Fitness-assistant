import { useEffect } from 'react';
import { BackButton, Header } from '../../components';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearClient } from '../../redux/client-slice';
import styled from 'styled-components';

const MainContainer = ({
	className,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(clearClient());
	}, [dispatch]);

	return (
		<>
			<div className={className}>
				<div className="leftPanel">
					<NavLink to={'/'} className="addClitnt">
						<i className="fa fa-address-book-o fa-2x" aria-hidden="true"></i>
					</NavLink>
					<NavLink to={'/addClient'} className="addClitnt">
						<i className="fa fa-address-card fa-2x" aria-hidden="true"></i>
					</NavLink>
					<NavLink to={'/exerciseList'} className="addClitnt">
						<i className="fa fa-database fa-2x" aria-hidden="true"></i>
					</NavLink>
				</div>
				<div className="backButton">
					<BackButton />
				</div>
				<div className="rightConteiner">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export const Main = styled(MainContainer)`
	position: relative;
	text-align: center;
	display: flex;
	justify-content: center;
	.leftPanel {
		position: fixed;
		z-index: 15;
		padding-top: 50px;
		top: 0;
		left: 0;
		bottom: 0;
		width: 80px;
		background-color: rgb(26, 28, 34);
	}
	.rightConteiner {
		max-width: 1200px;
		display: flex;
		justify-content: center;
		margin: 50px 0 0 80px;
	}
	.addClitnt {
		font-size: 18px;
		color: #ffffff;
		margin: 40px auto;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
	.addClitnt.active {
		color: #83ee08;
	}
	.backButton {
		position: absolute;
		left: 115px;
		top: 60px;
	}
	@media (max-width: 600px) {
		.leftPanel {
			width: 45px;
		}
		.fa-2x {
			font-size: 25px;
		}
		.backButton {
			position: fixed;
			left: 45px;
			top: 50px;
		}
		.rightConteiner {
			max-width: 600px;
			display: flex;
			justify-content: center;
			margin: 20px 0 0 45px;
		}
	}
`;
