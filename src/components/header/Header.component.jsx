import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/logo.svg';
import { auth } from './../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' to='/shop/jackets' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>

				{currentUser ? (
					<button
						className='option'
						onClick={() => {
							auth.signOut();
						}}
					>
						SIGN OUT
					</button>
				) : (
					<Link className='option' to='/sign-in'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
