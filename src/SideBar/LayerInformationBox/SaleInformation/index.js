import React from 'react'
import PropTypes from 'prop-types'

import '../SharedStyles/style.scss'

const SaleInformation = props => {
  return (
    <div className="information-box">
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        <div>Sales</div>
      </div>
    </div>
  )
}

SaleInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default SaleInformation
