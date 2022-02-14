import axios from 'axios';
import validate from 'deep-email-validator'
import {setAlert} from './alert'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from './types'

import setAuthToken from '../utils/setAuthToken'

//Load User
export const loadUser = () => async dispatch => {
    //check if there is a token
    //if yes, send it to a global storage
    
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    // console.log(localStorage.token)
    try {
        const res = await axios.get('/api/auth')
        console.log('checked auth')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }

}

//logout
export const logout = () => dispatch => {
    dispatch({type: LOGOUT});
}


//Register User
export const register = ({name, email, password, password2, rollNo, regNo, joiningYear }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // console.log('email ok')
    const body = JSON.stringify({name, email, password, password2, regNo, rollNo, joiningYear})

    try {
        const res = await axios.post('/api/users/register-user', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            //return token
            payload: res.data
        });

        dispatch(loadUser())
    } catch (err) {

        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
   }


        
        dispatch({
            type: REGISTER_FAIL
        })
    
}

//login User
export const login = ( email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password})

    try {
        const res = await axios.post('/api/auth/user-login', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            //return token
            payload: res.data
        });

        dispatch(loadUser())
    } catch (err) {

        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: LOGIN_FAIL
        })
    }
}