import React from 'react'
import PropTypes from 'prop-types'

import { convertTimestampToData, fillEmptyString } from '../../utils/informationUtils.js'
import { InfoIcon, OpenIcon } from '../../../../SharedStyles/icons'
import './style.scss'

const ViolationRow = props => {
  return (
    <div className="row-box violation-row">
      <div className="table-cell v-col0">
        <div>{props.index + 1}</div>
      </div>
      <div className="table-cell v-col1">
        <div>{convertTimestampToData(props.feature.properties.date)}</div>
      </div>

      <div className="table-cell v-col2">
        <div>{fillEmptyString(props.feature.properties.description)}</div>
        <i>
          <OpenIcon />
        </i>
      </div>
    </div>
  )
}

ViolationRow.propTypes = {
  feature: PropTypes.object,
  index: PropTypes.int
}

export default ViolationRow
