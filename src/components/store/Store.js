import { createSlice } from "@reduxjs/toolkit";

const initial = [
  {
    name: "b1",
    score: 0,
    share: 2,
  },
  {
    name: "b2",
    score: 0,
    share: 2,
  },
  {
    name: "b3",
    score: 0,
    share: 2,
  },
  {
    name: "b4",
    score: 0,
    share: 2,
  },
  {
    name: "b5",
    score: 0,
    share: 2,
  },
  {
    name: "b6",
    score: 0,
    share: 2,
  },
  {
    name: "b7",
    score: 0,
    share: 2,
  },
  {
    name: "b8",
    score: 0,
    share: 2,
  },
  {
    name: "b9",
    score: 0,
    share: 2,
  },
  {
    name: "b10",
    score: 0,
    share: 2,
  },
  {
    name: "b11",
    score: 0,
    share: 2,
  },
  {
    name: "b12",
    score: 0,
    share: 2,
  },
  {
    name: "b13",
    score: 0,
    share: 2,
  },
  {
    name: "b14",
    score: 0,
    share: 2,
  },
  {
    name: "b15",
    score: 0,
    share: 2,
  },
  {
    name: "b16",
    score: 0,
    share: 2,
  },
  {
    name: "b17",
    score: 0,
    share: 2,
  },
  {
    name: "b18",
    score: 0,
    share: 2,
  },
  {
    name: "b19",
    score: 0,
    share: 2,
  },
  {
    name: "b20",
    score: 0,
    share: 2,
  },
  {
    name: "fw1",
    score: 0,
    share: 1,
  },
  {
    name: "fw2",
    score: 0,
    share: 1,
  },
  {
    name: "fw3",
    score: 0,
    share: 1,
  },
  {
    name: "fw4",
    score: 0,
    share: 1,
  },
  {
    name: "fw5",
    score: 0,
    share: 1,
  },
  {
    name: "fw6",
    score: 0,
    share: 1,
  },
  {
    name: "sw1",
    score: 0,
    share: 1,
  },
  {
    name: "sw2",
    score: 0,
    share: 1,
  },
  {
    name: "sw3",
    score: 0,
    share: 1,
  },
  {
    name: "sw4",
    score: 0,
    share: 1,
  },
  {
    name: "sw5",
    score: 0,
    share: 1,
  },
  {
    name: "sw6",
    score: 0,
    share: 1,
  },
];
const scoringSlice = createSlice({
  name: "scoringSlice",
  initialState: initial,
  reducers: { calculateScore },
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
