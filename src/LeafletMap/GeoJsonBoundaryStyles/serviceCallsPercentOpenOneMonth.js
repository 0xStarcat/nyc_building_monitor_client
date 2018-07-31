const serviceCallsPercentOpenOneMonth = feature => {
  if (!feature.properties.serviceCallsPercentOpenOneMonth || feature.properties.buildingsTotal < 55) {
    return {
      color: 'white',
      fillColor: 'GRAY',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 12) {
    return {
      color: 'white',
      fillColor: '#2b8cbe',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 10) {
    return {
      color: 'white',
      fillColor: '#4eb3d3',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 8) {
    return {
      color: 'white',
      fillColor: '#7bccc4',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 6) {
    return {
      color: 'white',
      fillColor: '#a8ddb5',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 4) {
    return {
      color: 'white',
      fillColor: '#ccebc5',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 2) {
    return {
      color: 'white',
      fillColor: '#e0f3db',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 0) {
    return {
      color: 'white',
      fillColor: '#f7fcf0',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else {
    return {
      color: 'white',
      fillColor: 'GRAY',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  }
}

export default serviceCallsPercentOpenOneMonth
