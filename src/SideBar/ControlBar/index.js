import React from 'react'
import PropTypes from 'prop-types'
import { SIDEBAR_CENSUS_TRACT_INFO, SIDEBAR_BUILDING_INFO } from '../../Store/AppState/actions'
import ControlBackButton from './ControlBackButton'
import ControlToggleButton from './ControlToggleButton'

const ControlBar = props => {
  return (
    <div>
      <ControlBackButton viewSwitch={SIDEBAR_CENSUS_TRACT_INFO} />
      <ControlToggleButton dispatch={props.dispatch} />
    </div>
  )
}

ControlBar.propTypes = {}

export default ControlBar
