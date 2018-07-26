const buildingClassStyle = feature => {
  const buildingClass = feature.properties.buildingClass
  const firstChar = buildingClass.charAt(0)
  if (!feature.properties.buildingClass) {
    return {
      color: 'd9d9d9',
      fillColor: 'd9d9d9',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  }
  if (firstChar === 'A') {
    return {
      color: '#9ecae1',
      fillColor: '#9ecae1',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'B') {
    return {
      color: '#6baed6',
      fillColor: '#6baed6',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'C') {
    return {
      color: '#4292c6',
      fillColor: '#4292c6',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'D') {
    return {
      color: '#08519c',
      fillColor: '#08519c',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'E') {
    return {
      color: 'chocolate',
      fillColor: 'chocolate',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'F') {
    return {
      color: 'saddlebrown',
      fillColor: 'saddlebrown',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'G') {
    return {
      color: 'brown',
      fillColor: 'brown',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'H') {
    return {
      color: '#ff7f00',
      fillColor: '#ff7f00',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'I') {
    return {
      color: '#a65628',
      fillColor: '#a65628',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'J') {
    return {
      color: '#984ea3',
      fillColor: '#984ea3',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'K') {
    return {
      color: '#fff7bc',
      fillColor: '#fff7bc',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'L') {
    return {
      color: '#41b6c4',
      fillColor: '#41b6c4',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'M') {
    return {
      color: '#ffeda0',
      fillColor: '#ffeda0',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'N') {
    return {
      color: '#fc4e2a',
      fillColor: '#fc4e2a',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'O') {
    return {
      color: '#ffffb3',
      fillColor: '#ffffb3',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'P') {
    return {
      color: '#78c679',
      fillColor: '#78c679',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'Q') {
    return {
      color: '#238b45',
      fillColor: '#238b45',
      opacity: 1,
      fillOpacity: 0.5,
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
      color: '#7fcdbb',
      fillColor: '#7fcdbb',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'R') {
    return {
      color: 'hotpink',
      fillColor: 'hotpink',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'T') {
    return {
      color: '#d9d9d9',
      fillColor: '#d9d9d9',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'U') {
    return {
      color: '#d9d9d9',
      fillColor: '#d9d9d9',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'V') {
    return {
      color: '#d9d9d9',
      fillColor: '#d9d9d9',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'W') {
    return {
      color: '#dd3497',
      fillColor: '#dd3497',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'Y') {
    return {
      color: '#dd3497',
      fillColor: '#dd3497',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else if (firstChar === 'Z') {
    return {
      color: '#dd3497',
      fillColor: '#dd3497',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  } else {
    return {
      color: 'd9d9d9',
      fillColor: 'd9d9d9',
      opacity: 1,
      fillOpacity: 0.5,
      weight: 1
    }
  }
}

export default buildingClassStyle
