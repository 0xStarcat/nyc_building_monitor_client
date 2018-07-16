const serviceCallsTotalLayerStyle = (value, thresholdValue) => {
  if (!value || thresholdValue < 55) {
    return {
      color: 'white',
      fillColor: 'ffdba5',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 600) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 500) {
    return {
      color: 'white',
      fillColor: '#238443',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 400) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 300) {
    return {
      color: 'white',
      fillColor: '#addd8e',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 200) {
    return {
      color: 'white',
      fillColor: '#d9f0a3',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 100) {
    return {
      color: 'white',
      fillColor: '#ffffcc',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 0) {
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

export default serviceCallsTotalLayerStyle
