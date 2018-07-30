// http://colorbrewer2.org/#type=sequential&scheme=GnBu&n=8

const averageDaysToResolveServiceCalls = feature => {
  if (!feature.properties.averageDaysToResolveServiceCalls || feature.properties.serviceCallsTotal < 5) {
    return {
      color: 'white',
      fillColor: 'GRAY',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 90) {
    return {
      color: 'white',
      fillColor: '#2b8cbe',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 75) {
    return {
      color: 'white',
      fillColor: '#4eb3d3',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 60) {
    return {
      color: 'white',
      fillColor: '#7bccc4',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 45) {
    return {
      color: 'white',
      fillColor: '#a8ddb5',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 30) {
    return {
      color: 'white',
      fillColor: '#ccebc5',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 15) {
    return {
      color: 'white',
      fillColor: '#e0f3db',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 0) {
    return {
      color: 'white',
      fillColor: '#f7fcf0',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else {
    return {
      color: 'white',
      fillColor: 'GRAY',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  }
}

export default averageDaysToResolveServiceCalls
