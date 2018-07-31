import React from 'react'
import PropTypes from 'prop-types'
import {
  SIDEBAR_STATE_INACTIVE,
  SIDEBAR_STATE_PREVIEW,
  SIDEBAR_STATE_ACTIVE,
  SIDEBAR_VIEW_MAP_DETAILS_MENU,
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS
} from '../../Store/AppState/actions'

import ControlRow from '../SharedComponents/ControlRow'
import ControlBackButton from '../SharedComponents/ControlBackButton'
import ControlNextButton from '../SharedComponents/ControlNextButton'
import ControlToggleButton from '../SharedComponents/ControlToggleButton'
import ControlHideButton from '../SharedComponents/ControlHideButton'
import ControlExpandButton from '../SharedComponents/ControlExpandButton'
import ControlPreviewButton from '../SharedComponents/ControlPreviewButton'
import './style.scss'

const getOrientationRow = props => {
  return props.appState.landscapeOrientation ? (
    <ControlRow>
      <ControlBackButton appState={props.appState} className="control-row-child" />
      {props.appState.landscapeOrientation && <ControlToggleButton appState={props.appState} />}
      <ControlNextButton appState={props.appState} className="control-row-child" />
    </ControlRow>
  ) : (
    <ControlRow>
      <ControlBackButton className="control-row-child" />

      {props.appState.sidebarState === SIDEBAR_STATE_PREVIEW && (
        <ControlHideButton className="control-row-child" sidebarState={props.appState.sidebarState} />
      )}
      {(props.appState.sidebarState === SIDEBAR_STATE_ACTIVE ||
        props.appState.sidebarState === SIDEBAR_STATE_INACTIVE) && (
        <ControlPreviewButton
          className="control-row-child"
          sidebarState={props.appState.sidebarState}
          sidebarView={props.appState.sidebarView}
        />
      )}

      <ControlExpandButton
        className="control-row-child"
        sidebarState={props.appState.sidebarState}
        sidebarView={props.appState.sidebarView}
      />

      <ControlNextButton appState={props.appState} className="control-row-child" />
    </ControlRow>
  )
}

const TopBar = props => {
  return <div className="top-bar">{getOrientationRow(props)}</div>
}

TopBar.propTypes = {
  appState: PropTypes.object,
  dispatch: PropTypes.func
}

export default TopBar
