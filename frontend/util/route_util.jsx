// import React from "react";
// import { connect } from 'react-redux';
// import { Redirect, Route, withRouter } from 'react-router-dom';

// const HiddenOnLogin = ({ loggedIn, path, component: Component }) => (
//     <Route
//         path={path}
//         render={props => (
//             loggedIn ? <div className="hidden"></div> : <Component {...props} />
//         )}
//     />
// );

// const ShownOnLogin = ({ loggedIn, path, component: Component }) => (
//     <Route
//         path={path}
//         render={props => (
//             loggedIn ? <Component {...props} /> : <div className="hidden"></div>
//         )}
//     />
// );

// const Auth = ({ loggedIn, path, component: Component }) => (
//     <Route
//         path={path}
//         render={props => (
//             loggedIn ? <Redirect to="/" /> : <Component {...props} />
//         )}
//     />
// );

// const Protected = ({ loggedIn, path, component: Component }) => (
//     <Route
//         path={path}
//         render={props => (
//             loggedIn ? <Component {...props} /> : <Redirect to="/" />
//         )}
//     />
// );



// const mapStateToProps = state => ({
//     loggedIn: Boolean(state.session.id)
// });

// export const HideRoute = withRouter(connect(mapStateToProps)(HiddenOnLogin));
// export const ShowRoute = withRouter(connect(mapStateToProps)(ShownOnLogin));

// export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
// export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  loggedIn:
    Boolean(state.session.currentUser) &&
    state.session.currentUser !== undefined &&
    !Array.isArray(state.session.currentUser),
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

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

const ShownOnLogin = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <div className="hidden"></div>
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const HiddenRoute = withRouter(connect(mapStateToProps)(HiddenOnLogin));
export const ShownRoute = withRouter(connect(mapStateToProps)(ShownOnLogin));