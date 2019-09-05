import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = ({currUser}) => (
    <div className="app-header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <nav className="options-container">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">CONTACT</Link>
            {
                currUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN-OUT</div> :
                <Link className="option" to="/signin">SIGN-IN/SIGN-UP</Link>
            }
        </nav>
    </div>
)

export default Header