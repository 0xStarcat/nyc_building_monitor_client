import React from 'react'
import PropTypes from 'prop-types'

import '../SharedStyles/style.scss'

const ViolationInformationTable = props => {
  return (
    <div className="information-box">
      <div className="info-section">
        <div className="info-title">
          <h5>Violations</h5>
        </div>
        {props.features.map(feature => {
          return (
            <div>
              <div className="row-box">
                <label>{feature.properties.source.label}</label>
                <div>{feature.properties.source.value}</div>
              </div>
              <div className="row-box">
                <label>{feature.properties.date.label}</label>
                <div>{feature.properties.date.value}</div>
              </div>
              <div className="row-box">
                <label>{feature.properties.penalty.label}</label>
                <div>{feature.properties.penalty.value}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

ViolationInformationTable.propTypes = {
  features: PropTypes.array
}

export default ViolationInformationTable
