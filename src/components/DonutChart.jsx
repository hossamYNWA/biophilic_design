import { useState, useEffect } from "react";
import { ChartDonutUtilization } from "@patternfly/react-charts/victory";
const DonutChart = ({ space, totalScore, scale , width, radius}) => {
  const [spacer, setSpacer] = useState("");
  const [used, setUsed] = useState(0);

  useEffect(() => {
    let x = totalScore;
    if (typeof x === "number" && !isNaN(x)) {
      x = x.toFixed(2);
    } else {
      x = 0;
    }
    setSpacer(" ");
    setUsed(parseInt(x));
  }, []);

  return (
    <div style={{transform:`scale(${scale})`, height:'280px', width:{width} }}>
      <ChartDonutUtilization
        ariaDesc="Storage capacity"
        ariaTitle="Donut utilization chart example"
        constrainToVisibleArea
        data={{ x: "Restoration", y: used }}
        labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
        legendData={[
          { name: `Storage capacity: ${spacer}${used}%` },
          { name: space? space: "Unused" },
        ]}
        legendOrientation="vertical"
        legendPosition='bottom'
        name="chart2"
        padding={{
          bottom: 70,
          left: 10,
          right: 10, // Adjusted to accommodate legend
          top: 10,
        }}
        subTitle="of 100%"
        title={`${used}%`}
        radius={radius}
        thresholds={[{ value: 50 }, { value: 80 }]}
        width={435}
      />
    </div>
  );
};
// class DonutChart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       spacer: '',
//       used: 0
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       const { used } = this.state;
//       const val = (used + 10) % 100;
//       this.setState({
//         spacer: val < 10 ? ' ' : '',
//         used: val
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     const { spacer, used } = this.state;
//     return (
//       <div style={{  height: '230px', width: '435px' }}>
//         <ChartDonutUtilization
//           ariaDesc="Storage capacity"
//           ariaTitle="Donut utilization chart example"
//           constrainToVisibleArea
//           data={{ x: 'GBps capacity', y: used }}
//           labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
//           legendData={[{ name: `Storage capacity: ${spacer}${used}%` }, { name: 'Unused' }]}
//           legendOrientation="vertical"
//           name="chart2"
//           padding={{
//             bottom: 20,
//             left: 20,
//             right: 225, // Adjusted to accommodate legend
//             top: 20
//           }}
//           subTitle="of 100 GBps"
//           title={`${used}%`}
//           thresholds={[{ value: 60 }, { value: 90 }]}
//           width={435}
//         />
//       </div>
//     );
//   }
// }

export default DonutChart;
