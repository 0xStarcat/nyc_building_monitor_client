import React from 'react'
import PropTypes from 'prop-types'

import BoundaryInformation from './BoundaryInformation'
import BuildingInformation from './BuildingInformation'
import ViolationsTable from './ViolationsTable'
import ServiceCallInformation from './ServiceCallInformation'

import {
  SCOPE_NEIGHBORHOODS,
  SCOPE_CENSUS_TRACTS,
  SCOPE_BUILDINGS,
  SCOPE_VIOLATIONS,
  SCOPE_SERVICE_CALLS
} from '../../Store/AppState/actions'

import './style.scss'

class LayerInformationBox extends React.Component {
  constructor(props) {
    super(props)

    this.displayInformationBox = this.displayInformationBox.bind(this)
  }

  onExploreClick(event) {
    this.props.dispatch(readBuildingsByScope(this.props.selectedObject.id))
  }

  displayInformationBox() {
    switch (this.props.appState.sidebarScope) {
      case SCOPE_NEIGHBORHOODS:
        return (
          <BoundaryInformation
            baseLayer={this.props.appState.baseLayer}
            selectedObject={this.props.selectedObject}
            sidebarState={this.props.appState.sidebarState}
          />
        )
      case SCOPE_CENSUS_TRACTS:
        return (
          <BoundaryInformation
            baseLayer={this.props.appState.baseLayer}
            selectedObject={this.props.selectedObject}
            sidebarState={this.props.appState.sidebarState}
          />
        )
      case SCOPE_BUILDINGS:
        return (
          <BuildingInformation
            buildingBaseLayer={this.props.appState.buildingBaseLayer}
            selectedObject={this.props.selectedObject}
            sidebarState={this.props.appState.sidebarState}
          />
        )
      case SCOPE_VIOLATIONS:
        return <ViolationsTable features={this.props.features} building={this.props.parentObject} />
      case SCOPE_SERVICE_CALLS:
        return <ServiceCallInformation selectedObject={this.props.selectedObject} />
    }
  }

  render() {
    return (
      <div className="layerInformationBox">
        <div className="information-box">{this.displayInformationBox()}</div>
      </div>
    )
  }
}

LayerInformationBox.propTypes = {
  dispatch: PropTypes.func,
  selectedObject: PropTypes.object,
  appState: PropTypes.object
}
export default LayerInformationBox
