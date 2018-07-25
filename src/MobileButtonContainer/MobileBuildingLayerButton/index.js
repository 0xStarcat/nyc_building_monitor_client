import React from 'react'
import PropTypes from 'prop-types'

import ExploreButton from '../../SideBar/SharedComponents/ExploreButton'
import BuildingLayersButton from '../../SideBar/SharedComponents/BuildingLayersButton'
const getButton = props => {
  console.log(props.buildingsPresent)
  return props.buildingsPresent ? (
    <BuildingLayersButton />
  ) : (
    <ExploreButton appState={props.appState} selectedObject={props.selectedObject} />
  )
}

const MobileBuildingLayerButton = props => {
  return <div className="mobile-building-layer-button">{getButton(props)}</div>
}

MobileBuildingLayerButton.propTypes = {
  appState: PropTypes.object,
  buildingsPresent: PropTypes.bool
}

export default MobileBuildingLayerButton
