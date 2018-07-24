import React from 'react'
import PropTypes from 'prop-types'

import ExploreButton from './ExploreButton'
import LayerInformationHeader from './LayerInformationHeader'
import BoundaryInformation from './BoundaryInformation'
import BuildingInformation from './BuildingInformation'
import ViolationsTable from './ViolationsTable'
import ServiceCallInformation from './ServiceCallInformation'

import {
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
    this.props.dispatch(readBuildingsByCensusTract(this.props.selectedObject.id))
  }

  displayInformationBox() {
    switch (this.props.appState.sidebarScope) {
      case SCOPE_CENSUS_TRACTS:
        return <BoundaryInformation selectedObject={this.props.selectedObject} />
      case SCOPE_BUILDINGS:
        return <BuildingInformation selectedObject={this.props.selectedObject} />
      case SCOPE_VIOLATIONS:
        return <ViolationsTable features={this.props.features} />
      case SCOPE_SERVICE_CALLS:
        return <ServiceCallInformation selectedObject={this.props.selectedObject} />
    }
  }

  render() {
    return (
      <div className="layerInformationBox">
        <LayerInformationHeader selectedObject={this.props.selectedObject} sidebarScope={this.props.sidebarScope} />
        <ExploreButton
          appState={this.props.appState}
          dispatch={this.props.dispatch}
          selectedObject={this.props.selectedObject}
        />
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
