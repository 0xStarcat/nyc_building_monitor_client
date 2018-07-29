import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SideBar/SharedComponents/DispatchActionButton'
import IconProfile from '../../SideBar/SharedComponents/IconProfile'

import {
  openScopeMenu,
  openBoundaryLayerMenu,
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPE_MENU,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_INACTIVE
} from '../../Store/AppState/actions'

import { BoundaryLayersIcon, RegionIcon } from '../../SharedStyles/icons'

const getAction = props => {
  switch (props.appState.sidebarView) {
    case SIDEBAR_VIEW_BOUNDARY_LAYER_MENU:
      return openScopeMenu
    case SIDEBAR_VIEW_SCOPE_MENU:
      return openBoundaryLayerMenu
    default:
      return openScopeMenu
  }
}

const MobileBoundaryLayerButton = props => {
  return (
    <DispatchActionButton className="mobile-button bordered" scopeSwitch={null} action={openBoundaryLayerMenu}>
      <IconProfile className="button-row-child small" icon={BoundaryLayersIcon} label="Map Details" />
    </DispatchActionButton>
  )
}

MobileBoundaryLayerButton.propTypes = {
  appState: PropTypes.object,
  selectedObject: PropTypes.object
}

export default MobileBoundaryLayerButton
