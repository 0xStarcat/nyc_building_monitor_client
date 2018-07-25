import React from 'react'
import PropTypes from 'prop-types'

import ExploreButton from '../../SideBar/SharedComponents/ExploreButton'
import BuildingLayersButton from '../../SideBar/SharedComponents/BuildingLayersButton'

import { SIDEBAR_STATE_INACTIVE } from '../../Store/AppState/actions'

const getButton = props => {
  return props.buildingsPresent ? (
    <BuildingLayersButton />
  ) : (
    <ExploreButton appState={props.appState} selectedObject={props.selectedObject} />
  )
}

const MobileBuildingLayerButton = props => {
  if (props.appState.sidebarState === SIDEBAR_STATE_INACTIVE) return null
  return <div className="mobile-building-layer-button">{getButton(props)}</div>
}

MobileBuildingLayerButton.propTypes = {
  appState: PropTypes.object,
  buildingsPresent: PropTypes.bool
}

export default MobileBuildingLayerButton
