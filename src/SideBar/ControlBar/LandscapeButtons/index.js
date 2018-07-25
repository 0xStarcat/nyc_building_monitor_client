import React from 'react'
import PropTypes from 'prop-types'

import ControlBackButton from '../ControlBackButton'
import ControlNextButton from '../ControlNextButton'
import ControlToggleButton from '../ControlToggleButton'

const LandscapeButtons = props => {
  return (
    <div className="landscape-buttons button-row">
      <ControlBackButton appState={props.appState} />
      <ControlNextButton appState={props.appState} selectedObjects={props.selectedObjects} />
      <ControlToggleButton appState={props.appState} dispatch={props.dispatch} />
    </div>
  )
}

LandscapeButtons.propTypes = {
  appState: PropTypes.object,
  dispatch: PropTypes.func,
  selectedObjects: PropTypes.object
}

export default LandscapeButtons
