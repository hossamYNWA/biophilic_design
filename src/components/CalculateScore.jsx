import classes from "./calculate.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actions as attrActions } from "./store/AttributesSlice";
import { actions as strActions } from "./store/StrategiesSlice";
import { actions as spacesActions } from "./store/SpacesSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

// function to refactor strategies according to optional state
const generateFilteredArray = (initialArray) => {
  return initialArray.map((item) => {
    const optionalScores = item.scores.filter((score) => score.optional);
    const regularScores = item.scores.filter((score) => !score.optional);

    if (optionalScores.length > 0) {
      // Keep the highest scoring optional score or any one of them if they are equal
      const highestScore = optionalScores.reduce((prev, curr) => {
        return curr.score > prev.score ? curr : prev;
      });

      // Combine the highest optional score with the regular scores
      return {
        ...item,
        scores: [highestScore, ...regularScores],
      };
    } else {
      // Keep all scores as is if no optional scores present
      return {
        ...item,
        scores: regularScores,
      };
    }
  });
};

const CalculateScore = () => {
  const [showScore, setShowScore] = useState(false);
  const dispatch = useDispatch();
  const attributes = useSelector((state) => state.attributes);
  const strategies = useSelector((state) => state.strategies);
  const totalshares = attributes.reduce((acc, attr) => acc + attr.share, 0);
  const totalWeight = 3 * totalshares;
  const updatedStrategies = generateFilteredArray(strategies);

  updatedStrategies.forEach((strategy) => {
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
  // update the space score upon updating the final score
  const selectedSpace = useSelector((state) =>
    state.spaces.find((space) => space.selected === true)
  );
  if (selectedSpace) {
    const spacePayload = { score: finalScore, id: selectedSpace.id };
    dispatch(spacesActions.updateSpace(spacePayload));
  }
  const resultColor =
    finalScore < 30
      ? "var(--pf-t--color--red--40)"
      : finalScore > 65
      ? "var(--pf-t--color--green--40)"
      : "var(--pf-t--color--yellow--40)";
  // reset all data to zero
  const resetHandler = () => {
    dispatch(attrActions.resetAttributes());
    dispatch(spacesActions.resetSpaces());
    dispatch(strActions.resetStrategies());
    window.location.reload();
  };
  return (
    <div className={classes.container}>
      <button className={classes.reset_btn} onClick={resetHandler}>
        Reset
      </button>
      <button
        onClick={() => setShowScore(!showScore)}
        className={classes.result_btn}
      >
        Show Result
      </button>
      {showScore && (
        <p style={{ color: resultColor }}>
          {finalScore.toFixed(2)}
          <Link className={classes.chartsLink} to="/charts">
            view charts
          </Link>
        </p>
      )}
    </div>
  );
};

export default CalculateScore;
