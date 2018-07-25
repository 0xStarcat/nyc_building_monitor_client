import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'

import { deactivateSidebar } from '../../../Store/AppState/actions'

const ControlHideButton = props => {
  return (
    <DispatchActionButton action={deactivateSidebar} className="control-hide-button control-button">
      Hide
    </DispatchActionButton>
  )
}

ControlHideButton.propTypes = {}

export default ControlHideButton
