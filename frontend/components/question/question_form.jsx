import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            author_id: this.props.author_id,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitHelper = this.submitHelper.bind(this);
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

    render() {
        return (
            <div className="question-modal">
                <form className="question-form" onSubmit={this.handleSubmit}>
                    <h1>New Question</h1>
                    <Link to="/" className="close-new-question"><button className="close-question-button">X</button></Link>
                    <input
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleInput('title')}
                    />
                    <textarea
                        placeholder="Body"
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                    />
                    <button className="create-question-button" onClick={this.handleSubmit}>Create Question</button>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(QuestionForm);
