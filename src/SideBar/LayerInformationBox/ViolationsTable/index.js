import React from 'react'
import PropTypes from 'prop-types'

import ViolationRow from './ViolationRow'

import '../SharedStyles/style.scss'

const ViolationsTable = props => {
  return (
    <div className="violations-table">
      <div className="info-section">
        <div className="info-title">
          <h5>Violations for {props.building.name}</h5>
        </div>
        {props.features.map(feature => {
          return <ViolationRow feature={feature} />
        })}
      </div>
    </div>
  )
}

ViolationsTable.propTypes = {
  features: PropTypes.array,
  building: PropTypes.object
}

export default ViolationsTable
