import React from 'react'
import PropTypes from 'prop-types'

import { SCOPE_CENSUS_TRACTS, SCOPE_BUILDINGS, SIDEBAR_VIEW_SCOPED_OBJECTS } from '../../Store/AppState/actions'
import './style.scss'

const LayerInformationHeader = props => {
  if (!props.selectedObject || props.sidebarView === SIDEBAR_VIEW_SCOPED_OBJECTS) return null
  return (
    <div className="headerBar">
      <div className="title">
        <h4>
          {props.sidebarScope === SCOPE_CENSUS_TRACTS ? '#' : ''}
          {props.selectedObject.name}
        </h4>
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
  sidebarScope: PropTypes.string,
  sidebarView: PropTypes.string,
  selectedObject: PropTypes.object
}

export default LayerInformationHeader
