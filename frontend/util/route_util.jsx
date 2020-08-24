import React from "react";
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

const HiddenOnLogin = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <div className="hidden"></div> : <Component {...props} />
        )}
    />
);

const ShownOnLogin = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <div className="hidden"></div>
        )}
    />
);

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

// these two REDIRECT users if they are / are not logged in
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

// these two HIDE COMPONENTS if the user is / is not logged in
export const HiddenRoute = withRouter(connect(mapStateToProps)(HiddenOnLogin));
export const ShownRoute = withRouter(connect(mapStateToProps)(ShownOnLogin));