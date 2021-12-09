import React from 'react';
const { Link } = require("react-router-dom")

const SearchItems = ({question}) => {
    return (
        <Link to={`/questions/${question.id}`} 
            className="sidebar-search-results" 
            >
            <div className="search-item-name">{question.title}</div>
        </Link>
    )
}

export default SearchItems

