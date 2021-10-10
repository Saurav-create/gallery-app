import * as actionTypes from './actionTypes';
import axios from 'axios';




export const auth = (email, password, mode) => dispatch => {
    let authData = {
        email: email,
        passsword: password,
        returnSecureToken: true,
    }

    
    console.log(authData,mode);

    let API_URL = "";
    if (mode === "login") {
        API_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=";
        console.log("login");
    }
    else {
        API_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
        console.log("signup");
    }

    let API_KEY = "AIzaSyCqMOVqJ1HnhN9UXZydeidsSKBj0dPl65Q";
    axios.post(API_URL + API_KEY, authData)
        .then(res => {
            console.info(res);
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
        }
        )
}