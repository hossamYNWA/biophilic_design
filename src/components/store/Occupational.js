import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: 'oc1', name: 'Individuals', score: 0 },
    { id: 'oc2', name: 'Small Groups', score: 0 },
    { id: 'oc3', name: 'Large Groups', score: 0 },
    { id: 'oc4', name: 'working', score: 0 },
    { id: 'oc5', name: 'meeting', score: 0 },
    { id: 'oc6', name: 'learning', score: 0 },
    { id: 'oc7', name: 'reading', score: 0 },
    { id: 'oc8', name: 'relaxing', score: 0 },
    { id: 'oc9', name: 'eating', score: 0 },
    { id: 'oc10', name: 'sleeping', score: 0 },
    { id: 'oc11', name: 'seating', score: 0 },
    { id: 'oc12', name: 'Viewing', score: 0 },
    { id: 'oc13', name: 'talking', score: 0 },
    { id: 'oc14', name: 'gathering', score: 0 },
    { id: 'oc15', name: 'celebrating', score: 0 },
    { id: 'oc16', name: 'Playing', score: 0 },
  ]
const occupationalSlice = createSlice({
    name: "occupational",
    initialState:initialState,
    reducers: {
        addOneScore,resetOCu
    },
});

function resetOCu(state, action) {
  state = initialState
}
function addOneScore(state, action) {
  const { id, type } = action.payload;
  const idx = state.findIndex((item) => item.id === id);
  if (idx !== -1 && type === "inc") {
    state[idx].score += 1;
  }
  if (idx !== -1 && type === "dec") {
    state[idx].score -=1;
  }
}

export const actions = occupationalSlice.actions;
export default occupationalSlice.reducer;