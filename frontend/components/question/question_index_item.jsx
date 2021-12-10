import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const question = this.props.question;
//temporary
        if (question.author.username === 'demo_user') {
          return (
            <div className="question-header">
              <p>
                  <strong className="question-by">Question by </strong> <strong className="question-username">{question.author.username}  </strong>
                  <img className="profile-icon" src={window.dog}/>
              </p>
              <button
                className="question-button"
                onClick={() => {
                  this.props.history.push(`/questions/${question.id}`);
                }}
              >
                <h3>{question.title}</h3>
              </button>
            </div>
          );
        }else if (question.author.username === 'hobby_user'){
          return (
            <div className="question-header">
              <p>
                  <strong className="question-by">Question by </strong> <strong className="question-username">{question.author.username}  </strong>
                  <img className="profile-icon" src={window.cat}/>
              </p>
              <button
                className="question-button"
                onClick={() => {
                  this.props.history.push(`/questions/${question.id}`);
                }}
              >
                <h3>{question.title}</h3>
              </button>
            </div>
          );
        }else if (question.author.username === 'curious_user'){
          return (
            <div className="question-header">
              <p>
                  <strong className="question-by">Question by </strong> <strong className="question-username">{question.author.username}  </strong>
                  <img className="profile-icon" src={window.joey}/>
              </p>
              <button
                className="question-button"
                onClick={() => {
                  this.props.history.push(`/questions/${question.id}`);
                }}
              >
                <h3>{question.title}</h3>
              </button>
            </div>
          );
        }else if (question.author.username === 'happy_user'){
          return (
            <div className="question-header">
              <p>
                  <strong className="question-by">Question by </strong> <strong className="question-username">{question.author.username}  </strong>
                  <img className="profile-icon" src={window.grinch}/>
              </p>
              <button
                className="question-button"
                onClick={() => {
                  this.props.history.push(`/questions/${question.id}`);
                }}
              >
                <h3>{question.title}</h3>
              </button>
            </div>
          );
        }else if (question.author.username === 'opinionated_user'){
          return (
            <div className="question-header">
              <p>
                  <strong className="question-by">Question by </strong> <strong className="question-username">{question.author.username}  </strong>
                  <img className="profile-icon" src={window.disgust}/>
              </p>
              <button
                className="question-button"
                onClick={() => {
                  this.props.history.push(`/questions/${question.id}`);
                }}
              >
                <h3>{question.title}</h3>
              </button>
            </div>
          );
        }

        else{
          return (
            <div className="question-header">
              <p>
                  <strong className="question-by">Question by </strong> <strong className="question-username">{question.author.username}  </strong>
                  <img className="profile-icon" src={window.defaultImage}/>
              </p>
              <button
                className="question-button"
                onClick={() => {
                  this.props.history.push(`/questions/${question.id}`);
                }}
              >
                <h3>{question.title}</h3>
              </button>
            </div>
          );
        }
//temporary
    }
}


export default withRouter(QuestionIndexItem);                                    //give component access to this.props.history