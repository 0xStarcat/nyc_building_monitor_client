import React from 'react'
import PropTypes from 'prop-types'
import DispatchActionButton from '../DispatchActionButton'
import { openBuildingLayerMenu } from '../../../Store/AppState/actions'

const BuildingLayersButton = props => {
  return (
    <DispatchActionButton
      className="building-layers-button mobile-button round hover-shadow bordered"
      action={openBuildingLayerMenu}
    >
      B-Layers
    </DispatchActionButton>
  )
}

BuildingLayersButton.propTypes = {
  appState: PropTypes.object
}

export default BuildingLayersButton
