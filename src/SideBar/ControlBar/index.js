import React from 'react'
import PropTypes from 'prop-types'
import { SIDEBAR_SCOPE_CENSUS_TRACTS, SIDEBAR_SCOPE_BUILDINGS } from '../../Store/AppState/actions'
import ControlBackButton from './ControlBackButton'
import ControlToggleButton from './ControlToggleButton'

const ControlBar = props => {
  return (
    <div>
      <ControlBackButton viewSwitch={SIDEBAR_SCOPE_CENSUS_TRACTS} />
      <ControlToggleButton sidebarActive={props.sidebarActive} dispatch={props.dispatch} />
    </div>
  )
}

ControlBar.propTypes = {
  sidebarActive: PropTypes.boolean
}

export default ControlBar
