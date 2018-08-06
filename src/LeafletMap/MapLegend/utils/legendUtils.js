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

import LegendGroup from '../LegendGroup'
import LegendInfo from '../LegendInfo'

const incomeLayerData = [
  { value: 110000, label: '> $110,000', color: '#005a32' },
  { value: 90000, label: '> $90,000', color: '#238443' },
  { value: 70000, label: '> $70,000', color: '#41ab5d' },
  { value: 50000, label: '> $50,000', color: '#addd8e' },
  { value: 30000, label: '> $30,000', color: '#d9f0a3' },
  { value: 10000, label: '> $10,000', color: '#ffffcc' },
  { value: 0, label: '> $0', color: '#edf8e9' }
]
const rentLayerData = [
  { value: 2800, label: '> $2800', color: '#005a32' },
  { value: 2400, label: '> $2400', color: '#238b45' },
  { value: 2000, label: '> $2000', color: '#41ab5d' },
  { value: 1600, label: '> $1600', color: '#74c476' },
  { value: 1200, label: '> $1200', color: '#a1d99b' },
  { value: 800, label: '> $800', color: '#c7e9c0' },
  { value: 0, label: '> $0', color: '#edf8e9' },
  { value: null, label: '(no data)', color: 'CORNSILK' }
]
const rentChangeLayerData = [
  { value: 500, label: '> $500', color: '#005a32' },
  { value: 400, label: '> $400', color: '#238b45' },
  { value: 300, label: '> $300', color: '#41ab5d' },
  { value: 200, label: '> $200', color: '#74c476' },
  { value: 0, label: '> $0', color: '#d9f0a3' },
  { value: -100, label: '> $-100', color: '#fc8d59' },
  { value: -100, label: '< $-100', color: '#d73027' },
  { value: null, label: '(no data)', color: 'CORNSILK' }
]
const populationLayerData = [
  { value: 80, label: '> 80%', color: '#fcfbfd' },
  { value: 70, label: '> 70%', color: '#efedf5' },
  { value: 60, label: '> 60%', color: '#dadaeb' },
  { value: 50, label: '> 50%', color: '#bcbddc' },
  { value: 40, label: '> 40%', color: '#9e9ac8' },
  { value: 30, label: '> 30%', color: '#807dba' },
  { value: 20, label: '> 20%', color: '#6a51a3' },
  { value: 10, label: '> 10%', color: '#54278f' },
  { value: 0, label: '> 0%', color: '#3f007d' }
]
const boundaryOpen311LayerData = [
  { value: 12, label: '> 12%', color: '#2b8cbe' },
  { value: 10, label: '> 10%', color: '#4eb3d3' },
  { value: 8, label: '> 8%', color: '#7bccc4' },
  { value: 6, label: '> 6%', color: '#a8ddb5' },
  { value: 4, label: '> 4%', color: '#ccebc5' },
  { value: 2, label: '> 2%', color: '#e0f3db' },
  { value: 0, label: '> 0%', color: '#f7fcf0' }
]
const boundaryAverageResponseLayerData = [
  { value: 90, label: '> 90 days', color: '#2b8cbe' },
  { value: 75, label: '> 75 days', color: '#4eb3d3' },
  { value: 60, label: '> 60 days', color: '#7bccc4' },
  { value: 45, label: '> 45 days', color: '#a8ddb5' },
  { value: 30, label: '> 30 days', color: '#ccebc5' },
  { value: 15, label: '> 15 days', color: '#e0f3db' },
  { value: 0, label: '> 0 days', color: '#f7fcf0' }
]

