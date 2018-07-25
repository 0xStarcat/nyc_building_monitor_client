import React from 'react'
import PropTypes from 'prop-types'
import DispatchActionButton from '../DispatchActionButton'
import { openBuildingLayerMenu } from '../../../Store/AppState/actions'

const BuildingLayersButton = props => {
  return (
    <DispatchActionButton className="building-layers-button hover-shadow mobile-button" action={openBuildingLayerMenu}>
      B-Layers
    </DispatchActionButton>
  )
}

BuildingLayersButton.propTypes = {
  appState: PropTypes.object
}

export default BuildingLayersButton
