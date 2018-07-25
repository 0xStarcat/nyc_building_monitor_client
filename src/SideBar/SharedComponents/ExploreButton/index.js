import React from 'react'
import PropTypes from 'prop-types'
import { readBuildingsByScope } from '../../../Store/Buildings/actions'
import DispatchActionButton from '../DispatchActionButton'
import { SCOPE_CENSUS_TRACTS, SCOPE_NEIGHBORHOODS, SIDEBAR_VIEW_SCOPED_OBJECTS } from '../../../Store/AppState/actions'

import './style.scss'

const ExploreButton = props => {
  const onExploreClick = event => {
    return readBuildingsByScope(props.appState.baseLayerScope, props.selectedObject.id)
  }

  const showButton = () => {
    return (
      !!props.selectedObject &&
      props.appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS &&
      (props.appState.sidebarScope === SCOPE_CENSUS_TRACTS || props.appState.sidebarScope === SCOPE_NEIGHBORHOODS)
    )
  }
  console.log(!!props.selectedObject, props.appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS)
  if (showButton()) {
    return (
      <DispatchActionButton className="explore-button hover-shadow mobile-button" action={onExploreClick}>
        Explore
      </DispatchActionButton>
    )
  } else {
    return null
  }
}

ExploreButton.propTypes = {
  appState: PropTypes.object
}

export default ExploreButton
