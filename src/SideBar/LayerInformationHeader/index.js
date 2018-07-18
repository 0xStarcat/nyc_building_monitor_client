import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const LayerInformationHeader = props => {
  return (
    <div className="headerBar">
      <div className="title">
        <h3>{props.selectedLayer.name}</h3>
      </div>
      <div className="headerSubTitle">
        <span>
          <h5>{props.selectedLayer.parentBoundaryName}</h5>
        </span>
        <span>
          <h5>{props.selectedLayer.topParentBoundaryName}</h5>
        </span>
      </div>
    </div>
  )
}

LayerInformationHeader.propTypes = {
  selectedLayer: PropTypes.object
}

export default LayerInformationHeader
