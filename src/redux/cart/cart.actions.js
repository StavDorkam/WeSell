import {cartActionTypes} from './cart.types';

const toggleCartIsHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_IS_HIDDEN
})

const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})

export {
    toggleCartIsHidden,
    addItem,
    clearItemFromCart,
    removeItem,
    clearCart
}