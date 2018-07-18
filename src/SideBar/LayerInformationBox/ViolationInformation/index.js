import React from 'react'
import PropTypes from 'prop-types'

import '../SharedStyles/style.scss'

const ViolationInformation = props => {
  return (
    <div className="information-box">
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        <div>Violations</div>
      </div>
    </div>
  )
}

ViolationInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default ViolationInformation