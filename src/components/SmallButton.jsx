import classes from "./smallButton.module.css";
const SmallButton = ({ name,color,tcolor , bold}) => {
  return (
    <div>
      <button style={{backgroundColor:color, color:`${tcolor? tcolor : "#22554c"}`, fontWeight:`${bold? "bold" : "normal"}`}} className={classes.smlBtn}>{name}</button>
    </div>
  );
};

export default SmallButton;
