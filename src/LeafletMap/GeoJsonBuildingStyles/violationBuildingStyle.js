// http://colorbrewer2.org/#type=diverging&scheme=RdYlGn&n=7
const violationBuildingStyle = feature => {
  if (feature.properties.violationsTotal >= 60) {
    return {
      color: '#91003f',
      fillColor: '#91003f',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 50) {
    return {
      color: '#ce1256',
      fillColor: '#ce1256',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 40) {
    return {
      color: '#e7298a',
      fillColor: '#e7298a',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 30) {
    return {
      color: '#df65b0',
      fillColor: '#df65b0',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 20) {
    return {
      color: '#c994c7',
      fillColor: '#c994c7',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal > 10) {
    return {
      color: '#d4b9da',
      fillColor: '#d4b9da',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal <= 0) {
    return {
      color: '#f1eef6',
      fillColor: '#f1eef6',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else {
    return {
      color: '#f1eef6',
      fillColor: '#f1eef6',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  }
}

export default violationBuildingStyle
