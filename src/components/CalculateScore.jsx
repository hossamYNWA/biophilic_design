import classes from "./calculate.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actions as attrActions } from "./store/AttributesSlice";
import { useState } from "react";


const CaculateScore = () => {
    const [showScore, setShowScore] = useState(false);
    const dispatch = useDispatch();
    const attributes = useSelector((state) => state.attributes);
    const strategies = useSelector((state) => state.strategies);
    const totalWeight = attributes.length*3;
    
    strategies.forEach((strategy) => {
        const n = strategy.scores.length;
    const sum = strategy.scores.reduce((acc, score) => acc + score.score, 0);
    const strScore = sum / n;
        dispatch(attrActions.addScore({ id: strategy.id, score: strScore, weight: totalWeight }));
    })
    const finalScore = attributes.reduce((acc, attr) => acc + attr.score, 0);
    return <div className={classes.container}>
        <button onClick={() => setShowScore(!showScore)} className={classes.result_btn}>Show Result</button>
        {showScore && <p>{finalScore.toFixed(2)}</p>}
    </div>;
}

export default CaculateScore