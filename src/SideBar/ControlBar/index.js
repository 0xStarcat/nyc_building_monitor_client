import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_MENU,
  SIDEBAR_VIEW_SCOPED_OBJECTS,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../Store/AppState/actions'

import LandscapeButtons from './LandscapeButtons'
import './style.scss'

const ControlBar = props => {
  return (
    <div className="control-bar">
      <LandscapeButtons appState={props.appState} selectedObjects={props.selectedObjects} />
    </div>
  )
}

ControlBar.propTypes = {
  appState: PropTypes.object,
  dispatch: PropTypes.func,
  selectedObjects: PropTypes.object
}

export default ControlBar
