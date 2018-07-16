const hasValue = (feature, xLabel, yLabel) => {
  return !(
    isNaN(feature.properties[xLabel]) ||
    isNaN(feature.properties[yLabel]) ||
    !feature.properties[xLabel] ||
    !feature.properties[yLabel]
  )
}

const meetsThreshold = (feature, xLabel, yLabel, xThresholdPair, yThresholdPair) => {
  let xLow = true
  let xHigh = true
  let yLow = true
  let yHigh = true

  if (xThresholdPair && xThresholdPair[0]) xLow = feature.properties[xLabel] >= xThresholdPair[0]
  if (xThresholdPair && xThresholdPair[1]) xHigh = feature.properties[xLabel] <= xThresholdPair[1]
  if (yThresholdPair && yThresholdPair[0]) yLow = feature.properties[yLabel] <= yThresholdPair[1]
  if (yThresholdPair && yThresholdPair[1]) yHigh = feature.properties[yLabel] <= yThresholdPair[1]

  return xLow && xHigh && yLow && yHigh
}

export const filterNumberData = (features, xLabel, yLabel, xThresholdPair, yThresholdPair) => {
  return features
    .filter(feature => {
      return (
        hasValue(feature, xLabel, yLabel) && meetsThreshold(feature, xLabel, yLabel, xThresholdPair, yThresholdPair)
      )
    })
    .map(feature => {
      return { x: feature.properties[xLabel], y: feature.properties[yLabel], properties: feature.properties }
    })
}
