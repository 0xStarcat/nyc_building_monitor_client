import React from 'react'
import ViolationCodeInformationContainer from '../ViolationCodeInformationContainer'

export const separateViolations = code => {
  if (code.match(/SECTION/g)) {
    const splitCode = code.split('-')
    const prefix = splitCode[0].trim()
    const codes = splitCode[1].split(',')
    return codes.length > 1 ? codes.filter(code => code).map(code => `${prefix}-${code.trim()}`) : [code.trim()]
  } else {
    return [code]
  }
}

export const getInformationContent = code => {
  switch (code.split('-')[0]) {
    case 'violationCode':
      return <ViolationCodeInformationContainer code={code} />
    default:
      return <div>NoContent</div>
  }
}
