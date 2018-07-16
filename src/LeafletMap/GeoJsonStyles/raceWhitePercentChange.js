// http://colorbrewer2.org/#type=diverging&scheme=RdYlGn&n=7
const raceWhitePercentChange = (value, thresholdValue) => {
  if (!value) {
    return {
      color: 'white',
      fillColor: 'white',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 11) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 9) {
    return {
      color: 'white',
      fillColor: '#238b45',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 7) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= 5) {
    return {
      color: 'white',
      fillColor: '#74c476',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= -1) {
    return {
      color: 'white',
      fillColor: '#d9f0a3',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value >= -5) {
    return {
      color: 'white',
      fillColor: '#fc8d59',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 1
    }
  } else if (value < -5) {
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

export default raceWhitePercentChange
