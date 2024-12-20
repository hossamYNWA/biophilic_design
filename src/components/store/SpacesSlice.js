import { createSlice } from "@reduxjs/toolkit";

const initial = [
  {
    id: "s1",
    name: "Formal",
    score: 0,
    selected: false,
  },
  {
    id: "s2",
    name: "Informal",
    score: 0,
    selected: false,
  },
  {
    id: "s3",
    name: "Gathering",
    score: 0,
    selected: false,
  },
  {
    id: "s4",
    name: "Break",
    score: 0,
    selected: false,
  },
];

function selectSpace(state, action) {
  state.forEach((space) => (space.selected = false));
  const i = action.payload.index;
  const space = state[i];
  space.selected = true;
  return state;
}

// update score of space
function updateSpace(state, action) {
  const { score, id } = action.payload;
  const spaceToEdit = state.find((s) => s.id === id)
  spaceToEdit.score = score;
}

// reset spaces 
function resetSpaces(state) {
    return initial
}
const spacesSlice = createSlice({
  name: "spaces",
  initialState: initial,
  reducers: {
    selectSpace,resetSpaces, updateSpace
  },
})

export const actions = spacesSlice.actions;
export default spacesSlice.reducer;