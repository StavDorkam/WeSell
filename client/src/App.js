import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/home/home-page.component';
import ShopPage from './pages/shop/shop-page.component';
import SignInAndUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component';
import CheckoutPage from './pages/checkout/checkout-page.component';
import NotFoundPage from './pages/notfound/notfound-page.component';

import Header from './components/header/header.component';

import { selectCurrUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './global.styles.scss';

const App = ({ currUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={() => currUser ? (<Redirect to='/' />) : (<SignInAndUpPage />)} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currUser: selectCurrUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
