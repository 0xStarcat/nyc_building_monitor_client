const serviceCallsPercentOpenOneMonth = feature => {
  if (!feature.properties.serviceCallsPercentOpenOneMonth || feature.properties.buildingsTotal < 55) {
    return {
      color: 'white',
      fillColor: '#f7fcfd',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 12) {
    return {
      color: 'white',
      fillColor: '#6e016b',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 10) {
    return {
      color: 'white',
      fillColor: '#88419d',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 8) {
    return {
      color: 'white',
      fillColor: '#8c6bb1',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 6) {
    return {
      color: 'white',
      fillColor: '#8c96c6',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 4) {
    return {
      color: 'white',
      fillColor: '#9ebcda',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 2) {
    return {
      color: 'white',
      fillColor: '#bfd3e6',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 0) {
    return {
      color: 'white',
      fillColor: '#f7fcfd',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else {
    return {
      color: 'white',
      fillColor: '#f7fcfd',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  }
}

export default serviceCallsPercentOpenOneMonth
