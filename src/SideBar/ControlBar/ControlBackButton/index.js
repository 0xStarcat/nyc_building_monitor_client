import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewButton from '../../SharedComponents/SwitchViewButton'

const ControlBackButton = props => {
  return (
    <SwitchViewButton className="back-button control-button sidebar-button" viewSwitch={props.viewSwitch}>
      Back
    </SwitchViewButton>
  )
}

ControlBackButton.propTypes = {
  viewSwitch: PropTypes.string
}

export default ControlBackButton
