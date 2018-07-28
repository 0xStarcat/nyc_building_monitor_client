import React from 'react'
import PropTypes from 'prop-types'

import ViolationRow from './ViolationRow'

import '../SharedStyles/style.scss'

import './style.scss'

const ViolationsTable = props => {
  return (
    <div className="violations-table">
      <div className="headerBar">
        <h3>Violations for</h3>
        <h5>{props.building.name}</h5>
      </div>
      <div className="info-section">
        <div className="table-header">
          <label className="v-col0 table-cell" />
          <label className="v-col1 table-cell">Date</label>
          <label className="v-col2 table-cell">Id</label>
          <label className="v-col3 table-cell" />
        </div>
        {props.features.map((feature, index) => {
          return (
            <ViolationRow
              key={`${props.building.name}-v-${index}`}
              dispatch={props.dispatch}
              feature={feature}
              index={index}
            />
          )
        })}
      </div>
    </div>
  )
}

ViolationsTable.propTypes = {
  features: PropTypes.array,
  building: PropTypes.object,
  dispatch: PropTypes.func
}

export default ViolationsTable
