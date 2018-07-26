import React from 'react'
import PropTypes from 'prop-types'

import { SIDEBAR_STATE_INACTIVE, SIDEBAR_STATE_PREVIEW, SIDEBAR_STATE_ACTIVE } from '../../../Store/AppState/actions'

import './style.scss'

const MobileTopButtons = props => {
  return <div className="control-row">{props.children}</div>
}

MobileTopButtons.propTypes = {
  appState: PropTypes.object,
  selectedObjects: PropTypes.object
}

export default MobileTopButtons
