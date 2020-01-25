import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
