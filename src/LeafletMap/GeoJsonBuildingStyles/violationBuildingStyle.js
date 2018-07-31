// http://colorbrewer2.org/#type=sequential&scheme=PuRd&n=7
const violationBuildingStyle = feature => {
  if (feature.properties.violationsTotal >= 105) {
    return {
      color: '#67001f',
      fillColor: '#67001f',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 90) {
    return {
      color: '#980043',
      fillColor: '#980043',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 75) {
    return {
      color: '#ce1256',
      fillColor: '#ce1256',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 60) {
    return {
      color: '#e7298a',
      fillColor: '#e7298a',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 45) {
    return {
      color: '#df65b0',
      fillColor: '#df65b0',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 30) {
    return {
      color: '#c994c7',
      fillColor: '#c994c7',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal >= 15) {
    return {
      color: '#d4b9da',
      fillColor: '#d4b9da',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.violationsTotal > 0) {
    return {
      color: '#e7e1ef',
      fillColor: '#e7e1ef',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else {
    return {
      color: '#f7f4f9',
      fillColor: '#f7f4f9',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  }
}

export default violationBuildingStyle
