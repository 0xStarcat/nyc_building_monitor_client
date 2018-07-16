import React from 'react'
import { LinePath } from '@vx/shape'
import { scaleLinear } from '@vx/scale'
import { extent, max, min } from 'd3-array'

const TrendLine = props => {
  const xScale = scaleLinear({
    range: [0, props.xMax],
    domain: extent(props.data, props.x)
  })

  const yScale = scaleLinear({
    range: [props.yMax, 0],
    domain: [Math.min(0, min(props.data, props.y)), max(props.data, props.y)]
  })

  return (
    <LinePath data={props.data} xScale={xScale} yScale={yScale} x={props.x} y={props.y} stroke="red" strokeWidth={1} />
  )
}

export default TrendLine
