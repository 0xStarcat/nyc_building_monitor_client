const rentChangeLayerStyle = feature => {
  if (!feature.properties.rentChange20112017 || feature.properties.buildingsTotal < 55) {
    return {
      color: 'white',
      fillColor: '#ffdba5',
      opacity: 1,
      fillOpacity: 0.3,
      weight: 2
    }
  } else if (feature.properties.rentChange20112017 >= 500) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.rentChange20112017 >= 400) {
    return {
      color: 'white',
      fillColor: '#238b45',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.rentChange20112017 >= 300) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.rentChange20112017 >= 200) {
    return {
      color: 'white',
      fillColor: '#74c476',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.rentChange20112017 >= 0) {
    return {
      color: 'white',
      fillColor: '#d9f0a3',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.rentChange20112017 >= -100) {
    return {
      color: 'white',
      fillColor: '#fc8d59',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.rentChange20112017 < -100) {
    return {
      color: 'white',
      fillColor: '#d73027',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else {
    return {
      color: 'white',
      fillColor: 'lightgray',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  }
}

export default rentChangeLayerStyle
