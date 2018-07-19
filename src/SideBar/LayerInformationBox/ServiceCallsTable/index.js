import React from 'react'
import PropTypes from 'prop-types'

import ServiceCallsRow from './ServiceCallsRow'

import '../SharedStyles/style.scss'

const ServiceCallsTable = props => {
  return (
    <div className="service-calls-table">
      <div className="info-section">
        <div className="info-title">
          <h5>ServiceCallss</h5>
        </div>
        {props.features.map(feature => {
          return <ServiceCallsRow feature={feature} />
        })}
      </div>
    </div>
  )
}

ServiceCallsTable.propTypes = {
  features: PropTypes.array
}

export default ServiceCallsTable
