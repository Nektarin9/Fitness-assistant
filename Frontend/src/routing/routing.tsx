import {  Route, Routes } from 'react-router-dom';
import { CustomerCard } from '../pages/customer-card/customer-card';
import {
	Authorization,
	Main,
	Addition,
	ExerciseList,
	ClientInfo,
	ListWorkouts,
} from '../pages';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from '../selectors/select-authenticated';

export const Routing = () => {
	const isAuthenticated = useSelector(selectAuthenticated);
	!isAuthenticated.error && sessionStorage.setItem('AUTHORIZATION', JSON.stringify(isAuthenticated));
	
	return (
		<Routes>

			<Route
				path="/"
				element={sessionStorage.getItem('AUTHORIZATION') ? <Main /> : <Authorization />}
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
