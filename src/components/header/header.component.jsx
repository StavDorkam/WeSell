import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
    <div className="app-header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <nav className="links-container">
            <Link to="/shop" className="link">SHOP</Link>
            <Link to="/shop" className="link">CONTACT</Link>
            <Link to="/sign" className="link">SIGN-IN/SIGN-UP</Link>
        </nav>
    </div>
)

export default Header