import React from 'react'
import PropTypes from 'prop-types'

import HeaderBackButton from './HeaderBackButton'
import { SIDEBAR_CENSUS_TRACT_INFO, SIDEBAR_BUILDING_INFO } from '../../../Store/AppState/actions'
import './style.scss'

const LayerInformationHeader = props => {
  return (
    <div className="headerBar">
      <HeaderBackButton viewSwitch={SIDEBAR_CENSUS_TRACT_INFO} />
      <div className="title">
        <h3>{props.selectedObject.name}</h3>
      </div>
      <div className="headerSubTitle">
        <span>
          <h5>{props.selectedObject.parentBoundaryName}</h5>
        </span>
        <span>
          <h5>{props.selectedObject.topParentBoundaryName}</h5>
        </span>
      </div>
    </div>
  )
}

LayerInformationHeader.propTypes = {
  selectedObject: PropTypes.object,
  sidebarMode: PropTypes.string
}

export default LayerInformationHeader
