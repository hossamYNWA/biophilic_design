
import { configureStore } from "@reduxjs/toolkit";
import strategiesReducer from './StrategiesSlice';
import attributesReducer from './AttributesSlice';
import occupationalReducer from './Occupational';
import SpacesSlice from "./SpacesSlice";
const store = configureStore({
  reducer: {
    strategies: strategiesReducer,
    attributes: attributesReducer,
    occupational: occupationalReducer,
    spaces: SpacesSlice
  }
});



function calculateScore(state, action) {
  const newScores = action.payload;
  const n = newScores.length;
  let score = 0;
  for (let i = 0; i < n; i++) {
    const factor = state[i].share / n;
    score += newScores[i] * factor;
  }
}


function getOneScore(id, totalWeight) {
  const itemToFind = data.find((item) => item.id === id);
  const n = itemToFind.scores.length;
  const sum = itemToFind.scores.reduce((acc, score) => acc + score.score, 0);
  const score = sum / n;
  const effect = (100 * (score * itemToFind.multiplier)) / totalWeight;
  return effect;
}

function addScore(state, action) {
  const {id, newScore} = action.payload;
  const itemToFind = state.find((item) => item.name === id);
  itemToFind.score = newScore;
}

export default store;
