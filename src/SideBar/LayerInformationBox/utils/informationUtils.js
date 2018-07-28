export const convertTimestampToData = date => {
  return `${date.substring(4, 6)}/${date.substring(6, 9)}/${date.substring(0, 4)}`
}

export const fillEmptyString = string => {
  return string.trim() || '(missing)'
}

export const convertDepartmentToName = string => {
  switch (string.toLowerCase()) {
    case 'hpd':
      return 'Department of Housing Preservation and Development'
    case 'dob':
      return 'Department of Buildings'
    case 'ecb':
      return 'Environmental Control Board'
  }
}
