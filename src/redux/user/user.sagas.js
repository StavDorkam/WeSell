import {
    takeLatest,
    put,
    all,
    call
} from 'redux-saga/effects';

import {
    googleProvider,
    auth,
    createUserProfileDoc
} from '../../firebase/firebase.utils';

import userActionTypes from './user.types';
import {
    signInSuccess,
    signInFailure
} from './user.actions';

function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDoc, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (err) {
        yield put(signInFailure(err))
    }
}

function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (err) {
        yield put(signInFailure(err))
    }
}

function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch (err) {
        yield put(signInFailure(err))
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}