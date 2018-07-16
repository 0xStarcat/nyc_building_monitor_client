import regression from 'regression'
import { pearsonCorrelation } from './pearsonCorrelation'
// Calculate a linear regression from the data

// Takes 5 parameters:
// (1) Your data
// (2) The column of data plotted on your x-axis
// (3) The column of data plotted on your y-axis
// (4) The minimum value of your x-axis
// (5) The minimum value of your y-axis

// Returns an object with two points, where each point is an object with an x and y coordinate

export const calcLinear = (data, x, y, minX, minY) => {
  /////////
  //SLOPE//
  /////////

  // Let n = the number of data points
  const n = data.length

  // Get just the points
  let pts = []
  let ptsArray = []
  data.forEach(function(d, i) {
    let obj = {}
    obj.x = parseFloat(d.x)
    obj.y = parseFloat(d.y)
    obj.mult = parseFloat(obj.x * obj.y)
    pts.push(obj)
    ptsArray.push([obj.x, obj.y])
  })

  const linearRegression = regression.linear(ptsArray, {
    order: 2,
    precision: 10
  })

  const exponentialRegression = regression.polynomial(ptsArray, {
    order: 2,
    precision: 10
  })

  // const isLinear = Math.abs(linearRegression.r2) > Math.abs(exponentialRegression.r2)
  const isLinear = true
  // console.log(isLinear ? null : ptsArray)
  const result = isLinear ? linearRegression : exponentialRegression

  // Let a equal n times the summation of all x-values multiplied by their corresponding y-values
  // Let b equal the sum of all x-values times the sum of all y-values
  // Let c equal n times the sum of all squared x-values
  // Let d equal the squared sum of all x-values
  let sum = 0
  let xSum = 0
  let ySum = 0
  let sumSq = 0
  pts.forEach(pt => {
    sum += pt.mult
    xSum = xSum + pt.x
    ySum = ySum + pt.y
    sumSq = sumSq + pt.x * pt.x
  })
  const a = sum * n
  const b = xSum * ySum
  const c = sumSq * n
  const d = xSum * xSum

  // Plug the values that you calculated for a, b, c, and d into the following equation to calculate the slope
  // slope = m = (a - b) / (c - d)
  const m = result.equation[0] // (a - b) / (c - d)
  /////////////
  //INTERCEPT//
  /////////////

  // Let e equal the sum of all y-values
  const e = ySum
  // Let f equal the slope times the sum of all x-values
  const f = m * xSum

  // Plug the values you have calculated for e and f into the following equation for the y-intercept
  // y-intercept = b = (e - f) / n
  const bIntercept = result.equation[1] // (e - f) / n

  // Print the equation below the chart
  // document.getElementsByClassName('equation')[0].innerHTML = 'y = ' + m + 'x + ' + b
  // document.getElementsByClassName('equation')[1].innerHTML = 'x = ( y - ' + b + ' ) / ' + m

  // return an object of two points
  // each point is an object with an x and y coordinate
  const pearsonData = {
    x: data.map(point => point.x),
    y: data.map(point => point.y)
  }
  // console.log(result, result.r2)
  return {
    type: isLinear ? 'linear' : 'exponential',
    points: [{ x: minX, y: m * minX + bIntercept }, { x: (minY - bIntercept) / m, y: minY }],
    slope: m,
    bIntercept: bIntercept,
    pearsonCorrelation: parseFloat(result.r2.toFixed(2))
  }
}
