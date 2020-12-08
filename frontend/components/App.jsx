import React from 'react';

import GreetingContainer from "./greeting/greeting_container";
import SessionContainer from './session/session_container';
import QuestionIndexContainer from './question/question_index_container';
import QuestionFormContainer from './question/question_form_container';
import QuestionShowContainer from './question/question_show_container';
import QuestionEditContainer from './question/question_edit_container';
import CommentFormContainer from './comment/comment_form_container';
import CommentEditFormContainer from './comment/comment_edit_container';
import ReplyFormContainer from './reply/reply_form_container';
import CommentShowContainer from './comment/comment_show_container';
import ReplyEditFormContainer from './reply/reply_edit_container';
import SearchIndexContainer from './search/search_index_container';
import SearchContainer from './search/search_container'
// import CommentIndexContainer from './comment/comment_index_container';


import { Route, Switch } from 'react-router-dom';
import {
  ProtectedRoute,
  HiddenRoute,
  ShownRoute,
} from "../util/route_util";

const App = () => {
  return(
  <div className="routes">
    <HiddenRoute exact path="/" component={SessionContainer} />
    <ShownRoute path="/" component={GreetingContainer} />
    <ProtectedRoute path="/" component={SearchContainer} />
    <ProtectedRoute path="/askquestion" component={QuestionFormContainer} />
    <ProtectedRoute
      exact
      path="/questions/:id/comments/:commentId/edit"
      component={CommentEditFormContainer}
    />
    <ProtectedRoute
      exact
      path="/questions/:id/comments/:commentId/replies/:replyId/edit"
      component={ReplyEditFormContainer}
    />


    <Switch>
      <ProtectedRoute
        exact
        path="/questions/:id/edit"
        component={QuestionEditContainer}
      />
      <ProtectedRoute
        exact
        path="/questions/:id"
        component={CommentFormContainer}
      />
      <ProtectedRoute
        exact
        path="/questions/:id/comments/:commentId"
        component={ReplyFormContainer}
      />
      <ProtectedRoute
        exact
        path="/search/:searchinput" 
        component={SearchIndexContainer} 
        />
    </Switch>

    <Switch>
      <ProtectedRoute exact path="/questions/:id" component={QuestionShowContainer} />
      <ProtectedRoute exact path="/questions/:id/comments/:commentId" component={CommentShowContainer} />
      <ProtectedRoute exact path="/" component={QuestionIndexContainer} />
      {/* <ProtectedRoute exact path="/questions" component={CommentIndexContainer} /> */}
    </Switch>
  </div>
    )
}

export default App;