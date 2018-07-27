export const convertTimestampToData = date => {
  return `${date.substring(4, 6)}/${date.substring(6, 9)}/${date.substring(0, 4)}`
}

export const fillEmptyString = string => {
  return string.trim() || '(none)'
}
