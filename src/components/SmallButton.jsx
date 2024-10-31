import classes from "./smallButton.module.css";
const SmallButton = ({ name }) => {
  return (
    <div>
      <button className={classes.smlBtn}>{name}</button>
    </div>
  );
};

export default SmallButton;
