import userActionTypes from './user.types';

const INITIAL_STATE = {
    currUser: null,
    error: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currUser: action.payload,
                error: null
            }
        case userActionTypes.SIGN_OUT_SUCCESS: 
            return {
                ...state,
                currUser: null,
                error: null
            }
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;