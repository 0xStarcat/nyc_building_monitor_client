import React from 'react'
import PropTypes from 'prop-types'
import { SIDEBAR_SCOPE_CENSUS_TRACTS, SIDEBAR_SCOPE_BUILDINGS } from '../../Store/AppState/actions'
import ControlBackButton from './ControlBackButton'
import ControlNextButton from './ControlNextButton'
import ControlToggleButton from './ControlToggleButton'

import './style.scss'

const ControlBar = props => {
  return (
    <div className="control-bar">
      <ControlBackButton viewSwitch={SIDEBAR_SCOPE_CENSUS_TRACTS} />
      <ControlToggleButton appState={props.appState} dispatch={props.dispatch} />
      <ControlNextButton viewSwitch={SIDEBAR_SCOPE_CENSUS_TRACTS} />
    </div>
  )
}

ControlBar.propTypes = {
  appState: PropTypes.object
}

export default ControlBar
