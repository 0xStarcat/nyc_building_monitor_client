import React from 'react'
import PropTypes from 'prop-types'
import { readBuildingsByScope } from '../../../Store/Buildings/actions'
import DispatchActionButton from '../DispatchActionButton'
import { SCOPE_CENSUS_TRACTS, SCOPE_NEIGHBORHOODS, SIDEBAR_VIEW_SCOPED_OBJECTS } from '../../../Store/AppState/actions'
import IconProfile from '../IconProfile'

import { BuildingExploreIcon } from '../../../SharedStyles/icons'

const ExploreButton = props => {
  const onExploreClick = event => {
    props.setViewCoordinates(props.selectedObject.representativePoint, 16)
    return readBuildingsByScope(props.appState.baseLayerScope, props.selectedObject.id)
  }

  const showButton = () => {
    return (
      !!props.selectedObject &&
      props.appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS &&
      (props.appState.sidebarScope === SCOPE_CENSUS_TRACTS || props.appState.sidebarScope === SCOPE_NEIGHBORHOODS)
    )
  }

  if (showButton()) {
    return (
      <DispatchActionButton
        className="explore-button round hover-shadow bordered mobile-button"
        action={onExploreClick}
      >
        <IconProfile className="small" icon={BuildingExploreIcon} label="Explore Buildings" />
      </DispatchActionButton>
    )
  } else {
    return null
  }
}

ExploreButton.propTypes = {
  appState: PropTypes.object,
  selectedObject: PropTypes.object,
  setViewCoordinates: PropTypes.func
}

export default ExploreButton
