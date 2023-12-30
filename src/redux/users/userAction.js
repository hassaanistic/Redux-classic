import axios from "axios";
import {
    USER_FAIL
    , USER_SUCCESS
    , USER_REQUEST
} from "./userType";
export const requestUser = () => {
    return {
        type: USER_REQUEST
    }
}
export const successUser = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}
export const failUser = (error) => {
    return {
        type: USER_FAIL,
        payload : error
    }
}

export const fetchUsers =  () => {
    return  (dispatch) => {
        dispatch(requestUser());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                dispatch(successUser(res.data));

            })
            .catch(err => {

                dispatch(failUser(err.message));
            })
    }
}