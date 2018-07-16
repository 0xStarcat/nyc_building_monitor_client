// http://colorbrewer2.org/#type=diverging&scheme=RdYlGn&n=7
const incomeChangeLayerStyle = (value, thresholdValue) => {
  if (!value || thresholdValue < 55) {
    return {
      color: 'white',
      fillColor: '#252525',
      opacity: 1,
      fillOpacity: 0.3,
      weight: 1
    }
  } else if (value >= 40000) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 30000) {
    return {
      color: 'white',
      fillColor: '#238b45',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 20000) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 10000) {
    return {
      color: 'white',
      fillColor: '#74c476',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 0) {
    return {
      color: 'white',
      fillColor: '#d9f0a3',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= -20000) {
    return {
      color: 'white',
      fillColor: '#fc8d59',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value < -20000) {
    return {
      color: 'white',
      fillColor: '#d73027',
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

export default incomeChangeLayerStyle
