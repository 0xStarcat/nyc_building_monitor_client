import React from 'react'
import PropTypes from 'prop-types'

import MobileBoundaryLayerButton from './MobileBoundaryLayerButton'
import MobileBuildingLayerButton from './MobileBuildingLayerButton'

import './style.scss'

const MobileButtonContainer = props => {
  return (
    <div className="mobile-button-container">
      <MobileBuildingLayerButton />
      <MobileBoundaryLayerButton />
    </div>
  )
}

MobileButtonContainer.propTypes = {}

export default MobileButtonContainer
