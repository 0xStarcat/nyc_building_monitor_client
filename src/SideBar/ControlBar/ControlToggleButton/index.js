import React from 'react'
import PropTypes from 'prop-types'
import { deactivateSideBar } from '../../../Store/AppState/actions'

const ControlToggleButton = props => {
  const collapseSidebar = () => {
    props.dispatch(deactivateSideBar())
  }

  return (
    <button className="collapse-button sidebar-button" onClick={collapseSidebar}>
      X collapse
    </button>
  )
}

ControlToggleButton.propTypes = {}

export default ControlToggleButton
