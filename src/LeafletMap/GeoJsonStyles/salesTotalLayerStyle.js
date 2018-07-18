const salesTotalLayerStyle = feature => {
  if (!feature.properties.salesTotal.value || feature.properties.buildingsTotal.value < 55) {
    return {
      color: 'white',
      fillColor: '#ffdba5',
      opacity: 1,
      fillOpacity: 0.3,
      weight: 1
    }
  } else if (feature.properties.salesTotal.value >= 300) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.salesTotal.value >= 250) {
    return {
      color: 'white',
      fillColor: '#238443',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.salesTotal.value >= 200) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.salesTotal.value >= 150) {
    return {
      color: 'white',
      fillColor: '#addd8e',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.salesTotal.value >= 100) {
    return {
      color: 'white',
      fillColor: '#d9f0a3',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.salesTotal.value >= 50) {
    return {
      color: 'white',
      fillColor: '#ffffcc',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else {
    return {
      color: 'white',
      fillColor: '#edf8e9',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  }
}

export default salesTotalLayerStyle
