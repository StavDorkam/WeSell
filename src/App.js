import React from 'react';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import NotFoundPage from './pages/notfound/notfoundpage.component';
import Header from './components/header/header.component';
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign" component={SignInAndUpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
