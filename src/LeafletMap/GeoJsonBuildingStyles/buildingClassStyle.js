const buildingClassStyle = feature => {
  const buildingClass = feature.properties.buildingClass
  const firstChar = buildingClass.charAt(0)
  if (!feature.properties.buildingClass) {
    return {
      color: 'IVORY',
      fillColor: 'd9d9d9',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  }
  if (firstChar === 'A') {
    return {
      color: 'IVORY',
      fillColor: '#9ecae1',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'B') {
    return {
      color: 'IVORY',
      fillColor: '#6baed6',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'C') {
    return {
      color: 'IVORY',
      fillColor: '#4292c6',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'D') {
    return {
      color: 'IVORY',
      fillColor: '#08519c',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'E') {
    return {
      color: 'ch',
      fillColor: 'SADDLEBROWN',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'F') {
    return {
      color: 'sadd',
      fillColor: 'BROWN',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'G') {
    return {
      color: 'IVORY',
      fillColor: 'MAROON',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'H') {
    return {
      color: 'IVORY',
      fillColor: '#ff7f00',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'I') {
    return {
      color: 'IVORY',
      fillColor: 'PALEVIOLETRED',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'J') {
    return {
      color: 'IVORY',
      fillColor: 'AQUAMARINE',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'K') {
    return {
      color: 'IVORY',
      fillColor: 'KHAKI',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'L') {
    return {
      color: 'IVORY',
      fillColor: '#41b6c4',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'M') {
    return {
      color: 'IVORY',
      fillColor: 'PEACHPUFF',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'N') {
    return {
      color: 'IVORY',
      fillColor: 'SALMON',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (buildingClass === 'RB' || firstChar === 'O') {
    return {
      color: 'IVORY',
      fillColor: 'GOLD',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'P') {
    return {
      color: 'IVORY',
      fillColor: '#78c679',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'Q') {
    return {
      color: 'IVORY',
      fillColor: '#238b45',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (
    buildingClass === 'RM' ||
    buildingClass === 'RC' ||
    buildingClass === 'R0' ||
    buildingClass === 'R1' ||
    buildingClass === 'R2' ||
    buildingClass === 'R3' ||
    buildingClass === 'R4' ||
    buildingClass === 'R5' ||
    buildingClass === 'R6' ||
    buildingClass === 'R7' ||
    buildingClass === 'R8' ||
    buildingClass === 'R9' ||
    firstChar === 'S'
  ) {
    return {
      color: 'IVORY',
      fillColor: '#7fcdbb',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'R') {
    return {
      color: 'IVORY',
      fillColor: 'hotpink',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'T') {
    return {
      color: 'IVORY',
      fillColor: '#d9d9d9',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'U') {
    return {
      color: 'IVORY',
      fillColor: '#d9d9d9',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'V') {
    return {
      color: 'IVORY',
      fillColor: '#d9d9d9',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'W') {
    return {
      color: 'IVORY',
      fillColor: 'DARKORANGE',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'Y') {
    return {
      color: 'IVORY',
      fillColor: 'CRIMSON',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else if (firstChar === 'Z') {
    return {
      color: 'IVORY',
      fillColor: '#dd3497',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  } else {
    return {
      color: 'IVORY',
      fillColor: 'd9d9d9',
      opacity: 1,
      fillOpacity: 0.9,
      weight: 1
    }
  }
}

export default buildingClassStyle
