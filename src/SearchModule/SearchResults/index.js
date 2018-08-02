import React from 'react'
import PropTypes from 'prop-types'
import SearchResultRow from '../SearchResultRow'

import './style.scss'

const SearchResults = props => {
  return (
    <div className="search-results">
      {props.results.map((result, index) => (
        <SearchResultRow selectBuildingResult={props.selectBuildingResult} key={`result-${index}`} result={result} />
      ))}
    </div>
  )
}

SearchResults.propTypes = {
  selectBuildingResult: PropTypes.func,
  results: PropTypes.array
}

export default SearchResults
