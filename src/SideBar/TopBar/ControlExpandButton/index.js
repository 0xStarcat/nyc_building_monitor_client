import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'

import { activateSidebar } from '../../../Store/AppState/actions'

const ControlExpandButton = props => {
  return (
    <DispatchActionButton action={activateSidebar} className="control-hide-button control-button">
      Expand
    </DispatchActionButton>
  )
}

ControlExpandButton.propTypes = {}

export default ControlExpandButton
