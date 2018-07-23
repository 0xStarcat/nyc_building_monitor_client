// http://colorbrewer2.org/#type=sequential&scheme=PuRd&n=7
const saleBuildingStyle = feature => {
  if (feature.properties.salesTotal >= 5) {
    return {
      color: '#91003f',
      fillColor: '#91003f',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.salesTotal >= 4) {
    return {
      color: '#ce1256',
      fillColor: '#ce1256',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.salesTotal >= 3) {
    return {
      color: '#e7298a',
      fillColor: '#e7298a',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.salesTotal >= 2) {
    return {
      color: '#df65b0',
      fillColor: '#df65b0',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.salesTotal >= 1) {
    return {
      color: '#c994c7',
      fillColor: '#c994c7',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.salesTotal > 0) {
    return {
      color: '#d4b9da',
      fillColor: '#d4b9da',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (feature.properties.salesTotal <= 0) {
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

export default saleBuildingStyle
