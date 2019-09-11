import userActionTypes from './user.types';

const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})

const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})



export {
    googleSignInStart,
    emailSignInStart,
    signInSuccess,
    signInFailure
}

