import styled from 'styled-components';

interface InputContainerProps {
	className?: string;
	width?: string;
	height?: string;
	type?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	// Добавьте любые другие пропсы, которые вы ожидаете
}

const InputContainer: React.FC<InputContainerProps> = ({ className, ...props }) => {
	return <input className={className} {...props} />;
};
export const Input = styled(InputContainer)`
	width: ${({ width = '200px' }) => width};
	height: ${({ height = '30px' }) => height};
	border-radius: 5px;
	padding: 10px;
	border: 1px solid black;
	font-size: 18px;
	transform: 0.3s;
	transition: 0.3s;
	&:focus {
		background-color: #f3f3f3d6;
		transform: 0.3s;
		transition: 0.3s;
	}
`;
