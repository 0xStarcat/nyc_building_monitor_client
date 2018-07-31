import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import DispatchActionButton from '../../../SharedComponents/DispatchActionButton'
import { RightArrow } from '../../../SharedStyles/icons'
import { deactivateSidebar, SIDEBAR_STATE_PREVIEW } from '../../../Store/AppState/actions'

const ControlHideButton = props => {
  const disabled = props.sidebarState !== SIDEBAR_STATE_PREVIEW
  return (
    <DispatchActionButton
      action={deactivateSidebar}
      className={classNames('control-hide-button', 'control-button', props.className)}
      disabled={disabled}
    >
      <div
        className={classNames('control-icon-container', 'round', 'button-border-bottom', { 'hidden-svg': disabled })}
      >
        <RightArrow className="svg-rotate-right" />
      </div>
    </DispatchActionButton>
  )
}

ControlHideButton.propTypes = {
  className: PropTypes.string,
  sidebarState: PropTypes.string
}

export default ControlHideButton
