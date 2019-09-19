import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user.actions";
import { selectCartIsHidden } from "../../redux/cart/cart.selectors";
import { selectCurrUser } from "../../redux/user/user.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from "./header.styles";

const Header = ({ currUser, isHidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {currUser ? (
        <OptionDiv onClick={signOutStart}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {isHidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currUser: selectCurrUser,
  isHidden: selectCartIsHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
