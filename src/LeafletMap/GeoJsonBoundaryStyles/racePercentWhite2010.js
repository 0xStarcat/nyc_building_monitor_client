// http://colorbrewer2.org/#type=sequential&scheme=Purples&n=7

const racePercentWhite2010 = feature => {
  if (!feature.properties.racePercentWhite2010) {
    return {
      color: 'white',
      fillColor: 'GRAY',
      opacity: 1,
      fillOpacity: 0.3,
      weight: 2
    }
  } else if (feature.properties.racePercentWhite2010 >= 80) {
    return {
      color: 'white',
      fillColor: '#fcfbfd',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.racePercentWhite2010 >= 70) {
    return {
      color: 'white',
      fillColor: '#efedf5',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.racePercentWhite2010 >= 60) {
    return {
      color: 'white',
      fillColor: '#dadaeb',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.racePercentWhite2010 >= 50) {
    return {
      color: 'white',
      fillColor: '#bcbddc',
      opacity: 0.5,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.racePercentWhite2010 >= 40) {
    return {
      color: 'white',
      fillColor: '#9e9ac8',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.racePercentWhite2010 >= 30) {
    return {
      color: 'white',
      fillColor: '#807dba',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.racePercentWhite2010 >= 20) {
    return {
      color: 'white',
      fillColor: '#6a51a3',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  } else if (feature.properties.racePercentWhite2010 >= 10) {
    return {
      color: 'white',
      fillColor: '#54278f',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  } else {
    return {
      color: 'white',
      fillColor: '#3f007d',
      opacity: 1,
      fillOpacity: 0.7,
      weight: 2
    }
  }
}

export default racePercentWhite2010