const buildingClassLayerData = [
  { value: 'D', label: 'Residential', color: '#08519c' },
  { value: 'S', label: 'Mixed Use', color: '#7fcdbb' },
  { value: 'O', label: 'Commercial', color: 'GOLD' },
  { value: 'F', label: 'Industrial', color: 'BROWN' },
  { value: 'W', label: 'Education', color: 'DARKORANGE' },
  { value: 'I', label: 'Healthcare', color: 'PALEVIOLETRED' },
  { value: 'Y', label: 'Public Safety', color: 'CRIMSON' },
  { value: 'V', label: 'Empty Lot', color: '#d9d9d9' }
]
const buildingViolationLayerData = [
  { value: 105, label: '> 105', color: '#67001f' },
  { value: 90, label: '> 90', color: '#980043' },
  { value: 75, label: '> 75', color: '#ce1256' },
  { value: 60, label: '> 60', color: '#e7298a' },
  { value: 45, label: '> 45', color: '#df65b0' },
  { value: 30, label: '> 30', color: '#c994c7' },
  { value: 15, label: '> 15', color: '#d4b9da' },
  { value: 0, label: '> 0', color: '#e7e1ef' },
  { value: 0, label: '= 0', color: '#f7f4f9' }
]
const buildingOpen311LayerData = [
  { value: 20, label: '> 20%', color: '#2b8cbe' },
  { value: 16, label: '> 16%', color: '#4eb3d3' },
  { value: 12, label: '> 12%', color: '#7bccc4' },
  { value: 8, label: '> 8%', color: '#a8ddb5' },
  { value: 4, label: '> 4%', color: '#ccebc5' },
  { value: 0, label: '> 0%', color: '#e0f3db' },
  { value: 0, label: '= 0%', color: '#f7fcf0' }
]
const buildingAverageResponseLayerData = [
  { value: 90, label: '> 90 days', color: '#2b8cbe' },
  { value: 75, label: '> 75 days', color: '#4eb3d3' },
  { value: 60, label: '> 60 days', color: '#7bccc4' },
  { value: 45, label: '> 45 days', color: '#a8ddb5' },
  { value: 30, label: '> 30 days', color: '#ccebc5' },
  { value: 15, label: '> 15 days', color: '#e0f3db' },
  { value: 0, label: '>= 0 days', color: '#f7fcf0' }
]

export const getLegendContent = baseLayer => {
  switch (baseLayer) {
    case BASE_LAYER_BOUNDARY_MEDIAN_INCOME:
      return incomeLayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT:
      return rentLayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE:
      return rentChangeLayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    case BASE_LAYER_BOUNDARY_WHITE_POPULATION:
      return populationLayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    case BASE_LAYER_BOUNDARY_OPEN_311:
      return boundaryOpen311LayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    case BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311:
      return boundaryAverageResponseLayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    case BASE_LAYER_BUILDING_CATEGORIES:
      return buildingClassLayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    case BASE_LAYER_BUILDING_TOTAL_VIOLATIONS:
      return buildingViolationLayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    case BASE_LAYER_BUILDING_OPEN_311:
      return buildingOpen311LayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    case BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311:
      return buildingAverageResponseLayerData.map((group, index) => {
        return <LegendGroup key={`legendGroup-${baseLayer}-${index}`} color={group.color} label={group.label} />
      })
    default:
      return <LegendInfo />
  }
}

export const getLegendTitle = baseLayer => {
  switch (baseLayer) {
    case BASE_LAYER_BOUNDARY_MEDIAN_INCOME:
      return 'Median Income 2017'
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT:
      return 'Median Rent 2017'
    case BASE_LAYER_BOUNDARY_MEDIAN_RENT_CHANGE:
      return 'Rent Change 2010-2017'
    case BASE_LAYER_BOUNDARY_WHITE_POPULATION:
      return '% White Population 2010'
    case BASE_LAYER_BOUNDARY_OPEN_311:
      return '311-calls open over 1 month'
    case BASE_LAYER_BOUNDARY_AVERAGE_RESPONSE_311:
      return '311-Call Response Time'
    case BASE_LAYER_BUILDING_CATEGORIES:
      return 'Building Classes'
    case BASE_LAYER_BUILDING_TOTAL_VIOLATIONS:
      return 'Building Violations'
    case BASE_LAYER_BUILDING_OPEN_311:
      return 'Building 311-calls open over 1 month'
    case BASE_LAYER_BUILDING_AVERAGE_RESPONSE_311:
      return 'Building Average 311 Response Time'
    default:
      return null
  }
}
