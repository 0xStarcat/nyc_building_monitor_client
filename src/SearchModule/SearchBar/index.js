import React from 'react'
import PropTypes from 'prop-types'
import { setSearchTimeout, queryBuildingAddress } from '../../Store/Search/actions'
import './style.scss'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
      autoCompleteValue: 'asdf'
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.dispatchQuery = this.dispatchQuery.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedResult) {
      this.setState({
        searchValue: `${nextProps.selectedResult.address}, ${nextProps.selectedResult.boroughName}`
      })
    }
  }

  onFormSubmit(e) {
    e.preventDefault()
    this.props.dispatchSelectedBuildingResult()
  }

  dispatchQuery(value) {
    this.props.dispatch(queryBuildingAddress(value))
  }

  onInputChange(event) {
    this.props.clearSelectedSearch()

    this.setState({ searchValue: event.target.value })
    clearTimeout(this.props.searchTimeout)
    this.props.dispatch(setSearchTimeout(setTimeout(this.dispatchQuery, 250, event.target.value)))
  }

  render() {
    return (
      <div className="search-bar">
        <form autoComplete="off" className="search-form" onSubmit={this.onFormSubmit}>
          <input
            placeholder="123 type address to search"
            type="text"
            onChange={this.onInputChange}
            value={this.state.searchValue}
          />
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func,
  searchTimeout: PropTypes.number,
  selectBuildingResult: PropTypes.func,
  selectedResult: PropTypes.object
}
