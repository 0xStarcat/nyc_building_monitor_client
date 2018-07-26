import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import { RightArrow } from '../../../SharedStyles/icons'

import { activateSidebar } from '../../../Store/AppState/actions'

const ControlExpandButton = props => {
  return (
    <DispatchActionButton action={activateSidebar} className={`control-hide-button control-button ${props.className}`}>
      <div className="control-icon-container">
        <RightArrow className="svg-rotate-left" />
      </div>
    </DispatchActionButton>
  )
}

ControlExpandButton.propTypes = {}

export default ControlExpandButton
