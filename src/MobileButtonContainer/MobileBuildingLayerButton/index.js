import React from 'react'
import PropTypes from 'prop-types'

import ExploreButton from '../../SideBar/SharedComponents/ExploreButton'

const MobileBuildingLayerButton = props => {
  return (
    <div className="mobile-building-layer-button">
      <ExploreButton appState={props.appState} selectedObject={props.selectedObject} />
    </div>
  )
}

MobileBuildingLayerButton.propTypes = {
  appState: PropTypes.object
}

export default MobileBuildingLayerButton
