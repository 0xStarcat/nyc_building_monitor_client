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

const incomeLayerData = [
  { value: 110000, label: '(+)$110,000', color: '#005a32' },
  { value: 90000, label: '(+)$90,000', color: '#238443' },
  { value: 70000, label: '(+)$70,000', color: '#41ab5d' },
  { value: 50000, label: '(+)$50,000', color: '#addd8e' },
  { value: 30000, label: '(+)$30,000', color: '#d9f0a3' },
  { value: 10000, label: '(+)$10,000', color: '#ffffcc' },
  { value: 0, label: '(+)$0', color: '#edf8e9' }
]
const rentLayerData = [
  { value: 2800, label: '(+)$2800', color: '#005a32' },
  { value: 2400, label: '(+)$2400', color: '#238b45' },
  { value: 2000, label: '(+)$2000', color: '#41ab5d' },
  { value: 1600, label: '(+)$1600', color: '#74c476' },
  { value: 1200, label: '(+)$1200', color: '#a1d99b' },
  { value: 800, label: '(+)$800', color: '#c7e9c0' },
  { value: 0, label: '(+)$0', color: '#edf8e9' }
]
const rentChangeLayerData = []
const populationLayerData = []
const boundaryOpen311LayerData = []
const boundaryAverageResponseLayerData = []

const buildingClassLayerData = []
const buildingViolationLayerData = []
const buildingOpen311LayerData = []
const buildingAverageResponseLayerData = []

export const getLegendContent = baseLayer => {
  switch (baseLayer) {
    case BASE_LAYER_BOUNDARY_MEDIAN_INCOME:
      return incomeLayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT:
      return rentLayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE:
      return rentChangeLayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
    case BASE_LAYER_BOUNDARY_WHITE_POPULATION:
      return populationLayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
    case BASE_LAYER_BOUNDARY_OPEN_311:
      return boundaryOpen311LayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
    case BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311:
      return boundaryAverageResponseLayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
    case BASE_LAYER_BUILDING_CATEGORIES:
      return buildingClassLayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
    case BASE_LAYER_BUILDING_TOTAL_VIOLATIONS:
      return buildingViolationLayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
    case BASE_LAYER_BUILDING_OPEN_311:
      return buildingOpen311LayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
    case BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311:
      return buildingAverageResponseLayerData.map((group, index) => {
        return (
          <div key={`legendGroup-${baseLayer}-${index}`} className="legend-group">
            <span className="scale-marker" style={{ backgroundColor: group.color }} />
            <label className="scale-label">{group.label}</label>
          </div>
        )
      })
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
