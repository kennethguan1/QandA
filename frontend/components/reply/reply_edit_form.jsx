import React from 'react';
import { withRouter } from 'react-router-dom';

class ReplyEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author_id: '',
            comment_id: '',
        };

        this.props.fetchComment({ id: this.props.currentComment })
            .then((data) => {
                const reply = data.comment.replies[this.props.currentReply];
                this.setState({
                    id: reply.id,
                    body: reply.body,
                    author_id: reply.author_id,
                    comment_id: reply.comment_id,
                });
            });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillUnmount() {
        this.props.removeReplyErrors();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const reply = this.state;
        this.props.sendReply(reply)
            .then(() => {
                this.props.history.push(`/questions/${this.props.currentQuestion}/comments/${this.props.currentComment}`);
                window.location.reload();
            }, (err) => { this.renderErrors() })
    }

    renderErrors() {
        let reply_errors = Object.values(this.props.reply_errors).flat();
        if (reply_errors) {
            return (
                <div className="comment-error">
                    {reply_errors.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}
                </div>
            )
        }
    }

    render() {
        return (
          <div className="comment">
            <h3>Edit Reply</h3>
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

export default withRouter(ReplyEditForm);
