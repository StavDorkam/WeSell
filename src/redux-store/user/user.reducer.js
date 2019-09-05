const INITIAL_STATE = {
    currUser: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currUser: action.payload
            }

        default: 
            return state;
    }
}

export default userReducer;