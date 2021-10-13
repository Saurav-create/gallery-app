import React from "react";
import Homepage from "./Homepage";
import Header from "./Header/Header";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginNew from './loginNew';
import { connect } from "react-redux";



const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const Main = (props) => {

    let routes = null;
    if (props.token === null) {
        routes = (
            <Switch>

                <Route path="/login" exact component={LoginNew} />

                <Redirect to="/login" />

            </Switch>
        )

    }
    else {
        routes = (<Switch>

            <Route path="/" component={Homepage} />
            <Redirect to="/" />

        </Switch>)
    }

    console.log(props.token)
    return (
        <div>
            <Header />

            {routes}


        </div>
    );
}


export default connect(mapStateToProps)(Main);