const serviceCallsPercentOpenOneMonth = feature => {
  if (!feature.properties.serviceCallsPercentOpenOneMonth || feature.properties.totalBuildings < 55) {
    return {
      color: 'white',
      fillColor: '#ffdba5',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 12) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 10) {
    return {
      color: 'white',
      fillColor: '#238443',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 8) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 6) {
    return {
      color: 'white',
      fillColor: '#addd8e',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 4) {
    return {
      color: 'white',
      fillColor: '#d9f0a3',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 2) {
    return {
      color: 'white',
      fillColor: '#ffffcc',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth >= 0) {
    return {
      color: 'white',
      fillColor: '#edf8e9',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else {
    return {
      color: 'white',
      fillColor: 'lightgray',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  }
}

export default serviceCallsPercentOpenOneMonth
