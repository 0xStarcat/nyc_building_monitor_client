import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SideBar/SharedComponents/DispatchActionButton'

import { openScopeMenu, openBoundaryLayerMenu, SIDEBAR_STATE_INACTIVE } from '../../Store/AppState/actions'

const getAction = props => {
  switch (props.appState.sidebarState) {
    case SIDEBAR_STATE_INACTIVE:
      return openScopeMenu
    default:
      return openBoundaryLayerMenu
  }
}

const MobileBoundaryLayerButton = props => {
  return (
    <DispatchActionButton className="mobile-button" scopeSwitch={null} action={getAction(props)}>
      Scope
    </DispatchActionButton>
  )
}

MobileBoundaryLayerButton.propTypes = {
  appState: PropTypes.object,
  selectedObject: PropTypes.object
}

export default MobileBoundaryLayerButton
