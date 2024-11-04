import { Route, Routes } from 'react-router-dom';
import { CustomerCard } from '../pages/customer-card/customer-card';
import {
	Authorization,
	Main,
	Addition,
	ExerciseList,
	ClientInfo,
	ListWorkouts,
} from '../pages';
import { UserType } from '../redux/users-slice';

export const Routing = ({ isAuthenticated }: { isAuthenticated: UserType }) => {
	return (
		<Routes>
			<Route
				path="/"
				element={!isAuthenticated.error ? <Main /> : <Authorization />}
			>
				<Route index element={<CustomerCard />} />
				<Route path="addClient" element={<Addition />} />
				<Route path="cardEditing/:id" element={<Addition />} />
				<Route path="/exerciseList" element={<ExerciseList />} />
			</Route>

			<Route path="/client/:id" element={<ClientInfo />}>
				<Route index path="/client/:id/exercise" element={<ListWorkouts />} />
			</Route>
		</Routes>
	);
};
