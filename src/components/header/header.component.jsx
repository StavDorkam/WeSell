import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({currUser, isHidden}) => (
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
        <CartIcon />
        </nav>
        {
            isHidden ? null: <CartDropdown />
        }
    </div>
)

const mapStateToProps = ({user: {currUser}, cart: {isHidden}}) => ({
    currUser,
    isHidden
})

export default connect(mapStateToProps)(Header) 