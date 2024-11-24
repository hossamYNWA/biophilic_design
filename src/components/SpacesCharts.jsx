import { useSelector } from "react-redux";
import DonutChart from "./DonutChart";
const SpacesCharts = () => {
  const spaces = useSelector((store) => store.spaces);
    console.log(spaces)
  const content = spaces.map((space) => (
    <DonutChart
      totalScore={space.score}
      scale="0.8"
      width="200px"
      radius={50}
    />
  ));
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        rowGap: "30px",
        gridTemplateRows: "repeat(2,1fr)",
      }}
    >
      {content}
    </div>
  );
};

export default SpacesCharts;
