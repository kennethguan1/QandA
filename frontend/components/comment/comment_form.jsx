import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      // author_id: '',
      // question_id: '',
    };

    // this.props.fetchQuestion({ id: this.props.currentQuestion })
    //     .then((data) => {
    //         const comment = data.question.comments[this.props.currentComment];
    //         this.setState({
    //             id: comment.id,
    //             body: comment.body,
    //             author_id: comment.author_id,
    //             question_id: comment.question_id,
    //         });
    //     });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount() {
    this.props.removeCommentErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = {
      body: this.state.body,
      author_id: this.props.author_id,
      question_id: this.props.currentQuestion,
    };
    this.props.sendComment(comment).then(
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
    let comment_errors = Object.values(this.props.comment_errors).flat();
    if (comment_errors && comment_errors.length > 0) {
      return (
        <div className="comment-error">
          {comment_errors.map((error, i) => {
            return <li key={i}>{error}</li>;
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="comment">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Comment"
            value={this.state.body}
            onChange={this.handleInput("body")}
          />
          <button className="create-comment-button" onClick={this.handleSubmit}>
            Add Comment
          </button>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(CommentForm);