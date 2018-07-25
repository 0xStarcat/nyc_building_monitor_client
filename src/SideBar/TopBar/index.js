import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../Store/AppState/actions'

import LandscapeTopButtons from './LandscapeTopButtons'
import MobileTopButtons from './MobileTopButtons'

import './style.scss'

const getOrientationRow = props => {
  return props.appState.landscapeOrientation ? (
    <LandscapeTopButtons appState={props.appState} selectedObjects={props.selectedObjects} />
  ) : (
    <MobileTopButtons appState={props.appState} />
  )
}
const TopBar = props => {
  return <div className="control-bar">{getOrientationRow(props)}</div>
}

TopBar.propTypes = {
  appState: PropTypes.object,
  dispatch: PropTypes.func,
  selectedObjects: PropTypes.object
}

export default TopBar
