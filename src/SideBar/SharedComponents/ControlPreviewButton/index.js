import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import DispatchActionButton from '../../../SharedComponents/DispatchActionButton'
import { RightArrow } from '../../../SharedStyles/icons'

import {
  previewSidebar,
  deactivateSidebar,
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_VIEW_LINKS_MENU
} from '../../../Store/AppState/actions'

const ControlPreviewButton = props => {
  const disabled = props.sidebarState !== SIDEBAR_STATE_ACTIVE
  const getAction = () => {
    if (props.sidebarView === SIDEBAR_VIEW_LINKS_MENU) return deactivateSidebar()
    return previewSidebar()
  }
  return (
    <DispatchActionButton
      action={getAction}
      className={classNames('preview-button', 'control-button', props.className)}
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

ControlPreviewButton.propTypes = {
  className: PropTypes.string,
  sidebarState: PropTypes.string,
  sidebarView: PropTypes.string
}

export default ControlPreviewButton
