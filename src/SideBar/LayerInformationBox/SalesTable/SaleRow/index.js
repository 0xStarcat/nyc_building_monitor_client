import React from 'react'
import PropTypes from 'prop-types'

const SaleRow = props => {
  return (
    <div className="row-box sale-row">
      <div className="sale-cell">
        <label>{props.feature.properties.date.label}</label>
        <div>{props.feature.properties.date.value}</div>
      </div>
      <div className="sale-cell">
        <label>{props.feature.properties.price.label}</label>
        <div>{props.feature.properties.price.value}</div>
      </div>
    </div>
  )
}

SaleRow.propTypes = {
  feature: PropTypes.object
}

export default SaleRow
