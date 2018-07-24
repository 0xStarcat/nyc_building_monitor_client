import React from 'react'
import PropTypes from 'prop-types'
import SwitchViewButton from '../../SharedComponents/SwitchViewButton'

const ControlNextButton = props => {
  return (
    <SwitchViewButton className="next-button control-button sidebar-button" viewSwitch={props.viewSwitch}>
      Next
    </SwitchViewButton>
  )
}

ControlNextButton.propTypes = {
  viewSwitch: PropTypes.string
}

export default ControlNextButton
