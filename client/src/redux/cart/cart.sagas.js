import {all, takeLatest, put, call} from 'redux-saga/effects';
import userActionTypes from '../user/user.types';
import {clearCart} from './cart.actions';

export function* cartSagas() {
    yield all([call(onSignOutSuccess)])
}

function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout)
}

function* clearCartOnSignout() {
    yield put(clearCart())
}


