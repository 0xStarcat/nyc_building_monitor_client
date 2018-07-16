import React, { Component } from 'react'
import Layout from '../Layout'
import { filterNumberData } from '../../Charts/utils/filterData'
import ScatterPlot from '../../Charts/ScatterPlot'
import TooltipProvider from '../../Charts/TooltipProvider'

class ChartPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <TooltipProvider>
          {this.props.store.neighborhoods.features.map(neighborhood => {
            return (
              <ScatterPlot
                key={`${neighborhood.properties.name}-plot`}
                data={filterNumberData(
                  this.props.store.censusTracts.features.filter(
                    feature => feature.properties.neighborhood == `${neighborhood.properties.name}`
                  ),
                  'violationsAverageBeforeSalePerBuilding',
                  'churnPercent'
                )}
                title={`${neighborhood.properties.name}`}
                xData="violationsAverageBeforeSalePerBuilding"
                yData="churnPercent"
              />
            )
          })}
        </TooltipProvider>
      </Layout>
    )
  }
}

export default ChartPage
