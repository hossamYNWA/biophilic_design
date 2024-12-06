import classes from "./addscore.module.css";
import NumberInputWithStatus from "./NumberInput";
import { useSelector } from "react-redux";
import { memo } from "react";

const AddScore = ({ id, type }) => {
  let strategy = useSelector((state) =>
    state.strategies.find((item) => item.id === id)
  );
  let content = null;
  if (type === "occu") {
    strategy = useSelector((state) =>
      state.occupational.find((item) => item.id === id)
    );
    content = (
      <div key={strategy.name} className={classes.container}>
        <span key={strategy.name}>{strategy.name}</span>
        <NumberInputWithStatus key={strategy.name} id={id} type={type} />
      </div>
    );
  }
  // console.log('strategyToFind: ', strategy, 'for id: ');
  else {
    content = strategy.scores.map((score, i) => {
      return (
        <div
          key={Math.floor(Math.random())}
          className={classes.container}
          style={{ border: score.optional ? "1px dashed gray" : "1px solid #198b5a" }}
        >
          <span key={Math.floor(Math.random())}>{score.name}</span>
          <NumberInputWithStatus
            key={Math.floor(Math.random())}
            id={id}
            i={i}
          />
          {score.opt && <p className={classes.or}>or</p>}
        </div>
      );
    });
  }
  return <>{content}</>;
};

export default memo(AddScore);
