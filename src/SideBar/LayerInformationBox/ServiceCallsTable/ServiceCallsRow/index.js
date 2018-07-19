import React from 'react'
import PropTypes from 'prop-types'

const ServiceCallRow = props => {
  const resolutionSummary = feature => {
    if (feature.resolutionViolation) return feature.resolutionViolation.label
    if (feature.resolutionNoAction) return feature.resolutionNoAction.label
    if (feature.resolutionUnableToInvestigate) return feature.resolutionUnableToInvestigate.label
    if (feature.status.toLowerCase() === 'open') return feature.status.value
  }
  return (
    <div className="row-box service-call-row">
      <div className="service-call-cell">
        <label>{props.feature.properties.date.label}</label>
        <div>{props.feature.properties.date.value}</div>
      </div>
      <div className="service-call-cell">
        <label>{props.feature.properties.status.label}</label>
        <div>{props.feature.properties.status.value}</div>
      </div>
      <div className="service-call-cell">
        <label>{props.feature.properties.daysToResolve.label}</label>
        <div>{props.feature.properties.daysToResolve.value}</div>
      </div>
      <div className="service-call-cell full-row">
        <div>{resolutionSummary(feature)}</div>
      </div>
    </div>
  )
}

ServiceCallRow.propTypes = {
  feature: PropTypes.object
}

export default ServiceCallRow
