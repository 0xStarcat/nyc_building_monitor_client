// http://colorbrewer2.org/#type=sequential&scheme=PuRd&n=7
const serviceCallOpenBuildingStyle = feature => {
  if (feature.properties.serviceCallsPercentOpenOneMonth >= 20) {
    return {
      color: '#6e016b',
      fillColor: '#6e016b',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 16) {
    return {
      color: '#88419d',
      fillColor: '#88419d',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 12) {
    return {
      color: '#8c6bb1',
      fillColor: '#8c6bb1',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 8) {
    return {
      color: '#8c96c6',
      fillColor: '#8c96c6',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 4) {
    return {
      color: '#9ebcda',
      fillColor: '#9ebcda',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth > 0) {
    return {
      color: '#bfd3e6',
      fillColor: '#bfd3e6',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth <= 0) {
    return {
      color: '#f7fcfd',
      fillColor: '#f7fcfd',
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
