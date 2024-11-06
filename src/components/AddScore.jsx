import classes from "./addscore.module.css";
import NumberInputWithStatus from "./NumberInput";
import { useSelector } from "react-redux";
import {memo} from 'react';

const AddScore = ({ id }) => {
  const strategy= useSelector((state) => state.strategies.find((item) => item.id === id));
  console.log('strategyToFind: ', strategy, 'for id: ');
  // const totalWeight = strategy.scores.reduce((acc, score) => acc + score.multiplier, 0);
  const content = strategy.scores.map((score,i) => {
    return (
      <div key={Math.floor(Math.random())} className={classes.container}>
        <span key={Math.floor(Math.random())}>{score.name}</span>
        <NumberInputWithStatus key={Math.floor(Math.random())} id={id} i={i} />
      </div>
    );
  });
  return <>{content}</>;
};

export default memo(AddScore);
