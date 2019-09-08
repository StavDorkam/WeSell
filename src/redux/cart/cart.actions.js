import {cartActionTypes} from './cart.types';

export const toggleCartIsHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_IS_HIDDEN
})

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})