import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            topic_id: '',
            topic_name: '',
            author_id: this.props.author_id,
            topics: {},
            topic_names_list: [],
        };

        this.makeTopicList = this.makeTopicList.bind(this);
        this.renderTopicList = this.renderTopicList.bind(this);
        this.renderTopicErrors = this.renderTopicErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitHelper = this.submitHelper.bind(this);
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
            this.setState({ topic_names_list: Object.keys(flipped).sort() })
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
                    <button className="create-question-button" onClick={this.handleSubmit}>Create Question</button>
                    {this.renderErrors()}
                    {this.renderTopicErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(QuestionForm);
