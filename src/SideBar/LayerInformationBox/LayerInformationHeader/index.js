import React from 'react'
import PropTypes from 'prop-types'

import { SIDEBAR_SCOPE_CENSUS_TRACTS, SIDEBAR_SCOPE_BUILDINGS } from '../../../Store/AppState/actions'
import './style.scss'

const LayerInformationHeader = props => {
  return (
    <div className="headerBar">
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
  sidebarScope: PropTypes.string
}

export default LayerInformationHeader
