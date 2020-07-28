import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from './actions'
import { Switch, Link, Route } from 'react-router-dom';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Cart from './screens/Cart';


function App() {

  return (
    <div className="App">
		<Switch>
			<Route component = {Home} path = "/" exact />
			<Route component = {Profile} path = "/profile" />
			<Route component = {Cart} path = "/cart" />
		</Switch>
    </div>
  );
}

export default App;
