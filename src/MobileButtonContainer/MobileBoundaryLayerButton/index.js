import React from 'react'
import PropTypes from 'prop-types'

import SwitchViewButton from '../../SideBar/SharedComponents/SwitchViewButton'

import { SIDEBAR_VIEW_MENU } from '../../Store/AppState/actions'

const MobileBoundaryLayerButton = props => {
  return (
    <SwitchViewButton className="mobile-button" scopeSwitch={null} viewSwitch={SIDEBAR_VIEW_MENU}>
      Scope
    </SwitchViewButton>
  )
}

MobileBoundaryLayerButton.propTypes = {}

export default MobileBoundaryLayerButton
