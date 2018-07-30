import React from 'react'
import PropTypes from 'prop-types'

import ServiceCallRow from './ServiceCallRow'

import '../SharedStyles/style.scss'

import './style.scss'

const ServiceCallsTable = props => {
  return (
    <div className="service-calls-table sidebar-table">
      <div className="headerBar menu-section">
        <h3>311-Calls for</h3>
        <h5>{props.building.name}</h5>
      </div>
      <div className="table-header">
        <label className="col0 table-cell" />
        <label className="sc-col1 table-cell">Date</label>
        <label className="sc-col2 table-cell">Status</label>
        <label className="sc-col3 table-cell">Violation?</label>
        <label className="sc-col4 table-cell" />
      </div>
      <div className="scroll-container">
        {props.features.map((feature, index) => {
          return (
            <ServiceCallRow
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

ServiceCallsTable.propTypes = {
  features: PropTypes.array,
  building: PropTypes.object,
  dispatch: PropTypes.func
}

export default ServiceCallsTable
