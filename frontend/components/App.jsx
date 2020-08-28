import React from "react";
import SessionContainer from "./session/session_container";
import GreetingContainer from "./greeting/greeting_container";
import QuestionIndexContainer from './question/question_index_container';
import { Route, Redirect, Router, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HideRoute, ShowRoute } from '../util/route_util';


const App = () => (
    <div>
        <HideRoute exact path="/" component={SessionContainer} />
        <ShowRoute path="/" component={GreetingContainer} />
        {/* <Switch>
            <ProtectedRoute path="/" component={QuestionIndexContainer} />
        </ Switch> */}
    </div>
);


export default App;