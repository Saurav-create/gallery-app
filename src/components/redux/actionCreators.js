import * as actionTypes from './actionTypes';
import axios from 'axios';




export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId,
        }
    }
}








export const auth = (email, password, mode) => dispatch => {
    let authData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }


    console.log(authData, mode);

    let API_URL = "";
    if (mode === "login") {
        API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
        console.log("login");
    }
    else {
        API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        console.log("signup");
    }

    let API_KEY = 'AIzaSyCqMOVqJ1HnhN9UXZydeidsSKBj0dPl65Q';
    axios.post(API_URL + API_KEY, authData)
        .then(response => {
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            // dispatch(authLoading(false));
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationTime', expirationTime);
        }
        )
        .catch(err=> {
            alert(`${err.response.data.error.message}`);
        })



}



export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        // Logout
         dispatch(Logout());
    } else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            // Logout
             dispatch(Logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
        }
    }
}


export const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

