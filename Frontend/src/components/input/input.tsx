import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { SearchSuggestions } from '../search-suggestions/search-suggestions';
import { useDispatch } from 'react-redux';
import { clearExercisesData } from '../../reducers/training-data-slice';
import { useParams } from 'react-router-dom';

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
	exerciseId?: { id?: string | number; trainingId?: string | number };
	action?: 'SEARCH';
	// Добавьте любые другие пропсы, которые вы ожидаете
}

const InputContainer: React.FC<InputContainerProps> = ({
	className,
	action = '',
	exerciseId,
	...props
}) => {
	const params = useParams();
	const [searchBlock, setSearchBlock] = useState(false);
	const inputRef = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
				setSearchBlock(false);
			}
		};
		if (inputRef.current && params.id) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			if (inputRef.current && params.id) {
				document.removeEventListener('mousedown', handleClickOutside);
			}
		};
	}, [dispatch, params.id]);

	return (
		<div className={className} ref={inputRef}>
			<input
				className="input-exercise"
				onFocus={() => {
					dispatch(clearExercisesData());

					setSearchBlock(true);
				}}
				{...props}
			/>
			{searchBlock && action && props.value && (
				<SearchSuggestions
					exerciseId={exerciseId}
					exercise={props.value}
					setSearchBlock={setSearchBlock}
				/>
			)}
		</div>
	);
};
export const Input = styled(InputContainer)`
	position: relative;
	.input-exercise {
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
	}

	&:focus {
		background-color: #e9e9e9d4;
		transform: 0.3s;
		transition: 0.3s;
	}
`;
