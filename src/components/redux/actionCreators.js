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

export const Logout = () =>{
    console.log("hoise");
    return{
        type:actionTypes.AUTH_LOGOUT,
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
           
    }
    )
    


}