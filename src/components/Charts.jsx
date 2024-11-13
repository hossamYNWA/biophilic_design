import MultiColorChart from "./LineChart";
import PieChart from "./PieChart";
import classes from "./Charts.module.css";
import { useSelector } from "react-redux";

// function to get the total score of category
function getCatScore(attr, scores) {
  const filteredArray = attr.filter((item) => scores.includes(item.name));
  const result = filteredArray.reduce((acc, attr) => acc + attr.score, 0);
  return result.toFixed(2);
}
const Charts = () => {
  const attributes = useSelector((state) => state.attributes);
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
      name: "Space and place attributes",
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
      name: "Functional and physical wellbeing",
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
      name: "Social wellbeing",
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
  return (
    <div className={classes.charts}>
      <MultiColorChart attributes={attributes}/>
      <PieChart categories={categories}/>
    </div>
  );
};

export default Charts;
