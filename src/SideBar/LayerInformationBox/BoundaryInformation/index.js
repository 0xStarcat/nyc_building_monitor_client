import React from 'react'
import PropTypes from 'prop-types'

import {
  IncomeRow,
  RentRow,
  RaceRow,
  TotalBuildingsRow,
  RentChangeRow,
  TotalViolationsRow,
  ViolationsPerBuildingRow,
  TotalServiceCallsRow,
  TimeToResolveCallsRow,
  ServiceCallsOpenRow
} from './Rows'

import {
  SIDEBAR_STATE_PREVIEW,
  BASE_LAYER_BOUNDARY_BLANK,
  BASE_LAYER_BOUNDARY_MEDIAN_INCOME,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE,
  BASE_LAYER_BOUNDARY_WHITE_POPULATION,
  BASE_LAYER_BOUNDARY_OPEN_311,
  BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311
} from '../../../Store/AppState/actions'

import '../SharedStyles/style.scss'
import './style.scss'

const getPreviewRow = props => {
  switch (props.baseLayer) {
    case BASE_LAYER_BOUNDARY_BLANK:
      return (
        <TotalBuildingsRow
          value1={props.selectedObject.buildingsTotal}
          value2={props.selectedObject.residentialBuildingsTotal}
        />
      )
    case BASE_LAYER_BOUNDARY_MEDIAN_INCOME:
      return <IncomeRow value={props.selectedObject.incomeMedian2017} />
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT:
      return <RentRow value={props.selectedObject.rentMedian2017} />
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE:
      return <RentChangeRow value={props.selectedObject.rentChange20112017} />
    case BASE_LAYER_BOUNDARY_WHITE_POPULATION:
      return <RaceRow value={props.selectedObject.racePercentWhite2010} />
    case BASE_LAYER_BOUNDARY_OPEN_311:
      return <ServiceCallsOpenRow value={props.selectedObject.serviceCallsPercentOpenOneMonth} />
    case BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311:
      return <TimeToResolveCallsRow value={props.selectedObject.averageDaysToResolveServiceCalls} />
  }
}

const BoundaryInformation = props => {
  if (!props.selectedObject) return null
  if (props.sidebarState === SIDEBAR_STATE_PREVIEW) {
    return (
      <article className="boundary-information">
        <div className="preview-section">{getPreviewRow(props)}</div>
      </article>
    )
  } else {
    return (
      <article className="boundary-information scroll-container article-section">
        <section className="info-section menu-section">
          <div className="sub-section-title">
            <h5>Summary</h5>
          </div>
          <IncomeRow className="card info-card" value={props.selectedObject.incomeMedian2017} />
          <RentRow className="card info-card" value={props.selectedObject.rentMedian2017} />
          <RaceRow className="card info-card" value={props.selectedObject.racePercentWhite2010} />
          <TotalBuildingsRow
            className="card info-card"
            value1={props.selectedObject.buildingsTotal}
            value2={props.selectedObject.residentialBuildingsTotal}
          />
        </section>
        <section className="info-section menu-section">
          <div className="sub-section-title">
            <h5>2010 - Present</h5>
          </div>
          <RentChangeRow className="card info-card" value={props.selectedObject.rentChange20112017} />
          <TotalViolationsRow className="card info-card" value={props.selectedObject.violationsTotal} />
          <ViolationsPerBuildingRow className="card info-card" value={props.selectedObject.violationsPerBuilding} />
          <TotalServiceCallsRow className="card info-card" value={props.selectedObject.serviceCallsTotal} />
          <TimeToResolveCallsRow
            className="card info-card"
            value={props.selectedObject.averageDaysToResolveServiceCalls}
          />
          <ServiceCallsOpenRow
            className="card info-card"
            value={props.selectedObject.serviceCallsPercentOpenOneMonth}
          />
        </section>
      </article>
    )
  }
}

BoundaryInformation.propTypes = {
  baseLaye: PropTypes.string,
  sidebarState: PropTypes.string,
  selectedObject: PropTypes.object
}

export default BoundaryInformation
