import React from 'react';
import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.getQuestions().then((q) => {
      this.state = q;
    });
  }

  handleDelete(question) {
    this.props.deleteQuestion(question).then(() => {
      this.setState(this.props.getQuestions());
    });
  }

  handleEdit(question) {
    this.props.history.push(`/questions/${question.id}/edit`);
  }

  crudOptions(question) {
    if (question.author_id == this.props.currentUser.id) {
      return (
        <div className="crud-buttons">
          <button
            className="edit-crud-button"
            onClick={() => this.handleEdit(question)}
          >
            Edit
          </button>
          <button
            className="del-crud-button"
            onClick={() => this.handleDelete(question)}
          >
            Delete
          </button>
        </div>
      );
    }
  }

  render() {
    const questions = Object.values(this.props.questions);
    return (
      <div className="feed">
        {questions.reverse().map((question, i) => (
          <li key={i} className="question-list-item">
            {this.crudOptions(question)}
            <QuestionIndexItem question={question} key={question.id} />
            <hr />
          </li>
        ))}
      </div>
    );
  }
}

export default QuestionIndex;