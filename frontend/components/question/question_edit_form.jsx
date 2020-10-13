import React from 'react';

class QuestionEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            body: '',
            topic_name: '',
            topic_id: '',
            author_id: '',
            topics: {},
            topic_names_list: [],
        }

        this.props.fetchQuestion({ id: this.props.questionId })
            .then((data) => {
                this.setState({
                    id: data.question.id,
                    title: data.question.title,
                    body: data.question.body,
                    topic_name: data.question.topic.name,
                    topic_id: data.question.topic_id,
                    author_id: data.question.author_id,
                    topics: {},
                    topic_names_list: [],
                });
            });

        this.makeTopicList = this.makeTopicList.bind(this);
        this.renderTopicList = this.renderTopicList.bind(this);
        this.renderTopicErrors = this.renderTopicErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillUnmount() {
        this.props.removeQuestionErrors();
        this.props.removeTopicErrors();
    }

    componentWillMount() {
        this.makeTopicList();
    }

    makeTopicList() {
        this.props.getTopics().then((data) => {
            let flipped = {};
            Object.keys(data.topics).forEach(key => {
                flipped[data.topics[key].name] = key;
            })
            this.setState({ topics: flipped });
            this.setState({ topic_names_list: Object.keys(flipped).sort() });
        })
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ topic_name: this.state.topic_name.toLowerCase() })
        if (!(this.state.topic_name in this.state.topics)) {
            this.props.sendTopic({ name: this.state.topic_name }).then((data) => {
                this.setState({ topic_id: data.topic.id });
                this.makeTopicList();
                this.submitHelper();
            }, (err) => { this.renderTopicErrors() })
        } else {
            this.state.topic_id = parseInt(this.state.topics[this.state.topic_name]);
            this.submitHelper();
        }
    }

    submitHelper() {
        let question = Object.assign({}, this.state);
        delete question.topic_name;
        delete question.topics;
        delete question.topic_names_list;
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
        if (question.author_id == currentUser.id) {
            return (
                <div className="crud-buttons">
                    <button className="del-crud-button" onClick={() => this.handleDelete(question)}>Delete</button>
                </div>
            )
        }
    }

    renderTopicErrors() {
        let topic_errors = Object.values(this.props.topic_errors).flat();
        if (topic_errors) {
            return (
                <div className="topic-error">
                    {topic_errors.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}
                </div>
            )
        }
    }

    renderTopicList() {
        if (this.state.topic_names_list.length > 0) {
            return (
                <datalist id="topics">
                    {this.state.topic_names_list.map((x, i) => (
                        <option key={i}>{x}</option>
                    ))}
                </datalist>
            )
        }
    }

    render() {
        if (this.state === null) {
            return null;
        }
        return (
            <div className="show">
                <div className="edit-question">
                    <form className="edit-question-form" onSubmit={this.handleSubmit}>
                        <h1>Edit Question</h1>
                        <input
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                        />
                        <input
                            type="text"
                            placeholder="Topic"
                            value={this.state.topic_name}
                            onChange={this.handleInput('topic_name')}
                            list="topics"
                        />
                        {this.renderTopicList()}
                        <textarea
                            placeholder="Body"
                            value={this.state.body}
                            onChange={this.handleInput('body')}
                        />
                        <button onClick={this.handleSubmit}>Update Question</button>
                        {this.renderErrors()}
                    </form>
                    <div className="show-button-box">
                        <button onClick={() => this.props.history.goBack()} className="back-button"><RiArrowGoBackLine />Go Back</button>
                        {this.crudOptions(this.state)}
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionEditForm;
