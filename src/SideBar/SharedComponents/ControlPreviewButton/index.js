import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import { RightArrow } from '../../../SharedStyles/icons'

import { previewSidebar, SIDEBAR_STATE_ACTIVE } from '../../../Store/AppState/actions'

const ControlPreviewButton = props => {
  const disabled = props.sidebarState !== SIDEBAR_STATE_ACTIVE

  return (
    <DispatchActionButton
      action={previewSidebar}
      className={`control-hide-button control-button ${props.className}`}
      disabled={disabled}
    >
      <div className={`control-icon-container ${disabled ? 'hidden' : ''}`}>
        <RightArrow className="svg-rotate-right" />
      </div>
    </DispatchActionButton>
  )
}

ControlPreviewButton.propTypes = {
  className: PropTypes.string,
  sidebarState: PropTypes.string
}

export default ControlPreviewButton
