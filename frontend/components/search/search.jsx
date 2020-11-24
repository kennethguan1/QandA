import React from 'react'
import SearchItems from '../search/search_item'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: ""
        }
        this.redirectSearch = this.redirectSearch.bind(this)    
    }
    
    componentDidMount() {
        this.props.getQuestions();
    }

    update(field) {
        return e => {
            this.setState( {[field]: e.currentTarget.value })
        }
    }

    redirectSearch(e) {
        e.preventDefault();
        setTimeout((() => { 
        if (this.state.searchQuery === "") {
            this.props.history.push("/")
        }  else {
            this.props.history.push(`/search/${this.state.searchQuery}`);
        }
        }), 300)
    }



    // filter method 
    // iterate through the search query
    // if the each word in the search query is found in at least one of the question's attribute
        // split and iterate through search query
        // 
    // add the question into the search filter

    render() {

        let searchTerms = this.state.searchQuery.split(" "); // "hello world" => [hello, world]
        let questions = this.props.questions;
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

        if (this.state.searchQuery === "") filteredQuestions = []

        return (
            
            <div>
                 <form className="search"
                    onSubmit={this.redirectSearch}> 
                        <i className="fas fa-search magnify" />
                        <input type="text" className="searchbox" 
                        value={this.state.searchQuery }
                        placeholder="Type To Search Question"
                        onChange={this.update('searchQuery')}
                    />
                </form>
                {filteredQuestions.slice(0, 5).map(question => 
                    <ul key={question.id} className="search-items-container" onClick={this.submit}><SearchItems question={question} submit={this.submit}/></ul>
                    )
                }
            </div>
        )
    }
}

export default Search