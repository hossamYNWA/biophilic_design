import MultiColorChart from "./LineChart";
import PieChart from "./PieChart";
import classes from "./Charts.module.css";
import DonutChart from "./DonutChart";
import { useSelector } from "react-redux";
import SpacesCharts from "./SpacesCharts";
import { Link, Outlet } from "react-router-dom";

// function to get the total score of category
function getCatScore(attr, scores) {
  const filteredArray = attr.filter((item) => scores.includes(item.name));
  const result = filteredArray.reduce((acc, attr) => acc + attr.score, 0);
  return result.toFixed(2);
}
const Charts = () => {
  const attributes = useSelector((state) => state.attributes);
  const optimizedAttributes = attributes.filter((attr) => attr.share > 0);
  const categories = [
    {
      name: "Attributes that permit restoration",
      score: getCatScore(attributes, ["b1", "b2", "b3", "b4"]),
    },
    {
      name: "Direct Natural Attributes that promote restoration ",
      score: getCatScore(attributes, ["b5", "b6", "b7", "b8", "b9", "b10"]),
    },
    {
      name: "Indirect Natural Attributes that promote restoration ",
      score: getCatScore(attributes, ["b11", "b12", "b13", "b14"]),
    },
    {
      name: "Space and place attributes that promote restoration",
      score: getCatScore(attributes, [
        "b15",
        "b16",
        "b17",
        "b18",
        "b19",
        "b20",
      ]),
    },
    {
      name: "Functional and physical wellbeing characteristics",
      score: getCatScore(attributes, [
        "fw1",
        "fw2",
        "fw3",
        "fw4",
        "fw5",
        "fw6",
      ]),
    },
    {
      name: "Social wellbeing characteristics",
      score: getCatScore(attributes, [
        "sw1",
        "sw2",
        "sw3",
        "sw4",
        "sw5",
        "sw6",
      ]),
    },
  ];
  // separationg the optimized categories
  const bCategories = optimizedAttributes.filter((attr) => attr.name.startsWith("b"));
  const fsCategories = optimizedAttributes.filter((attr) => attr.name.startsWith("f") || attr.name.startsWith("s"));
  // get total score from categories
  const totalScore = attributes.reduce((acc, attr) => acc + attr.score, 0);

  return (
    <div className={classes.charts}>
      <MultiColorChart attributes={bCategories} title='Biophilic Attributes' />
      <MultiColorChart attributes={fsCategories} title='Functional and Social Attributes' />
      <div className={classes.pies}>
        <DonutChart
          totalScore={totalScore}
          scale="1.4"
          width="430px"
          radius={80}
        />
        <PieChart categories={categories} totalScore={totalScore} />
      </div>
      <SpacesCharts />
      <Link className={classes.acculink} to="occu-charts">
        View occupational charts
      </Link>
      <Link
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: "1000",
          textDecoration: "none",
          borderRadius: "5px",
          backgroundColor: "whitesmoke",
          padding: "10px",
        }}
        className={classes.acculink}
        to="/"
      >
        to Homepage
      </Link>
      {<Outlet />}
    </div>
  );
};

export default Charts;
