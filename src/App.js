import React from 'react';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import NotFoundPage from './pages/notfound/notfoundpage.component';
import Header from './components/header/header.component';
import {Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDoc} from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({currUser: userAuth})
      }
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className="App">
        <Header currUser={this.state.currUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndUpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
