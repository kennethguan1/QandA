import React from 'react'
import QuestionIndexItem from '../question/question_index_item'

class SearchIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0,0)
        this.props.getQuestions()
    }

    render() {

        let searchTerms = this.props.location.pathname.slice(8).split(" ")
        let {questions} = this.props
        let filteredQuestions = [];

        searchTerms = searchTerms.map(term => term.toLowerCase())

        questions.forEach(question => {
            if (searchTerms.every(terms => 
                (question.title.toLowerCase().includes(terms) ||
                question.body.toLowerCase().includes(terms)
                ) 
            ))
            filteredQuestions.push(question)
        })


        return (
            <div className="search-feed">
                <h1 className="search-heading1"> Search Results for "{`${this.props.location.pathname.slice(8)}`}" </h1>
                <h1 className="search-heading2"> {`${filteredQuestions.length}`} Results </h1>
                <ul className="search-item">
                    {filteredQuestions.map(question => 
                    <QuestionIndexItem key={question.id} question={question} /> )}
                </ul>
            </div>
        )
    }
}

export default (SearchIndex)