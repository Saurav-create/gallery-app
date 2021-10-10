import React from "react";
import Homepage from "./Homepage";
import Header from "./Header/Header";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "./Login";
import LoginNew from "./loginNew";



const Main = ()=>{

    return(
        <div>
            <Header />
          {/* <Switch>
                <Route path="/login" component={Login} />
                <Route path="/homepage" component={Homepage} />         
                <Redirect to="/" />
            </Switch> */}

        <LoginNew />
        </div>
    );
}


export default Main;