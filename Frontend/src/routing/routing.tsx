import { Route, Routes } from 'react-router-dom';
import { Clients } from '../pages/main/components';
import { Authorization, Main } from '../pages';
import { BackButton } from '../components';
import { Addition, ExerciseList } from '../pages/main/pages';

export const Routing = () => {
	return (
		<Routes>
			<Route path="/authorization" element={<Authorization />} />

			<Route path="/" element={<Main />}>
				<Route index element={<Clients />} />
				<Route path="addClient" element={<Addition />} />
				<Route path="cardEditing/:id" element={<Addition />} />
				<Route path="exerciseList" element={<ExerciseList />} />
			</Route>

			<Route
				path="/client/:id"
				element={
					<div>
						<BackButton />
					</div>
				}
			/>
		</Routes>
	);
};
