import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SingInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import './App.css';


const App = props => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SingInAndSignUp} />
      </Switch>
    </div>
  );
};


export default App;
