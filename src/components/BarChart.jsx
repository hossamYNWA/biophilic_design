import { Chart, ChartBar, ChartVoronoiContainer } from '@patternfly/react-charts/victory';

const BarChart = ({category,data }) => (
  <div style={{ height: '250px', width: '600px' }}>
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Bar chart example"
      containerComponent={
        <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
      }
      domain={{ y: [0, 9] }}
      domainPadding={{ x: [30, 25] }}
      legendData={[{ name: category }]}
      legendOrientation="vertical"
      legendPosition="right"
      height={250}
      name="chart4"
      padding={{
        bottom: 50,
        left: 50,
        right: 200, // Adjusted to accommodate legend
        top: 50
      }}
      width={600}
    >
      <ChartBar
        data={data}
      />
    </Chart>
  </div>
)

export default BarChart