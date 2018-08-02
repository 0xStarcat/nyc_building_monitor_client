import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import { readBuildingById } from '../Store/Buildings/actions'
import { clearSearch } from '../Store/Search/actions'

import './style.scss'

class SearchModule extends React.Component {
  constructor(props) {
    super(props)

    this.selectBuildingResult = this.selectBuildingResult.bind(this)
    this.dispatchSelectedBuildingResult = this.dispatchSelectedBuildingResult.bind(this)
    this.clearSelectedSearch = this.clearSelectedSearch.bind(this)
    this.state = {
      selectedResult: null
    }
  }

  clearSelectedSearch() {
    this.setState({ selectedResult: null })
    this.props.dispatch(clearSearch())
  }

  selectBuildingResult(result) {
    this.setState({ selectedResult: result })
    this.dispatchSelectedBuildingResult(result)
  }

  dispatchSelectedBuildingResult(result = null) {
    const selectedResult = result || this.state.selectedResult || this.props.search.results[0]
    if (!selectedResult) return
    this.setState({ selectedResult: selectedResult })
    this.props.dispatch(readBuildingById(selectedResult.id))
    this.props.setViewCoordinates(selectedResult.representativePoint, 17)
    this.props.dispatch(clearSearch())
  }

  render() {
    return (
      <div className="search-module">
        <SearchBar
          clearSelectedSearch={this.clearSelectedSearch}
          dispatch={this.props.dispatch}
          dispatchSelectedBuildingResult={this.dispatchSelectedBuildingResult}
          searchTimeout={this.props.search.searchTimeout}
          selectBuildingResult={this.selectBuildingResult}
          selectedResult={this.state.selectedResult}
        />
        <SearchResults selectBuildingResult={this.selectBuildingResult} results={this.props.search.results} />
      </div>
    )
  }
}

SearchModule.propTypes = {
  setViewCoordinates: PropTypes.func,
  search: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(SearchModule)
