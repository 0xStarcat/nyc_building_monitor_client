// http://colorbrewer2.org/#type=sequential&scheme=Greens&n=7
const incomeMedianLayerStyle = feature => {
  if (!feature.properties.incomeMedian2017.value || feature.properties.buildingsTotal.value < 55) {
    return {
      color: 'white',
      fillColor: '#252525',
      opacity: 1,
      fillOpacity: 0.3,
      weight: 1
    }
  } else if (feature.properties.incomeMedian2017.value >= 110000) {
    return {
      color: 'white',
      fillColor: '#005a32',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.incomeMedian2017.value >= 90000) {
    return {
      color: 'white',
      fillColor: '#238443',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.incomeMedian2017.value >= 70000) {
    return {
      color: 'white',
      fillColor: '#41ab5d',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.incomeMedian2017.value >= 50000) {
    return {
      color: 'white',
      fillColor: '#addd8e',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.incomeMedian2017.value >= 30000) {
    return {
      color: 'white',
      fillColor: '#d9f0a3',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.incomeMedian2017.value >= 10000) {
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

export default incomeMedianLayerStyle
