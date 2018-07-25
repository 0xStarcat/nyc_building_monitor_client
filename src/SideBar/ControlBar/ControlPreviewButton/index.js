import React from 'react'
import PropTypes from 'prop-types'

import SwitchSidebarStateButton from '../../SharedComponents/SwitchSidebarStateButton'

import { previewSidebar } from '../../../Store/AppState/actions'

const ControlPreviewButton = props => {
  return (
    <SwitchSidebarStateButton action={previewSidebar} className="control-hide-button control-button">
      Collapse
    </SwitchSidebarStateButton>
  )
}

ControlPreviewButton.propTypes = {}

export default ControlPreviewButton
