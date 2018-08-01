import { SCOPE_NEIGHBORHOODS, SCOPE_CENSUS_TRACTS, SCOPE_BUILDINGS } from '../Store/AppState/actions'

export const incomeValueClass = value => {
  if (value > 90000) return 'value-5'
  if (value > 70000) return 'value-4'
  if (value > 50000) return 'value-3'
  if (value > 30000) return 'value-2'
  if (value >= 0) return 'value-1'
}

export const rentValueClass = value => {
  if (value > 2400) return 'value-5'
  if (value > 2000) return 'value-4'
  if (value > 1600) return 'value-3'
  if (value > 1200) return 'value-2'
  if (value >= 0) return 'value-1'
}

export const raceValueClass = value => {
  if (value > 80) return 'value-5'
  if (value > 60) return 'value-4'
  if (value > 40) return 'value-3'
  if (value > 20) return 'value-2'
  if (value >= 0) return 'value-1'
}

export const rentChangeValueClass = value => {
  if (value > 500) return 'value-5-diverge'
  if (value > 300) return 'value-4-diverge'
  if (value > 0) return 'value-3-diverge'
  if (value >= -100) return 'value-2-diverge'
  if (value < -100) return 'value-1-diverge'
}

export const violationValueClass = (value, sidebarScope) => {
  let nonZeroMin, factor
  if (sidebarScope === SCOPE_NEIGHBORHOODS) {
    nonZeroMin = 30000
    factor = 30000
  } else if (sidebarScope === SCOPE_CENSUS_TRACTS) {
    nonZeroMin = 500
    factor = 1000
  } else if (sidebarScope === SCOPE_BUILDINGS) {
    nonZeroMin = 15
    factor = 15
  }

  if (value > nonZeroMin + factor * 3) return 'value-5'
  if (value > nonZeroMin + factor * 2) return 'value-4'
  if (value > nonZeroMin + factor * 1) return 'value-3'
  if (value > nonZeroMin + factor * 0) return 'value-2'
  if (value >= 0) return 'value-1'
}

export const violationPerBldgValueClass = value => {
  if (value > 40) return 'value-5'
  if (value > 30) return 'value-4'
  if (value > 20) return 'value-3'
  if (value > 10) return 'value-2'
  if (value >= 0) return 'value-1'
}

export const serviceCallValueClass = (value, sidebarScope) => {
  let nonZeroMin, factor
  if (sidebarScope === SCOPE_NEIGHBORHOODS) {
    nonZeroMin = 20000
    factor = 20000
  } else if (sidebarScope === SCOPE_CENSUS_TRACTS) {
    nonZeroMin = 1000
    factor = 1000
  } else if (sidebarScope === SCOPE_BUILDINGS) {
    nonZeroMin = 10
    factor = 10
  }

  if (value > nonZeroMin + factor * 3) return 'value-5'
  if (value > nonZeroMin + factor * 2) return 'value-4'
  if (value > nonZeroMin + factor * 1) return 'value-3'
  if (value > nonZeroMin + factor * 0) return 'value-2'
  if (value >= 0) return 'value-1'
}

export const responseTimeValueClass = value => {
  if (value > 120) return 'value-5'
  if (value > 90) return 'value-4'
  if (value > 60) return 'value-3'
  if (value > 30) return 'value-2'
  if (value >= 0) return 'value-1'
}

export const open311CallValueClass = value => {
  if (value > 16) return 'value-5'
  if (value > 12) return 'value-4'
  if (value > 8) return 'value-3'
  if (value > 4) return 'value-2'
  if (value >= 0) return 'value-1'
}

export const serviceCallPerBuildingValueClass = value => {
  if (value > 40) return 'value-5'
  if (value > 30) return 'value-4'
  if (value > 20) return 'value-3'
  if (value > 10) return 'value-2'
  if (value >= 0) return 'value-1'
}
