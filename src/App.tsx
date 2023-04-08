/* @format */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Mentors from './pages/mentors';

export interface IApp1icationProps {}
export const App: React.FunctionComponent<IApp1icationProps> = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/mentors' element={<Mentors />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
