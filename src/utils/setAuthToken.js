//if the token is there -> add to header
//if not -> del from headers

import axios from 'axios'

const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
    }
    else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;