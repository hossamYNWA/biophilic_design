import classes from "./calculate.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actions as attrActions } from "./store/AttributesSlice";
import { useState } from "react";
import {Link} from "react-router-dom";

const CaculateScore = () => {
  const [showScore, setShowScore] = useState(false);
  const dispatch = useDispatch();
  const attributes = useSelector((state) => state.attributes);
  const strategies = useSelector((state) => state.strategies);
  const totalshares = attributes.reduce((acc, attr) => acc + attr.share, 0);
  const totalWeight = 3* totalshares;
  strategies.forEach((strategy) => {
    const n = strategy.scores.length;
    const sum = strategy.scores.reduce((acc, score) => acc + score.score, 0);
    const strScore = sum / n;
    dispatch(
      attrActions.addScore({
        id: strategy.id,
        score: strScore,
        weight: totalWeight,
      })
    );
  });
  const finalScore = attributes.reduce((acc, attr) => acc + attr.score, 0);
  
  const resultColor =
    finalScore < 30
      ? "var(--pf-t--color--red--40)"
      : finalScore > 65
      ? "var(--pf-t--color--green--40)"
      : "var(--pf-t--color--yellow--40)";
  return (
    <div className={classes.container}>
      <button
        onClick={() => setShowScore(!showScore)}
        className={classes.result_btn}
      >
        Show Result
      </button>
      {showScore && (
        <p style={{ color: resultColor }}>{finalScore.toFixed(2)}<Link className={classes.shartsLink} to="/charts">view charts</Link></p>
      )}
    </div>
  );
};

export default CaculateScore;
