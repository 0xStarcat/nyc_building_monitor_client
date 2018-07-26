import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'
import { RightArrow } from '../../../SharedStyles/icons'

import { previewSidebar } from '../../../Store/AppState/actions'

const ControlPreviewButton = props => {
  return (
    <DispatchActionButton action={previewSidebar} className={`control-hide-button control-button ${props.className}`}>
      <div className="control-icon-container">
        <RightArrow className="svg-rotate-right" />
      </div>
    </DispatchActionButton>
  )
}

ControlPreviewButton.propTypes = {}

export default ControlPreviewButton
