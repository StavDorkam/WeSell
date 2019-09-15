import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {signOutStart} from '../../redux/user/user.actions';
import {selectCartIsHidden} from '../../redux/cart/cart.selectors';
import {selectCurrUser} from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = ({currUser, isHidden, signOutStart}) => (
    <div className="app-header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <nav className="options-container">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">CONTACT</Link>
            {
                currUser ?
                <div className="option" onClick={signOutStart}>SIGN OUT</div> :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
        <CartIcon />
        </nav>
        {
            isHidden ? null: <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currUser: selectCurrUser,
    isHidden: selectCartIsHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header) 