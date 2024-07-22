import styled from 'styled-components';

interface ButtonContainerProps {
	className?: string;
	width?: string;
	height?: string;
	backgroundColor?: string;
	backgroundColorHover?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children?: string |  React.ReactNode
}

const ButtonContainer = ({ className, children, onClick }: ButtonContainerProps) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '150px' }) => width};
	height: ${({ height = '35px' }) => height};
	background-color: ${({ backgroundColor = '#00a462' }) => backgroundColor};
	border-radius: 5px;
	font-size: 18px;
	font-weight: 500;
	color: #ffffff;
	transform: 0.3s;
	transition: 0.3s;
	cursor: pointer;
	&:hover {
		background-color: ${({ backgroundColorHover = '#00e070' }) =>
			backgroundColorHover};
		transform: 0.3s;
		transition: 0.3s;
	}
`;
