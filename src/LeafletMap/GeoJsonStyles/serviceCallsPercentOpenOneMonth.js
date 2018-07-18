const serviceCallsPercentOpenOneMonth = feature => {
  if (!feature.properties.serviceCallsPercentOpenOneMonth.value || feature.properties.buildingsTotal.value < 55) {
    return {
      color: 'white',
      fillColor: '#ffdba5',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth.value >= 12) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth.value >= 10) {
    return {
      color: 'white',
      fillColor: '#238443',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth.value >= 8) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth.value >= 6) {
    return {
      color: 'white',
      fillColor: '#addd8e',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth.value >= 4) {
    return {
      color: 'white',
      fillColor: '#d9f0a3',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth.value >= 2) {
    return {
      color: 'white',
      fillColor: '#ffffcc',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (feature.properties.serviceCallsPercentOpenOneMonth.value >= 0) {
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
