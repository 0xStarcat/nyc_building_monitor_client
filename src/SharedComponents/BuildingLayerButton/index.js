import React from 'react'
import PropTypes from 'prop-types'

import ExploreButton from '../../SideBar/SharedComponents/ExploreButton'
import BuildingLayersButton from '../../SideBar/SharedComponents/BuildingLayersButton'
import DispatchActionButton from '../../SideBar/SharedComponents/DispatchActionButton'

import { BuildingLayerIcon } from '../../SharedStyles/icons'
import IconProfile from '../../SideBar/SharedComponents/IconProfile'

import { SIDEBAR_STATE_INACTIVE, openBuildingLayerMenu } from '../../Store/AppState/actions'

import './style.scss'

const getButton = props => {
  return props.buildingsPresent ? (
    <DispatchActionButton
      className="building-layer-button mobile-button round hover-shadow bordered"
      action={openBuildingLayerMenu}
    >
      <IconProfile className="small" icon={BuildingLayerIcon} label="Building Layers" />
    </DispatchActionButton>
  ) : (
    <ExploreButton appState={props.appState} selectedObject={props.selectedObject} />
  )
}

const BuildingLayerButton = props => {
  if (props.appState.sidebarState === SIDEBAR_STATE_INACTIVE) return null
  return <div className="building-layer-button">{getButton(props)}</div>
}

BuildingLayerButton.propTypes = {
  appState: PropTypes.object,
  buildingsPresent: PropTypes.bool
}

export default BuildingLayerButton
