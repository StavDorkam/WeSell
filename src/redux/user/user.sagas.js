import {
    takeLatest,
    put,
    all,
    call
} from 'redux-saga/effects';

import {
    googleProvider,
    auth,
    createUserProfileDoc,
    getCurrentUser
} from '../../firebase/firebase.utils';

import userActionTypes from './user.types';
import {
    signInSuccess,
    signInFailure,
    signOutFailure,
    signOutSuccess
} from './user.actions';

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ])
}

function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

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

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch (err) {
        yield put(signInFailure(err))
    }
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (err) {
        yield put(signOutFailure(err))
    }
}

