import React from "react";
import {
  ChartLegend,
  ChartPie,
  ChartThemeColor,
} from "@patternfly/react-charts/victory";

const PieChart = ({ categories }) => {
  // our colorsss

  const colors = [
    "#ff9933", // Yellow
    "#afdc8f", // Light Green
    "#07a379", // Teal
    "#9999ff", // Bright Green
    "#0033cc", // Blue
    "#ce5050", // Red
    "#616060", // Gray
  ];
  const dataToDisplay = categories.map((cat) => {
    const name = cat.name;
    // const score = (cat.score * 100) / totalScore;
    const score = cat.score;
    if (score > 0) {
      return { x: name, y: +score };
    } else {
      return { x: name, y: 0 };
    }
  });
  const total = dataToDisplay.reduce((acc, item) => acc + item.y, 0);
  dataToDisplay.push({ x: "unachieved attributes", y: 100 - total });

    // Update legend data to include colors
    const legData = categories.map((cat, index) => ({
      name: `${cat.name}: ${cat.score}`,
      color: colors[index % colors.length],
    }));

  // const legData = categories.map((cat, index) => {
  //   let score = cat.score;
  //   // if (typeof score === "number" && !isNaN(score)) {
  //   //   score = score.toFixed(2);
  //   // }
  //   return {
  //     name: `${cat.name}: ${score}%`,
  //     color: colors[index % colors.length],
  //   };
  // });

  console.log("total: ", total);
  console.log("dataToDisplay: ", dataToDisplay);
  return (
    <div style={{ height: "fit-content", width: "300px" }}>
      <ChartPie
        ariaDesc="Average number of pets"
        ariaTitle="Pie chart example"
        colorScale={colors}
        constrainToVisibleArea
        data={dataToDisplay}
        height={275}
        labels={({ datum }) => `${datum.x}: ${datum.y.toFixed(2)}%`}
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
        data={[...legData, { name: `unachieved attributes: ${(100 - total).toFixed(2)}%`, color: "#cccccc"  }]}
        orientation="vertical"
        colorScale={colors}
        gutter={20}
        themeColor={ChartThemeColor.multiOrdered}
      />
    </div>
  );
};

export default PieChart;
