const rentMedianLayerStyle = feature => {
  if (!feature.properties.rentMedian2017 || feature.properties.buildingsTotal < 55) {
    return {
      color: 'white',
      fillColor: '#ffdba5',
      opacity: 1,
      fillOpacity: 0.3,
      weight: 2
    }
  } else if (feature.properties.rentMedian2017 >= 2800) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.rentMedian2017 >= 2400) {
    return {
      color: 'white',
      fillColor: '#238b45',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.rentMedian2017 >= 2000) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.rentMedian2017 >= 1600) {
    return {
      color: 'white',
      fillColor: '#74c476',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.rentMedian2017 >= 1200) {
    return {
      color: 'white',
      fillColor: '#a1d99b',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.rentMedian2017 >= 800) {
    return {
      color: 'white',
      fillColor: '#c7e9c0',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  } else {
    return {
      color: 'white',
      fillColor: '#edf8e9',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  }
}

export default rentMedianLayerStyle
