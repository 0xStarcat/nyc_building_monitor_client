import React from 'react'
import PropTypes from 'prop-types'

import SaleRow from './SaleRow'

import '../SharedStyles/style.scss'

const SalesTable = props => {
  return (
    <div className="sales-table">
      <div className="info-section">
        <div className="info-title">
          <h5>Sales</h5>
        </div>
        {props.features.map(feature => {
          return <SaleRow feature={feature} />
        })}
      </div>
    </div>
  )
}

SalesTable.propTypes = {
  features: PropTypes.array
}

export default SalesTable
