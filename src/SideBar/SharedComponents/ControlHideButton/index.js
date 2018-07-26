import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import { RightArrow } from '../../../SharedStyles/icons'
import { deactivateSidebar } from '../../../Store/AppState/actions'

const ControlHideButton = props => {
  return (
    <DispatchActionButton
      action={deactivateSidebar}
      className={`control-hide-button control-button ${props.className}`}
    >
      <div className="control-icon-container">
        <RightArrow className="svg-rotate-right" />
      </div>
    </DispatchActionButton>
  )
}

ControlHideButton.propTypes = {}

export default ControlHideButton
