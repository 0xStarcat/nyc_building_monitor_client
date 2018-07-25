import React from 'react'
import PropTypes from 'prop-types'

import DispatchActionButton from '../../SharedComponents/DispatchActionButton'

import { previewSidebar } from '../../../Store/AppState/actions'

const ControlPreviewButton = props => {
  return (
    <DispatchActionButton action={previewSidebar} className="control-hide-button control-button">
      Collapse
    </DispatchActionButton>
  )
}

ControlPreviewButton.propTypes = {}

export default ControlPreviewButton
