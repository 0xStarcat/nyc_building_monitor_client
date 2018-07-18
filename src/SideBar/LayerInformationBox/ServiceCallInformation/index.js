import React from 'react'
import PropTypes from 'prop-types'

import '../SharedStyles/style.scss'

const ServiceCallInformation = props => {
  return (
    <div className="information-box">
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        <div>ServiceCalls</div>
      </div>
    </div>
  )
}

ServiceCallInformation.propTypes = {
  selectedObject: PropTypes.object
}

export default ServiceCallInformation
