import classes from "./smallButton.module.css";
const SmallButton = ({ name,color,tcolor }) => {
  return (
    <div>
      <button style={{backgroundColor:color, color:`${tcolor? tcolor : !color.includes("20") ? "white" : "black"}`}} className={classes.smlBtn}>{name}</button>
    </div>
  );
};

export default SmallButton;
