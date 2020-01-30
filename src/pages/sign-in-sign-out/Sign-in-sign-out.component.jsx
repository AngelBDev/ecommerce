import React from 'react';
import './sign-in-sign-out.styles.scss';
import SignIn from './../../components/sign-in/Sign-in.component';
import LogIn from './../../components/log-in/Log-in.component';

const SignInSignOut = () => {
	return (
		<div className='Sign-in-sign-out'>
			<SignIn />
			<LogIn></LogIn>
		</div>
	);
};

export default SignInSignOut;
