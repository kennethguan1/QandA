import React from 'react';

class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {},
        }

        this.props.fetchQuestion({ id: this.props.questionId })
            .then((question) => {
                this.setState(question);
            });
    }

    handleDelete(question) {
        this.props.deleteQuestion(question).then(() => {
            this.props.history.push('/');
        })
    }

    handleEdit(question) {
        this.props.history.push(`/questions/${question.id}/edit`);
    }

    crudOptions(question) {
        if (question.author_id == currentUser.id) {
            return (
                <div className="crud-buttons">
                    <button className="edit-crud-button" onClick={() => this.handleEdit(question)}>Edit</button>
                    <button className="del-crud-button" onClick={() => this.handleDelete(question)}>Delete</button>
                </div>
            )
        }
    }

    handleCDelete(comment) {
        this.props.deleteComment(comment).then(() => {
            window.location.reload();
        })
    }

    handleCEdit(comment) {
        this.props.history.push(`/questions/${this.props.questionId}/comments/${comment.id}/edit`);
    }

    crudCOptions(comment) {
        if (comment.author_id == currentUser.id) {
            return (
                <div className="crud-buttons">
                    <button className="edit-crud-button" onClick={() => this.handleCEdit(comment)}>Edit</button>
                    <button className="del-crud-button" onClick={() => this.handleCDelete(comment)}>Delete</button>
                </div>
            )
        }
    }

    displayQuestion() {
        if (this.state.question.topic != undefined) {
            const question = this.state.question;
            return (
                <div className="show-box">
                    {this.crudOptions(this.state.question)}
                    <p className="show-info">Written in #
          <strong className="topic-linker" onClick={() => this.props.history.push(`/topics/${question.topic.id}`)}>
                            {question.topic.name}
                        </strong> by <strong>
                            {question.author.fname} {question.author.lname}
                        </strong>
                    </p>
                    <h1>{question.title}</h1>
                    <hr />
                    <p className="show-body">{question.body}</p>
                </div>
            )
        }
    }

    displayComments() {
        let comments = [];
        if (this.state.question.comments != undefined) {
            comments = Object.values(this.state.question.comments).map((comment, i) => {
                return (
                    <li key={i} className="comment-list-item">
                        <div className="comment-item">
                            {this.crudCOptions(comment)}
                            <p>
                                <strong>
                                    {comment.author.fname} {comment.author.lname}
                                </strong> | "{comment.author.credentials}"
              </p>
                            <p>{comment.body}</p>
                        </div>
                        <hr />
                    </li>
                )
            })
        } else {
            comments = (
                <li key="404" className="comment-list-item">
                    <h5>There aren't any comments yet, be the first!</h5>
                </li>
            )
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
                <button onClick={() => { this.props.history.push('/') }} className="back-button"><RiArrowGoBackLine />Go Back</button>
            </div>
        );
    }
}

export default QuestionShow;
