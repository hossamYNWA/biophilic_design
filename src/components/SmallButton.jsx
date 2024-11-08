import classes from "./smallButton.module.css";
const SmallButton = ({ name,color }) => {
  return (
    <div>
      <button style={{backgroundColor:color, color:`${color.includes("20") ? "black" : "white"}`}} className={classes.smlBtn}>{name}</button>
    </div>
  );
};

export default SmallButton;
