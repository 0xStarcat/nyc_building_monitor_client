import React from 'react'
import {
  BASE_LAYER_BOUNDARY_MEDIAN_INCOME,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT,
  BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE,
  BASE_LAYER_BOUNDARY_WHITE_POPULATION,
  BASE_LAYER_BOUNDARY_OPEN_311,
  BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311,
  BASE_LAYER_BUILDING_CATEGORIES,
  BASE_LAYER_BUILDING_TOTAL_VIOLATIONS,
  BASE_LAYER_BUILDING_OPEN_311,
  BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311
} from '../../../Store/AppState/actions'
export const getLegendContent = baseLayer => {
  switch (baseLayer) {
    default:
      return (
        <div className="legend-group">
          <label className="scale-label">Tap "Map Details" to load data.</label>
        </div>
      )
  }
}

export const getLegendTitle = baseLayer => {
  switch (baseLayer) {
    case BASE_LAYER_BOUNDARY_MEDIAN_INCOME:
      return 'Income'
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT:
      return 'Rent'
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE:
      return 'Rent Change'
    case BASE_LAYER_BOUNDARY_WHITE_POPULATION:
      return 'Race'
    case BASE_LAYER_BOUNDARY_OPEN_311:
      return 'Open 311-Calls'
    case BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311:
      return 'Response Time'
    case BASE_LAYER_BUILDING_CATEGORIES:
      return 'Building Classes'
    case BASE_LAYER_BUILDING_TOTAL_VIOLATIONS:
      return 'Building Violations'
    case BASE_LAYER_BUILDING_OPEN_311:
      return 'Building Open 311-Calls'
    case BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311:
      return 'Building Average 311 Response Time'
    default:
      return null
  }
}

{
  /*<div className="legend-scale-column">
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">10</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">100</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">10000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">100000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1000000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">10000000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1000</label>
                </div>
                <div className="legend-group">
                  <span className="scale-marker" />
                  <label className="scale-label">1000</label>
                </div>
              </div>
            */
}
