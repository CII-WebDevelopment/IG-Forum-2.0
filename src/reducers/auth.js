import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types'

const initialState = {
    //accessing browser's local storage using vanilla JS
    token: localStorage.getItem('token'),
    
    //Setting isAuth to null to start
    // When registered -> isAuth : true
    isAuthenticated: null,

    //Making sure that the res from backend is received
    //if false then received.
    loading: true,
    user: null

}

export default function(state = initialState, action){
    
    const {type, payload} = action;


    switch(type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            //get the user logged in
            localStorage.setItem('token', payload.token);

            return{
                ...state, 
                ...payload,
                isAuthenticated: true,
                loading: false
            }

        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token')

            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        default:
            return state;
    }
}