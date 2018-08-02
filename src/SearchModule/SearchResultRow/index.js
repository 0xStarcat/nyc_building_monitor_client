import React from 'react'
import PropTypes from 'prop-types'
import { MapMarkerIcon } from '../../SharedStyles/icons'

import './style.scss'

const SearchResultRow = props => {
  const onClick = () => {
    props.selectBuildingResult(props.result)
  }
  return (
    <div className="search-result-row" onClick={onClick}>
      <i>
        <MapMarkerIcon />
      </i>
      <div>{`${props.result.address}, ${props.result.boroughName}`}</div>
    </div>
  )
}

SearchResultRow.propTypes = {
  selectBuildingResult: PropTypes.func,
  dispatch: PropTypes.func,
  result: PropTypes.object
}

export default SearchResultRow
