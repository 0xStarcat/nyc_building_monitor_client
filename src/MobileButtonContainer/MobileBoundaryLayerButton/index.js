import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import IconProfile from '../../SideBar/SharedComponents/IconProfile'

import {
  openBoundaryLayerMenu,
  SIDEBAR_VIEW_MAP_DETAILS_MENU,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_INACTIVE
} from '../../Store/AppState/actions'

import { BoundaryLayersIcon, RegionIcon } from '../../SharedStyles/icons'

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
