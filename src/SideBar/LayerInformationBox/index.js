import React from 'react'
import PropTypes from 'prop-types'

import { readBuildingsByCensusTract } from '../../Store/Buildings/actions'
import './style.scss'

class LayerInformationBox extends React.Component {
  constructor(props) {
    super(props)

    this.onExploreClick = this.onExploreClick.bind(this)
  }

  onExploreClick(event) {
    this.props.dispatch(readBuildingsByCensusTract(this.props.selectedLayer.id))
  }

  render() {
    return (
      <div className="layerInformationBox">
        {this.props.selectedLayer && (
          <div>
            <div className="headerBar">
              <div className="title">
                <h3>{this.props.selectedLayer.name}</h3>
              </div>
              <div className="headerSubTitle">
                <span>
                  <h5>{this.props.selectedLayer.parentBoundaryName}</h5>
                </span>
                <span>
                  <h5>{this.props.selectedLayer.topParentBoundaryName}</h5>
                </span>
              </div>
            </div>
            <button className="sidebar-button" onClick={this.onExploreClick}>
              Explore
            </button>
            <div className="information-box">
              <div className="info-section">
                <div className="title">
                  <h5>Snapshot</h5>
                </div>
                <div className="row-box">
                  <label>Median Income (2017)</label>
                  <div>${this.props.selectedLayer.incomeMedian2017}</div>
                </div>
                <div className="row-box">
                  <label>Median Rent (2017)</label>
                  <div>${this.props.selectedLayer.rentMedian2017}</div>
                </div>
                <div className="row-box">
                  <label>White Population (2010)</label>
                  <div>{this.props.selectedLayer.racePercentWhite2010}%</div>
                </div>
                <div className="row-box">
                  <label>Total Residential Buildings</label>
                  <div>{this.props.selectedLayer.buildingsTotal}</div>
                </div>
              </div>
              <div className="info-section">
                <div className="title">
                  <h5>2010 - Present</h5>
                </div>
                <div className="row-box">
                  <label>Rent Change</label>
                  <div>${this.props.selectedLayer.rentChange20112017}</div>
                </div>
                <div className="row-box">
                  <label>Violation Rate</label>
                  <div>{this.props.selectedLayer.violationsPerBuilding} / bldg</div>
                </div>
                <div className="row-box">
                  <label>Total Violations</label>
                  <div>{this.props.selectedLayer.violationsTotal}</div>
                </div>
                <div className="row-box">
                  <label>Total 311 Calls</label>
                  <div>{this.props.selectedLayer.serviceCallsTotal}</div>
                </div>
                <div className="row-box">
                  <label>311 Calls Open ( > 1 Month)</label>
                  <div>{this.props.selectedLayer.serviceCallsPercentOpenOneMonth}%</div>
                </div>
                <div className="row-box">
                  <label>Total Sales</label>
                  <div>{this.props.selectedLayer.salesTotal}</div>
                </div>
                <div className="row-box">
                  <label>Total Permits</label>
                  <div>{this.props.selectedLayer.permitsTotal}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

LayerInformationBox.propTypes = {
  selectedLayer: PropTypes.object
}
export default LayerInformationBox
