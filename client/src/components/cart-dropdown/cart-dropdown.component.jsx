import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartIsHidden} from '../../redux/cart/cart.actions';

import {CartDropdownContainer, CartItemContainer, CartDropdownButton, EmptyMessageContainer} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemContainer>
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemContainer>
        <CartDropdownButton 
        onClick={() => {
            dispatch(toggleCartIsHidden())
            history.push('/checkout')
        }}
        >GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropdown));