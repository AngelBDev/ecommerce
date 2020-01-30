import React from 'react';
import './log-in.styles.scss';
import FormInput from './../form-input/Form-input.component';
import CustomButton from './../custom-button/Custom-button.component';

import {
	auth,
	createUserProfileDocument
} from './../../firebase/firebase.utils';

class LogIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.log('Error saving the user: ' + error.message);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className='log-in'>
				<h2 className='title'>I don't have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='log-in-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						handleChange={this.handleChange}
						label={'Display Name'}
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						handleChange={this.handleChange}
						label={'Email'}
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						handleChange={this.handleChange}
						label={'Password'}
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						handleChange={this.handleChange}
						label={'Confirm password'}
						required
					/>
					<CustomButton type='submit'>LOG IN</CustomButton>
				</form>
			</div>
		);
	}
}

export default LogIn;
