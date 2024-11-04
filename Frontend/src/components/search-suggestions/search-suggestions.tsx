import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercisesData } from '../../redux/api/actions';
import { selectExercisesData } from '../../redux/selectors';
import { exerciseInput } from '../../redux/client-slice';
import { debounce } from '../../utils';
import { clearExercisesData } from '../../redux/training-data-slice';
import styled from 'styled-components';

interface SearchSuggestionProps {
	className?: string;
	setSearchBlock: React.Dispatch<React.SetStateAction<boolean>>;
	exerciseId?: { id?: string | number; trainingId?: string | number };
	exercise?: string;
}

const SearchSuggestionsContainer = ({
	className,
	exerciseId,
	setSearchBlock,
	exercise,
}: SearchSuggestionProps) => {
	const dispatch = useDispatch();
	const exercisesData = useSelector(selectExercisesData);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedOnChange = useCallback(
		debounce((exercise) => {
			dispatch(fetchExercisesData({ searchName: exercise }));
		}, 500),
		[],
	);
	useEffect(() => {
		debouncedOnChange(exercise);
	}, [debouncedOnChange, dispatch, exercise]);
	return (
		<>
			{exercisesData.exercises?.length ? (
				<div className={className}>
					{exercisesData.exercises?.map(({ id, exerciseName }) => (
						<p
							onClick={() => {
								dispatch(
									exerciseInput({
										value: exerciseName,
										trainingId: exerciseId?.trainingId,
										id: exerciseId?.id,
									}),
								);
								setSearchBlock(false);
								dispatch(clearExercisesData());
							}}
							className="exercises-p"
							key={id}
						>
							{exerciseName}
						</p>
					))}
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export const SearchSuggestions = styled(SearchSuggestionsContainer)`
	position: absolute;
	z-index: 10;
	background-color: #ffffff;
	top: 34px;
	left: 50px;
	width: 140px;
	padding: 3px;
	border-radius: 5px;
	border: 1px solid #9e9e9ed5;
	.exercises-p {
		cursor: pointer;
		font-size: 18px;
		border-radius: 5px;
		margin: 5px 0 5px 0;
	}
	.exercises-p:hover {
		background-color: #cdcdcd;
	}
`;
