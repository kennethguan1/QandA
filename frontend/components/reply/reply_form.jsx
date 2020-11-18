import React from 'react';
import { withRouter } from 'react-router-dom';

class ReplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount() {
    this.props.removeReplyErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let reply = {
      body: this.state.body,
      author_id: this.props.author_id,
      comment_id: this.props.currentComment,
    };
    this.props.sendReply(reply).then(
      () => {
        this.setState({ body: "" });
        window.location.reload();
      },
      (err) => {
        this.renderErrors();
      }
    );
  }

  renderErrors() {
    let reply_errors = Object.values(this.props.reply_errors).flat();
    if (reply_errors && reply_errors.length > 0) {
      return (
        <div className="reply-error">
          {reply_errors.map((error, i) => {
            return <li key={i}>{error}</li>;
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="reply">
        <form className="reply-form" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Reply"
            value={this.state.body}
            onChange={this.handleInput("body")}
          />
          <button className="create-reply-button" onClick={this.handleSubmit}>
            Add Reply
          </button>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(ReplyForm);