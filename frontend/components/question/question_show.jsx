import React from "react";
import LikeButton from '../like/like_button';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
    };

    this.props.fetchQuestion({ id: this.props.questionId }).then((question) => {
      this.setState(question);
    });
  }

  handleDelete(question) {
    this.props.deleteQuestion(question).then(() => {
      this.props.history.push("/");
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

  handleCDelete(comment) {
    this.props.deleteComment(comment).then(() => {
      window.location.reload();
    });
  }

  handleCEdit(comment) {
    this.props.history.push(
      `/questions/${this.props.questionId}/comments/${comment.id}/edit`
    );
  }

  crudCOptions(comment) {
    if (comment.author_id == this.props.currentUser.id) {
      return (
        <div className="crud-buttons">
          <button
            className="edit-crud-button"
            onClick={() => this.handleCEdit(comment)}
          >
            Edit
          </button>
          <button
            className="del-crud-button"
            onClick={() => this.handleCDelete(comment)}
          >
            Delete
          </button>
        </div>
      );
    }
  }

  displayQuestion() {

      const question = this.state.question;
      return (
        <div className="show-box">
          {this.crudOptions(question)}
                {/* <strong className="question-by">Question by </strong> <strong className="question-username">{question.author.username}</strong> */}
          <h1>Question:
            <br />
            {question.title}</h1>
          <hr />
          <p className="show-body">{question.body}</p>
        </div>
      );

  }

  displayComments() {
    let comments = [];

    // let likers;
    if (this.state.question.comments != undefined) {
      comments = Object.values(this.state.question.comments).map(
        (comment, i) => {
          // let likes = <div></div>;
          // let likers = comment.likers.length;
          // let likeBtn = !comment.likers.includes(this.props.currentUser.id) ?
          //   (<button className="like-btn" onClick={() => this.props.likePost(comment.id, this.props.currentUser.id)}>
          //       <i className="fas fa-heart unclicked post-index-like">Like</i>
          //   </button>)
          //   :
          //   (<button onClick={() => this.props.unlikePost(comment.id)}>
          //       <i className="fas fa-heart clicked post-index-like">Unlike</i>
          //   </button>);

          return (
            <li key={i} className="comment-list-item">
              <div className="comment-item">
                {this.crudCOptions(comment)}
                <p>
                  <strong className="comment-username">
                    {comment.author.username}{"   "}
                    <img className="profile-icon" src={window.defaultImage}/>
                  </strong>{" "}
                </p>
              <button className="comment-button"
                onClick={() => {
                  this.props.history.push(`/questions/${this.props.questionId}/comments/${comment.id}`);
                }}
              >
                <p>{comment.body}</p>
              </button>
                <LikeButton isLiked={false} comment={comment} currentUser={this.props.currentUser} likePost={this.props.likePost} unlikePost={this.props.unlikePost}/>
              </div>
              <hr />
            </li>
          );
        }
      );
    } else {
      comments = (
        <li key="404" className="comment-list-item">
          <h5>Be the first to comment!</h5>
        </li>
      );
    }
    return (
      <div className="comments-show">
        <h3>Comments</h3>
        <hr />
        {comments}
      </div>
    );
  }

  render() {
    return (
      <div className="show">
        {this.displayQuestion()}
        {this.displayComments()}
        <button
          onClick={() => {
            this.props.history.push("/");
          }}
          className="back-button"
        >
          Go Back
        </button>
      </div>
    );
  }
}

export default QuestionShow;
