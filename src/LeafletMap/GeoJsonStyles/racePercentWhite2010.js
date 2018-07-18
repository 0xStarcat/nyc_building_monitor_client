// http://colorbrewer2.org/#type=sequential&scheme=Purples&n=7

const racePercentWhite2010 = feature => {
  if (!feature.properties.racePercentWhite2010.value) {
    return {
      color: 'white',
      fillColor: '#ffdba5',
      opacity: 1,
      fillOpacity: 0.3,
      weight: 1
    }
  } else if (feature.properties.racePercentWhite2010.value >= 70) {
    return {
      color: 'white',
      fillColor: '#f2f0f7',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.racePercentWhite2010.value >= 60) {
    return {
      color: 'white',
      fillColor: '#dadaeb',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.racePercentWhite2010.value >= 50) {
    return {
      color: 'white',
      fillColor: '#bcbddc',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.racePercentWhite2010.value >= 40) {
    return {
      color: 'white',
      fillColor: '#9e9ac8',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.racePercentWhite2010.value >= 30) {
    return {
      color: 'white',
      fillColor: '#807dba',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else if (feature.properties.racePercentWhite2010.value >= 20) {
    return {
      color: 'white',
      fillColor: '#6a51a3',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  } else {
    return {
      color: 'white',
      fillColor: '#4a1486',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 1
    }
  }
}

export default racePercentWhite2010
