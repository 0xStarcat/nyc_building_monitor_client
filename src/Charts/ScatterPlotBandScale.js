import React from 'react'
import { AxisLeft, AxisBottom } from '@vx/axis'
import { LinearGradient } from '@vx/gradient'
import { Group } from '@vx/group'
import { appleStock } from '@vx/mock-data'
import { GlyphCircle } from '@vx/glyph'
import { scaleLinear, scaleBand } from '@vx/scale'
import { withTooltip, Tooltip } from '@vx/tooltip'
import { LinePath } from '@vx/shape'
import { curveMonotoneX } from '@vx/curve'

import { calcLinear } from './utils/statisticalAnalysis'
import TrendLine from './TrendLine'

import { extent, max, min } from 'd3-array'

const ScatterPlotBandScale = props => {
  let tooltipTimeout

  const hasValue = feature => {
    return !(
      isNaN(feature.properties[props.xData]) ||
      feature.properties[props.xData] == 0 ||
      isNaN(feature.properties[props.yData]) ||
      feature.properties[props.yData] == 0
    )
  }

  const meetsThreshold = feature => {
    let xLow = true
    let xHigh = true
    let yLow = true
    let yHigh = true

    if (props.xThreshold && props.xThreshold[0]) xLow = feature.properties[props.xData] >= props.xThreshold[0]
    if (props.xThreshold && props.xThreshold[1]) xHigh = feature.properties[props.xData] <= props.xThreshold[1]
    if (props.yThreshold && props.yThreshold[0]) yLow = feature.properties[props.yData] <= props.yThreshold[1]
    if (props.yThreshold && props.yThreshold[1]) yLow = feature.properties[props.yData] <= props.yThreshold[1]

    return xLow && xHigh && yLow && yHigh
  }

  const data = props.store.censusTracts.features.filter(feature => {
    return meetsThreshold(feature)
  })

  const width = 1000
  const height = 400
  const margin = {
    top: 60,
    bottom: 60,
    left: 280,
    right: 80
  }
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  const x = d => {
    if (!d.properties) return
    return d.properties[props.xData]
  }

  const y = d => {
    if (!d.properties) return
    return d.properties[props.yData]
  }

  const xBandScale = scaleBand({
    rangeRound: [0, xMax],
    domain: data.map(x),
    padding: 0.2
  })

  const xScale = scaleLinear({
    range: [0, xMax],
    domain: extent(data, x)
  })

  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, max(data, y)]
  })

  const regressionCalculation = calcLinear(data, props.xData, props.yData, min(data, x), min(data, y))
  return (
    <div>
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          <AxisLeft scale={yScale} top={0} left={0} label={props.yData} stroke={'#1b1a1e'} tickTextFill={'#1b1a1e'} />
          <AxisBottom scale={xBandScale} top={yMax} label={props.xData} stroke={'#1b1a1e'} tickTextFill={'#1b1a1e'} />
          {regressionCalculation[0].properties[props.xData] && (
            <TrendLine data={regressionCalculation} xMax={xMax} yMax={yMax} x={x} y={y} stroke="red" strokeWidth={1} />
          )}
          {data.map((point, i) => {
            return (
              <GlyphCircle
                className="dot"
                key={`point-${point.properties.name}-${i}`}
                fill={'#f6c431'}
                left={xBandScale(x(point))}
                top={yScale(y(point))}
                size={20}
                onMouseEnter={() => event => {
                  if (tooltipTimeout) clearTimeout(tooltipTimeout)
                  const rect = event.target.getBoundingClientRect()
                  props.showTooltip({
                    tooltipLeft: rect.left + window.pageXOffset - 100,
                    tooltipTop: rect.top + window.pageYOffset + 50,
                    tooltipData: point
                  })
                }}
                onMouseLeave={() => event => {
                  tooltipTimeout = setTimeout(() => {
                    props.hideTooltip()
                  }, 300)
                }}
              />
            )
          })}
        </Group>
      </svg>
      {props.tooltip.tooltipOpen && (
        <Tooltip left={props.tooltip.tooltipLeft} top={props.tooltip.tooltipTop}>
          <div>
            <strong>Census Tract:</strong> {props.tooltip.tooltipData.properties.name}
          </div>
          <div>
            <strong>Neighborhood:</strong> {props.tooltip.tooltipData.properties.neighborhood}
          </div>
          <div>
            <strong>{props.xData}:</strong> {props.tooltip.tooltipData.properties[props.xData]}
          </div>
          <div>
            <strong>{props.yData}:</strong> {props.tooltip.tooltipData.properties[props.yData]}
          </div>
        </Tooltip>
      )}
    </div>
  )
}

export default ScatterPlotBandScale
