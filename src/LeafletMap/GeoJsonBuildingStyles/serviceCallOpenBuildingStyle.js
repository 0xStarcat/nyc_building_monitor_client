// http://colorbrewer2.org/#type=sequential&scheme=PuRd&n=7
const serviceCallOpenBuildingStyle = feature => {
  if (feature.properties.serviceCallsPercentOpenOneMonth >= 20) {
    return {
      color: '#2b8cbe',
      fillColor: '#2b8cbe',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 16) {
    return {
      color: '#4eb3d3',
      fillColor: '#4eb3d3',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 12) {
    return {
      color: '#7bccc4',
      fillColor: '#7bccc4',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 8) {
    return {
      color: '#a8ddb5',
      fillColor: '#a8ddb5',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 4) {
    return {
      color: '#ccebc5',
      fillColor: '#ccebc5',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth > 0) {
    return {
      color: '#e0f3db',
      fillColor: '#e0f3db',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth <= 0) {
    return {
      color: '#f7fcf0',
      fillColor: '#f7fcf0',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else {
    return {
      color: '#f7fcfd',
      fillColor: '#f7fcfd',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  }
}

export default serviceCallOpenBuildingStyle
