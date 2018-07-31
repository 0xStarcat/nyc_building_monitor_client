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
      color: '2b8cbe',
      fillColor: '#2b8cbe',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 75) {
    return {
      color: '4eb3d3',
      fillColor: '#4eb3d3',
      opacity: 0.5,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 60) {
    return {
      color: '7bccc4',
      fillColor: '#7bccc4',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 45) {
    return {
      color: 'a8ddb5',
      fillColor: '#a8ddb5',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 30) {
    return {
      color: 'ccebc5',
      fillColor: '#ccebc5',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 15) {
    return {
      color: 'e0f3db',
      fillColor: '#e0f3db',
      opacity: 1,
      fillOpacity: 0.8,
      weight: 2
    }
  } else if (feature.properties.averageDaysToResolveServiceCalls >= 0) {
    return {
      color: 'f7fcf0',
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
