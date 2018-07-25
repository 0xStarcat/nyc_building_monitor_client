import React from 'react'
import PropTypes from 'prop-types'

import SwitchSidebarStateButton from '../../SharedComponents/SwitchSidebarStateButton'

import { activateSidebar } from '../../../Store/AppState/actions'

const ControlExpandButton = props => {
  return (
    <SwitchSidebarStateButton action={activateSidebar} className="control-hide-button control-button">
      Expand
    </SwitchSidebarStateButton>
  )
}

ControlExpandButton.propTypes = {}

export default ControlExpandButton
