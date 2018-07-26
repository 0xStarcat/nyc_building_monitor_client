import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import { RightArrow } from '../../../SharedStyles/icons'

import { activateSidebar, SIDEBAR_STATE_PREVIEW } from '../../../Store/AppState/actions'

const ControlExpandButton = props => {
  const disabled = props.sidebarState !== SIDEBAR_STATE_PREVIEW

  return (
    <DispatchActionButton
      action={activateSidebar}
      className={`control-hide-button control-button ${props.className}`}
      disabled={disabled}
    >
      <div className={`control-icon-container ${disabled ? 'hidden' : ''}`}>
        <RightArrow className="svg-rotate-left" />
      </div>
    </DispatchActionButton>
  )
}

ControlExpandButton.propTypes = {
  className: PropTypes.string,
  sidebarState: PropTypes.string
}

export default ControlExpandButton
