import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewButton from '../../SharedComponents/SwitchViewButton'

const ControlNextButton = props => {
  return (
    <SwitchViewButton
      className={`next-button control-button button ${props.disabled ? 'disabled-button' : ''}`}
      scopeSwitch={props.scopeSwitch}
      viewSwitch={props.viewSwitch}
    >
      Next
    </SwitchViewButton>
  )
}

ControlNextButton.propTypes = {
  scopeSwitch: PropTypes.string,
  viewSwitch: PropTypes.string
}

export default ControlNextButton
