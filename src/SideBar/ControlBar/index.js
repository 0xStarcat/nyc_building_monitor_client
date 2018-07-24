import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_VIEW_MENU,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../Store/AppState/actions'
import ControlBackButton from './ControlBackButton'
import ControlNextButton from './ControlNextButton'
import ControlToggleButton from './ControlToggleButton'

import './style.scss'

const ControlBar = props => {
  const getBackView = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        return SIDEBAR_VIEW_MENU
      case SCOPE_CENSUS_TRACTS:
        return SIDEBAR_VIEW_MENU
      default:
        return appState.sidebarView
    }
  }

  const getBackScope = () => {
    const appState = props.appState

    switch (appState.sidebarScope) {
      case SCOPE_BUILDINGS:
        return SCOPE_CENSUS_TRACTS
      default:
        return appState.sidebarScope
    }
  }

  return (
    <div className="control-bar">
      <ControlBackButton
        disabled={props.appState.sidebarView === SIDEBAR_VIEW_MENU}
        scopeSwitch={getBackScope()}
        viewSwitch={getBackView()}
      />

      <ControlToggleButton appState={props.appState} dispatch={props.dispatch} />
      <ControlNextButton viewSwitch={SCOPE_CENSUS_TRACTS} />
    </div>
  )
}

ControlBar.propTypes = {
  appState: PropTypes.object
}

export default ControlBar
