import React from 'react'
import PropTypes from 'prop-types'

import SwitchSidebarStateButton from '../../SharedComponents/SwitchSidebarStateButton'

import { deactivateSidebar } from '../../../Store/AppState/actions'

const ControlHideButton = props => {
  return (
    <SwitchSidebarStateButton action={deactivateSidebar} className="control-hide-button control-button">
      Hide
    </SwitchSidebarStateButton>
  )
}

ControlHideButton.propTypes = {}

export default ControlHideButton
