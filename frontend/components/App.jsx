import React from "react";
import SessionContainer from "./session/session_container";
import GreetingContainer from "./greeting/greeting_container";

import { Route } from "react-router-dom";

const App = () => (
    <div>
       
        <Route path="/" component={GreetingContainer} />
        <Route path="/" component={SessionContainer} />
           
    </div>
);


export default App;