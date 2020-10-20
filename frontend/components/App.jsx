// import React from "react";
// import SessionContainer from "./session/session_container";
// import GreetingContainer from "./greeting/greeting_container";
// import QuestionIndexContainer from './question/question_index_container';
// import { Route, Redirect, Router, Switch } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute, HideRoute, ShowRoute } from '../util/route_util';


// const App = () => (
//     <div>
//         <HideRoute exact path="/" component={SessionContainer} />
//         <ShowRoute path="/" component={GreetingContainer} />
//         <ShowRoute path="/" component={QuestionIndexContainer} />
//         {/* <Switch>
//             <ProtectedRoute path="/" component={QuestionIndexContainer} />
//         </ Switch> */}
//     </div>
// );


// export default App;

import React from 'react';

import GreetingContainer from "./greeting/greeting_container";
import SessionContainer from './session/session_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionFormContainer from './question/question_form_container';
import QuestionShowContainer from './question/question_show_container';
import QuestionEditContainer from './question/question_edit_container';
import CommentFormContainer from './comment/comment_form_container';
import CommentEditFormContainer from './comment/comment_edit_container';

import { Route, Redirect, Router, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, HideRoute, ShowRoute } from '../util/route_util';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

export default () => (
    <div className="routes">
        <Route exact path="/" component={SessionContainer} />
        <Route path="/" component={GreetingContainer} />
        <Route path="/askquestion" component={QuestionFormContainer} />
        <Route exact path="/questions/:id/comments/:commentId/edit" component={CommentEditFormContainer} />

        <Switch>
            <Route exact path="/questions/:id/edit" component={QuestionEditContainer} />
            <Route exact path="/questions/:id" component={CommentFormContainer} />
        </Switch>

        <Switch>
            <Route exact path="/questions/:id" component={QuestionShowContainer} />
            <Route exact path="/" component={QuestionIndexContainer} />
        </Switch>
    </div>
);
