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
                <button className="question-button" onClick={() => { this.props.history.push(`/questions/${question.id}`) }}><h3>{question.title}</h3></button>
                <p>
                    <strong>
                        {question.author.username}
                    </strong>
                </p>
                <p>{question.body}</p>
            </div>
        );
    }
}


export default withRouter(QuestionIndexItem);
