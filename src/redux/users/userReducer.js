import {
    USER_FAIL
    , USER_SUCCESS
    , USER_REQUEST
} from "./userType";

const initialState = {
    loading: false,
    users: [],
    error: ""
}

const userReducer = (state = initialState,
    action) => {

    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }   
        default:
            return state
    }

}

export default userReducer;

