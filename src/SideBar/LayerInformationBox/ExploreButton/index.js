import React from 'react'
import PropTypes from 'prop-types'
import { readBuildingsByCensusTract } from '../../../Store/Buildings/actions'

import {
  SIDEBAR_SCOPE_CENSUS_TRACTS,
  SIDEBAR_SCOPE_NEIGHBORHOODS,
  SIDEBAR_VIEW_SCOPED_OBJECTS
} from '../../../Store/AppState/actions'

import './style.scss'

const ExploreButton = props => {
  const onExploreClick = event => {
    props.dispatch(readBuildingsByCensusTract(props.selectedObject.id))
  }

  const showButton = () => {
    return (
      !!props.selectedObject &&
      props.appState.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS &&
      (props.appState.sidebarScope === SIDEBAR_SCOPE_CENSUS_TRACTS ||
        props.appState.sidebarScope === SIDEBAR_SCOPE_NEIGHBORHOODS)
    )
  }

  if (showButton()) {
    return (
      <button className="explore-button sidebar-button" onClick={onExploreClick}>
        Explore
      </button>
    )
  } else {
    return null
  }
}

ExploreButton.propTypes = {
  appState: PropTypes.object,
  dispatch: PropTypes.func
}

export default ExploreButton