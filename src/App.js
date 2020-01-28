import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import SignInSignOut from './pages/sign-in-sign-out/Sign-in-sign-out.component';
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';

//Layout
import Header from './components/header/Header.component';

//Firebase
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		};
	}

	closeConnect = null;

	componentDidMount() {
		this.closeConnect = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.closeConnect();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<Header currentUser={this.state.currentUser} />
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/shop' component={ShopPage} />
						<Route exact path='/sign-in' component={SignInSignOut} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
