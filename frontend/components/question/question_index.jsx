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
            this.setState(this.props.getQuestions())
        })
    }

    handleEdit(question) {
        this.props.history.push(`/questions/${question.id}/edit`);
    }

    crudOptions(question) {
        if (question.author_id == this.props.currentUser.id) {
            return (
                <div className="crud-buttons">
                    <button className="edit-crud-button" onClick={() => this.handleEdit(question)}>Edit</button>
                    <button className="del-crud-button" onClick={() => this.handleDelete(question)}>Delete</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="feed">
                <br />
                <br />
                <br />
                Which came first? Chicken or the egg?
                <br />
                user1
                <br />
                <br />
                Or maybe ducks.
                <br />
                <br />
                <br />
                Where can I learn more about plexiglass?
                <br />
                user1
                <br />
                <br />
                I already tried the library.
                <br />
                <br />
                <br />
                Are raisins safe to eat?
                <br />
                user1
                <br />
                <br />
                I read about toxins on facebook.
            </div>
        )
    }
}

export default QuestionIndex;