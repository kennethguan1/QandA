import React from 'react';

class QuestionEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            body: '',
            author_id: '',
        }

        this.props.fetchQuestion({ id: this.props.questionId })
            .then((data) => {
                this.setState({
                    id: data.question.id,
                    title: data.question.title,
                    body: data.question.body,
                    author_id: data.question.author_id,
                });
            });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillUnmount() {
        this.props.removeQuestionErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.submitHelper();
    }

    submitHelper() {
        let question = Object.assign({}, this.state);
        this.props.sendQuestion(question)
            .then((data) => {
                this.props.history.push(`/questions/${data.question.id}`);
            }, (err) => { this.renderErrors() })
    }

    handleDelete(question) {
        this.props.deleteQuestion(question).then(() => {
            this.props.history.push('/');
        })
    }

    renderErrors() {
        let question_errors = Object.values(this.props.question_errors).flat();
        if (question_errors) {
            return (
                <div className="question-error">
                    {question_errors.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}
                </div>
            )
        }
    }

    crudOptions(question) {
        if (question.author_id == this.props.currentUser.id) {
          return (
            <div className="crud-buttons">
              <button
                className="edit-del-crud-button"
                onClick={() => this.handleDelete(question)}
              >
                Delete
              </button>
            </div>
          );
        }
    }


    render() {
        if (this.state === null) {
            return null;
        }
        return (
            <div className="show">
                <div className="question-modal">
                    <form className="question-form" onSubmit={this.handleSubmit}>
                        <h1>Edit Question</h1>
                        <input
                            type="text"
                            placeholder="Question Title"
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                        />
                        <textarea
                            placeholder="Question Body"
                            value={this.state.body}
                            onChange={this.handleInput('body')}
                        />
                        <button onClick={this.handleSubmit} className="edit-question-button">Update Question</button>
                        {this.renderErrors()}
                    </form>
                    <div className="show-button-box">
                        <button onClick={() => this.props.history.goBack()} className="back-button">Go Back</button>
                        {this.crudOptions(this.state)}
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionEditForm;
