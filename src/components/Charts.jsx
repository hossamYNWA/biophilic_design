import MultiColorChart from "./LineChart";
import PieChart from "./PieChart";
import classes from "./Charts.module.css";
const Charts = () => {
    return (
        <div className={classes.charts}>
            <MultiColorChart />
            <PieChart />
        </div>
    );
};

export default Charts;