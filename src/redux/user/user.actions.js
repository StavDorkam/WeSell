import userActionTypes from './user.types';

const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

const signOutFailure = err => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: err
})

const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})

const signUpStart = () => ({
    type: userActionTypes.SIGN_UP_START
})

const signUpSuccess = user => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: user
})

const signUpFailure = err => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: err
})

const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})




export {
    googleSignInStart,
    emailSignInStart,
    signInSuccess,
    signInFailure,
    checkUserSession,
    signOutStart,
    signOutSuccess,
    signOutFailure,
    signUpStart,
    signUpSuccess,
    signUpFailure
}

