import React from 'react'
import PropTypes from 'prop-types'

import { convertTimestampToData, fillEmptyString } from '../../utils/informationUtils.js'

import './style.scss'

const ViolationRow = props => {
  return (
    <div className="row-box violation-row">
      <div className="table-cell v-col1">
        <div>{convertTimestampToData(props.feature.properties.date)}</div>
      </div>
      <div className="table-cell v-col2">
        <div>{fillEmptyString(props.feature.properties.code)}</div>
      </div>
      <div className="table-cell v-col3">
        <div>{fillEmptyString(props.feature.properties.description)}</div>
      </div>
    </div>
  )
}

ViolationRow.propTypes = {
  feature: PropTypes.object
}

export default ViolationRow
