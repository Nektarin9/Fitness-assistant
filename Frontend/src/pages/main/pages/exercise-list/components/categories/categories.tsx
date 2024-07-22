import styled from 'styled-components';

interface CategoriesProps {
	className?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategoriesContainer: React.FC<CategoriesProps> = ({ className, ...props }) => {
	return (
		<select className={className} name="select" {...props}>
			<option value={'Спина'}>Спина</option>
			<option value={'Грудь'}>Грудь</option>
			<option value={'Руки'}>Руки</option>
			<option value={'Ноги'}>Ноги</option>
		</select>
	);
};

export const Categories = styled(CategoriesContainer)`
	width: 200px;
	height: 30px;
	border-radius: 5px;
	padding-left: 5px;
	border: 1px solid black;
	font-size: 18px;
	transform: 0.3s;
	transition: 0.3s;
`;
