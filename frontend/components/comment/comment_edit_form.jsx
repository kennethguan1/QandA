import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author_id: '',
            question_id: '',
        };

        this.props.fetchQuestion({ id: this.props.currentQuestion })
            .then((data) => {
                const comment = data.question.comments[this.props.currentComment];
                this.setState({
                    id: comment.id,
                    body: comment.body,
                    author_id: comment.author_id,
                    question_id: comment.question_id,
                });
            });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillUnmount() {
        this.props.removeCommentErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = this.state;
        this.props.sendComment(comment)
            .then(() => {
                this.props.history.push(`/questions/${this.props.currentQuestion}`);
                window.location.reload();
            }, (err) => { this.renderErrors() })
    }

    renderErrors() {
        let comment_errors = Object.values(this.props.comment_errors).flat();
        if (comment_errors) {
            return (
                <div className="comment-error">
                    {comment_errors.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}
                </div>
            )
        }
    }

    render() {
        return (
          <div className="comment">
            <h3>Edit Comment</h3>
            <form className="comment-form" onSubmit={this.handleSubmit}>
              <textarea
                placeholder="Comment Text"
                value={this.state.body}
                onChange={this.handleInput("body")}
              />
              <button
                className="create-comment-button"
                onClick={this.handleSubmit}
              >
                Update
              </button>
              {this.renderErrors()}
            </form>
            <div className="show-button-box">
              <button
                onClick={() => this.props.history.goBack()}
                className="back-button"
              >
                Go Back
              </button>
            </div>
          </div>
        );
    }
}

export default withRouter(CommentEditForm);
