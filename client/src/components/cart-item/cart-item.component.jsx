import React from 'react';
import {CartItemContainer, CartItemImage, CartItemDetailsContainer} from './cart-item.styles';

const CartItem = ({item: {imageUrl, name, price, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item" />
        <CartItemDetailsContainer>
            <span>{name}</span>
            <span>
               {quantity} x ${price}
            </span>
        </CartItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;