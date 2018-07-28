import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import { RightArrow } from '../../../SharedStyles/icons'

import {
  activateSidebar,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_VIEW_SELECTED_OBJECT,
  SIDEBAR_VIEW_SCOPED_OBJECTS
} from '../../../Store/AppState/actions'

const ControlExpandButton = props => {
  const disabled =
    props.sidebarState !== SIDEBAR_STATE_PREVIEW ||
    !(props.sidebarView === SIDEBAR_VIEW_SELECTED_OBJECT || props.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS)

  return (
    <DispatchActionButton
      action={activateSidebar}
      className={`control-hide-button control-button control-expand-button ${props.className}`}
      disabled={disabled}
    >
      <div className={`control-icon-container round button-border-bottom ${disabled ? 'hidden-svg' : ''}`}>
        <RightArrow className="svg-rotate-left" />
      </div>
    </DispatchActionButton>
  )
}

ControlExpandButton.propTypes = {
  className: PropTypes.string,
  sidebarState: PropTypes.string,
  sidebarView: PropTypes.string
}

export default ControlExpandButton
