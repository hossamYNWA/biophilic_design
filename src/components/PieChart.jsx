import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts/victory';

const PieChart = () => (
  <div style={{ height: '275px', width: '300px' }}>
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      constrainToVisibleArea
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={275}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendPosition="bottom"
      name="chart3"
      padding={{
        bottom: 65,
        left: 20,
        right: 20,
        top: 20
      }}
      themeColor={ChartThemeColor.multiOrdered}
      width={300}
    />
  </div>
)

export default PieChart