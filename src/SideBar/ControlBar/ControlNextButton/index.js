import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewButton from '../../SharedComponents/SwitchViewButton'

const ControlNextButton = props => {
  console.log(props)
  return (
    <SwitchViewButton
      className={`next-button control-button button ${props.disabled ? 'disabled-button' : ''}`}
      scopeSwitch={props.scopeSwitch}
      viewSwitch={props.viewSwitch}
    >
      {props.disabled ? '' : 'Next'}
    </SwitchViewButton>
  )
}

ControlNextButton.propTypes = {
  disabled: PropTypes.bool,
  scopeSwitch: PropTypes.string,
  viewSwitch: PropTypes.string
}

export default ControlNextButton
