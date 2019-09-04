import React from 'react';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import NotFoundPage from './pages/notfound/notfoundpage.component';
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
