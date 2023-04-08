/* @format */
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface AuthRouteProps {}

const AuthRoute: React.FunctionComponent<AuthRouteProps> = (props) => {
	// const { children } = props;
	const auth = getAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		AuthCheck();
	}, [auth]);

	const AuthCheck = onAuthStateChanged(auth, (user) => {
		if (user) {
			setLoading(false);
		} else {
			console.log('unauthorized');
			navigate('/login');
		}
	});
	if (loading) {
		return <p>loading....</p>;
	}
	return <div>navigate('/')</div>;
};

export default AuthRoute;
