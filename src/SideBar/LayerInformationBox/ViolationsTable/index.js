import React from 'react'
import PropTypes from 'prop-types'

import ViolationRow from './ViolationRow'

import '../SharedStyles/style.scss'

import './style.scss'

const ViolationsTable = props => {
  return (
    <div className="violations-table">
      <div className="headerBar">
        <div className="info-title">
          <h3>Violations for</h3>
          <h5>{props.building.name}</h5>
        </div>
      </div>
      <div className="info-section">
        <div className="table-header">
          <label className="v-col1 table-cell">Date</label>
          <label className="v-col2 table-cell">Code</label>
          <label className="v-col3 table-cell">Description</label>
        </div>
        {props.features
          .sort((a, b) => {
            return b.properties.date - a.properties.date
          })
          .map(feature => {
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
