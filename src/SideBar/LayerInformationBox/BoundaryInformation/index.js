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
  BASE_LAYER_MEDIAN_INCOME,
  BASE_LAYER_MEDIAN_RENT,
  BASE_LAYER_MEDIAN_RENT_CHANGE,
  BASE_LAYER_WHITE_POPULATION,
  BASE_LAYER_OPEN_311
} from '../../../Store/AppState/actions'

import IconRow from '../../SharedComponents/IconRow'
import '../SharedStyles/style.scss'

const getPreviewRow = props => {
  switch (props.baseLayer) {
    case BASE_LAYER_MEDIAN_INCOME:
      return <IncomeRow value={props.selectedObject.incomeMedian2017} />
    case BASE_LAYER_MEDIAN_RENT:
      return <RentRow value={props.selectedObject.rentMedian2017} />
    case BASE_LAYER_MEDIAN_RENT_CHANGE:
      return <RentChangeRow value={props.selectedObject.rentChange20112017} />
    case BASE_LAYER_WHITE_POPULATION:
      return <RaceRow value={props.selectedObject.racePercentWhite2010} />
    case BASE_LAYER_OPEN_311:
      return <ServiceCallsOpenRow value={props.selectedObject.serviceCallsPercentOpenOneMonth} />
  }
}

const BoundaryInformation = props => {
  if (!props.selectedObject) return null
  return (
    <div className="boundary-information information-box">
      {props.sidebarState === SIDEBAR_STATE_PREVIEW && <div className="preview-section">{getPreviewRow(props)}</div>}
      <div className="info-section">
        <div className="info-title">
          <h5>Summary</h5>
        </div>
        {!!props.selectedObject.incomeMedian2017 && (
          <IncomeRow className="card info-card" value={props.selectedObject.incomeMedian2017} />
        )}
        {!!props.selectedObject.rentMedian2017 && (
          <RentRow className="card info-card" value={props.selectedObject.rentMedian2017} />
        )}
        {!!props.selectedObject.racePercentWhite2010 && (
          <RaceRow className="card info-card" value={props.selectedObject.racePercentWhite2010} />
        )}
        {!!props.selectedObject.buildingsTotal && (
          <TotalBuildingsRow
            className="card info-card"
            value1={props.selectedObject.buildingsTotal}
            value2={props.selectedObject.residentialBuildingsTotal}
          />
        )}
      </div>
      <div className="info-section">
        <div className="info-title">
          <h5>2010 - Present</h5>
        </div>
        {!!props.selectedObject.rentChange20112017 && (
          <RentChangeRow className="card info-card" value={props.selectedObject.rentChange20112017} />
        )}
        {!!props.selectedObject.violationsTotal && (
          <TotalViolationsRow className="card info-card" value={props.selectedObject.violationsTotal} />
        )}
        {!!props.selectedObject.violationsTotal && (
          <ViolationsPerBuildingRow className="card info-card" value={props.selectedObject.violationsPerBuilding} />
        )}
        {!!props.selectedObject.serviceCallsTotal && (
          <TotalServiceCallsRow className="card info-card" value={props.selectedObject.serviceCallsTotal} />
        )}
        {!!props.selectedObject.serviceCallsTotal && (
          <TimeToResolveCallsRow
            className="card info-card"
            value={props.selectedObject.averageDaysToResolveServiceCalls}
          />
        )}
        {!!props.selectedObject.serviceCallsTotal && (
          <ServiceCallsOpenRow
            className="card info-card"
            value={props.selectedObject.serviceCallsPercentOpenOneMonth}
          />
        )}
      </div>
    </div>
  )
}

BoundaryInformation.propTypes = {
  baseLayer: PropTypes.string,
  sidebarState: PropTypes.string,
  selectedObject: PropTypes.object
}

export default BoundaryInformation
