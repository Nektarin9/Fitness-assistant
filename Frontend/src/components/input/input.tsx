import { useState } from 'react';
import styled from 'styled-components';

interface InputContainerProps {
	className?: string;
	width?: string;
	height?: string;
	border?: string;
	background?: string;
	type?: string;
	value?: string;
	maxLength?: number;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	disabled?: boolean;
	searchBlock?: boolean;
	action?: 'SEARCH';
	// Добавьте любые другие пропсы, которые вы ожидаете
}

const InputContainer: React.FC<InputContainerProps> = ({
	className,
	action = '',
	...props
}) => {
	const [searchBlock, setSearchBlock] = useState(false);

	return (
		<>
			<input
				className={className}
				onBlur={() => setSearchBlock(false)}
				onFocus={() => setSearchBlock(true)}
				{...props}
			/>
			{searchBlock && action && <div>hhhhh</div>}
		</>
	);
};
export const Input = styled(InputContainer)`
	width: ${({ width = '200px' }) => width};
	height: ${({ height = '30px' }) => height};
	border: ${({ border = '1px solid black;' }) => border};
	background: ${({ background = 'white' }) => background};
	color: black;
	border-radius: 5px;
	padding: 10px;
	font-size: 18px;
	transform: 0.3s;
	transition: 0.3s;
	&:focus {
		background-color: #f3f3f3d6;
		transform: 0.3s;
		transition: 0.3s;
	}
`;
