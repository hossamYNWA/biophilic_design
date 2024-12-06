import React from "react";
import {
  ChartLegend,
  ChartPie,
  ChartThemeColor,
} from "@patternfly/react-charts/victory";

const PieChart = ({ categories, totalScore }) => {
  const unach = 100 - totalScore;
  const dataToDisplay = categories.map((cat) => {
    const name = cat.name;
    // const score = (cat.score * 100) / totalScore;
    const score = cat.score;
    if (score > 0) {
      return { x: name, y: score };
    } else {
      return null;
    }
  });
  dataToDisplay.push({ x: "unachieved attributes", y: unach});
  const legData = categories.map((cat) => {
    return { name: `${cat.name}: ${cat.score}%` };
  });

  return (
    <div style={{ height: "fit-content", width: "300px" }}>
      <ChartPie
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        constrainToVisibleArea
        data={dataToDisplay}
        height={275}
        labels={({ datum }) => `${datum.x}: ${datum.y?datum.y.toFixed(2): datum.y}%`}
        name="chart3"
        padding={{
          bottom: 20,
          left: 20,
          right: 20,
          top: 20,
        }}
        themeColor={ChartThemeColor.multiOrdered}
        width={300}
      />
      <ChartLegend
        data={[...legData, { name: `unachieved attributes: ${unach}%` }]}
        orientation="vertical"
        gutter={20}
        themeColor={ChartThemeColor.multiOrdered}
      />
    </div>
  );
};

export default PieChart;
