import React from "react";
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

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
    loggedIn: Boolean(state.session.id)
});

export const HideRoute = withRouter(connect(mapStateToProps)(HiddenOnLogin));
export const ShowRoute = withRouter(connect(mapStateToProps)(ShownOnLogin));