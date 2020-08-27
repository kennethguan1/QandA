import React from "react";
import SessionContainer from "./session/session_container";
import GreetingContainer from "./greeting/greeting_container";

import { Route, Redirect, Router, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HideRoute, ShowRoute } from '../util/route_util';


const App = () => (
    <div>

        {/* <Route path="/" component={GreetingContainer} />
        <Route path="/" component={SessionContainer} />
         */}

        <HideRoute exact path="/" component={SessionContainer} />
        <ShowRoute path="/" component={GreetingContainer} />
    </div>
);


export default App;