import React from 'react';
import { ChartLegend, ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';

const PieChart = ({categories}) =>{ 
  const dataToDisplay = categories.map(cat => {
    const name = cat.name
    const score = cat.score
    return{x:name,y:score}
  })
  const legData = categories.map(cat => {
    return {name:`${cat.name}: ${cat.score}`}})
  return(<div style={{ height: 'fit-content', width: '300px' }}>
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      constrainToVisibleArea
      data={dataToDisplay}
      height={275}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      name="chart3"
      padding={{
        bottom: 20,
        left: 20,
        right: 20,
        top: 20
      }}
      themeColor={ChartThemeColor.multiOrdered}
      width={300}
    />
    <ChartLegend data={legData} orientation='vertical' gutter={20} themeColor={ChartThemeColor.multiOrdered}/>
  </div>
)}

export default PieChart