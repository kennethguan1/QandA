import React from "react";
import LikeButton from '../like/like_button';

class CommentShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {},
      question: {}
    };

    this.props.fetchQuestion({ id: this.props.questionId }).then((question) => {
      this.setState(question);
    });

    this.props.fetchComment({ id: this.props.commentId }).then((comment) => {
      this.setState(comment);
    });
  }

  handleRDelete(reply) {
    this.props.deleteReply(reply).then(() => {
      window.location.reload();
    });
  }

  handleREdit(reply) {
    this.props.history.push(
        `/questions/${this.props.questionId}/comments/${this.props.commentId}/replies/${reply.id}/edit`
    );
  }

  crudROptions(reply) {
    if (reply.author_id == this.props.currentUser.id) {
      return (
        <div className="crud-buttons">
          <button
            className="edit-crud-button"
            onClick={() => this.handleREdit(reply)}
          >
            Edit
          </button>
          <button
            className="del-crud-button"
            onClick={() => this.handleRDelete(reply)}
          >
            Delete
          </button>
        </div>
      );
    }
  }

  displayComment() {

      const comment = this.state.comment;
      const question = this.state.question;
      return (
        <div className="show-box">
          <h1>
            Question:
            <br />
            {question.title}</h1>
          <hr />
            <strong>Comment:</strong>
            <br />
          <p className="show-body">{comment.body}</p>
        </div>
      );

  }

  displayReplies() {
    let replies = [];
    if (this.state.comment.replies != undefined) {
      replies = Object.values(this.state.comment.replies).map(
        (reply, i) => {
//temporary
        if (reply.author.username=== 'demo_user') {    
          return (
            <li key={i} className="comment-list-item">
              <div className="comment-item">
                {this.crudROptions(reply)}
                <p>
                  <strong className="reply-username">
                    {reply.author.username}
                    <img className="profile-icon" src={window.dog}/>
                  </strong>
                </p>
                <p>{reply.body}</p>
              </div>
              <hr />
            </li>
          );
        }else if(reply.author.username=== 'hobby_user'){
          return (
            <li key={i} className="comment-list-item">
              <div className="comment-item">
                {this.crudROptions(reply)}
                <p>
                  <strong className="reply-username">
                    {reply.author.username}
                    <img className="profile-icon" src={window.cat}/>
                  </strong>
                </p>
                <p>{reply.body}</p>
              </div>
              <hr />
            </li>
          );
        }else if(reply.author.username=== 'curious_user'){
          return (
            <li key={i} className="comment-list-item">
              <div className="comment-item">
                {this.crudROptions(reply)}
                <p>
                  <strong className="reply-username">
                    {reply.author.username}
                    <img className="profile-icon" src={window.joey}/>
                  </strong>
                </p>
                <p>{reply.body}</p>
              </div>
              <hr />
            </li>
          );
        }else if(reply.author.username=== 'happy_user'){
          return (
            <li key={i} className="comment-list-item">
              <div className="comment-item">
                {this.crudROptions(reply)}
                <p>
                  <strong className="reply-username">
                    {reply.author.username}
                    <img className="profile-icon" src={window.grinch}/>
                  </strong>
                </p>
                <p>{reply.body}</p>
              </div>
              <hr />
            </li>
          );
        }else if(reply.author.username=== 'opinionated_user'){
          return (
            <li key={i} className="comment-list-item">
              <div className="comment-item">
                {this.crudROptions(reply)}
                <p>
                  <strong className="reply-username">
                    {reply.author.username}
                    <img className="profile-icon" src={window.disgust}/>
                  </strong>
                </p>
                <p>{reply.body}</p>
              </div>
              <hr />
            </li>
          );
        }

        else{
          return (
            <li key={i} className="comment-list-item">
              <div className="comment-item">
                {this.crudROptions(reply)}
                <p>
                  <strong className="reply-username">
                    {reply.author.username}
                    <img className="profile-icon" src={window.defaultImage}/>
                  </strong>
                </p>
                <p>{reply.body}</p>
              </div>
              <hr />
            </li>
          );
        }
//temporary
        }
      );
    } else {
      replies = (
        <li key="404" className="comment-list-item">
          <h5>Be the first to reply!</h5>
        </li>
      );
    }
    return (
      <div className="comments-show">
        <h3>Replies</h3>
        <hr />
        {replies}
      </div>
    );
  }

  render() {
    return (
      <div className="show">
        {this.displayComment()}
        {this.displayReplies()}
        <button
          onClick={() => {
            this.props.history.push(`/questions/${this.props.questionId}`);
          }}
          className="back-button"
        >
          Go Back
        </button>
      </div>
    );
  }
}

export default CommentShow;