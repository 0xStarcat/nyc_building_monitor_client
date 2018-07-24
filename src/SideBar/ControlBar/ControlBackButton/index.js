import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewButton from '../../SharedComponents/SwitchViewButton'

const ControlBackButton = props => {
  return (
    <SwitchViewButton
      className={`back-button control-button button ${props.disabled ? 'disabled-button' : ''}`}
      disabled={props.disabled}
      scopeSwitch={props.scopeSwitch}
      viewSwitch={props.viewSwitch}
    >
      {props.disabled ? '' : 'Back'}
    </SwitchViewButton>
  )
}

ControlBackButton.propTypes = {
  disabled: PropTypes.bool,
  scopeSwitch: PropTypes.string,
  viewSwitch: PropTypes.string
}

export default ControlBackButton
