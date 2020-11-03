import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const question = this.props.question;
        return (
          <div className="question-header">
            <p>
              <strong>
                <strong className="question-by">Question by </strong> <strong className="question-username">{question.author.username}</strong>
              </strong>
            </p>
            <button
              className="question-button"
              onClick={() => {
                this.props.history.push(`/questions/${question.id}`);
              }}
            >
              <h3>{question.title}</h3>
            </button>
            <p>{question.body}</p>
          </div>
        );
    }
}


export default withRouter(QuestionIndexItem);
