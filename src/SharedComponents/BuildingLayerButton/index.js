import React from 'react'
import PropTypes from 'prop-types'

import ExploreButton from '../../SideBar/SharedComponents/ExploreButton'
import DispatchActionButton from '../../SideBar/SharedComponents/DispatchActionButton'

import { BuildingLayerIcon } from '../../SharedStyles/icons'
import IconProfile from '../../SideBar/SharedComponents/IconProfile'

import {
  SIDEBAR_STATE_INACTIVE,
  openPortraitBuildingLayerMenu,
  openLandscapeBuildingLayerMenu
} from '../../Store/AppState/actions'

import './style.scss'

const getButton = props => {
  return props.buildingsPresent ? (
    <DispatchActionButton
      className="mobile-button round hover-shadow bordered building-layer-view-button"
      action={props.appState.landscapeOrientation ? openLandscapeBuildingLayerMenu : openPortraitBuildingLayerMenu}
    >
      <IconProfile className="button-row-child small" icon={BuildingLayerIcon} label="Building Layers" />
    </DispatchActionButton>
  ) : (
    <ExploreButton
      appState={props.appState}
      selectedObject={props.selectedObject}
      setViewCoordinates={props.setViewCoordinates}
    />
  )
}

const BuildingLayerButton = props => {
  if (props.appState.sidebarState === SIDEBAR_STATE_INACTIVE) return null
  return <div className="building-layer-button">{getButton(props)}</div>
}

BuildingLayerButton.propTypes = {
  appState: PropTypes.object,
  buildingsPresent: PropTypes.bool,
  setViewCoordinates: PropTypes.func
}

export default BuildingLayerButton
