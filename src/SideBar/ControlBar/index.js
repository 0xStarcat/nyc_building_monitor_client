import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_BOUNDARY_LAYER_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../Store/AppState/actions'

import LandscapeButtons from './LandscapeButtons'
import MobileButtons from './MobileButtons'

import './style.scss'

const getOrientationRow = props => {
  return props.appState.landscapeOrientation ? (
    <LandscapeButtons appState={props.appState} selectedObjects={props.selectedObjects} />
  ) : (
    <MobileButtons appState={props.appState} />
  )
}
const ControlBar = props => {
  return <div className="control-bar">{getOrientationRow(props)}</div>
}

ControlBar.propTypes = {
  appState: PropTypes.object,
  dispatch: PropTypes.func,
  selectedObjects: PropTypes.object
}

export default ControlBar
