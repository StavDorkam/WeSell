import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartIsHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles';


const CartIcon = ({itemCount , toggleCartIsHidden}) => (
    <CartIconContainer onClick={toggleCartIsHidden}>
        <ShoppingIcon />
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartIsHidden: () => dispatch(toggleCartIsHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);