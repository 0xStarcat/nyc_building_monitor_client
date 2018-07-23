import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewButton from '../../SharedComponents/SwitchViewButton'

const ControlBackButton = props => {
  return (
    <SwitchViewButton viewSwitch={props.viewSwitch}>
      <button className="back-button sidebar-button" onClick={this.collapseSidebar}>
        Back
      </button>
    </SwitchViewButton>
  )
}

ControlBackButton.propTypes = {
  viewSwitch: PropTypes.string
}

export default ControlBackButton
