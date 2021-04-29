import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({                         //defines state for logged in status
  loggedIn:
    Boolean(state.session.currentUser) &&
    state.session.currentUser !== undefined &&
    !Array.isArray(state.session.currentUser),
});

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const HiddenOnLogin = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <div className="hidden"></div> : <Component {...props} />
    }
  />
);

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const HiddenRoute = withRouter(connect(mapStateToProps)(HiddenOnLogin));