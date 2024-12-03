import { WeightIconConfig } from "@patternfly/react-icons";
import { createSlice } from "@reduxjs/toolkit";


const initial = [
  {
    name: "b1",
    score: 0,
    share: 2,
    n:3
  },
  {
    name: "b2",
    score: 0,
    share: 2,
    n:1,
  },
  {
    name: "b3",
    score: 0,
    share: 2,
    n:3
  },
  {
    name: "b4",
    score: 0,
    share: 2,
    n:2
  },
  {
    name: "b5",
    score: 0,
    share: 2,
    n:2
  },
  {
    name: "b6",
    score: 0,
    share: 2,
    n:2
  },
  {
    name: "b7",
    score: 0,
    share: 2,
    n:2,
  },
  {
    name: "b8",
    score: 0,
    share: 2,
    n:2,
  },
  {
    name: "b9",
    score: 0,
    share: 2,
    n:2,
  },
  {
    name: "b10",
    score: 0,
    share: 2,
    n:2,
  },
  {
    name: "b11",
    score: 0,
    share: 2,
    n:1
  },
  {
    name: "b12",
    score: 0,
    share: 2,
    n:2
  },
  {
    name: "b13",
    score: 0,
    share: 2,
    n:3
  },
  {
    name: "b14",
    score: 0,
    share: 2,
    n:2
  },
  {
    name: "b15",
    score: 0,
    share: 2,
    n:3
  },
  {
    name: "b16",
    score: 0,
    share: 2,
    n:2,
  },
  {
    name: "b17",
    score: 0,
    share: 2,
    n:2,
  },
  {
    name: "b18",
    score: 0,
    share: 2,
    n:3
  },
  {
    name: "b19",
    score: 0,
    share: 2,
    n:2,
  },
  {
    name: "b20",
    score: 0,
    share: 2,
    n:2,
  },
  {
    name: "fw1",
    score: 0,
    share: 1,
    n:3,
  },
  {
    name: "fw2",
    score: 0,
    share: 1,
    n:4,
  },
  {
    name: "fw3",
    score: 0,
    share: 1,
    n:2
  },
  {
    name: "fw4",
    score: 0,
    share: 1,
    n:4,
  },
  {
    name: "fw5",
    score: 0,
    share: 1,
    n:3
  },
  {
    name: "fw6",
    score: 0,
    share: 1,
    n:2
  },
  {
    name: "sw1",
    score: 0,
    share: 1,
    n:3

  },
  {
    name: "sw2",
    score: 0,
    share: 1,
    n:3
  },
  {
    name: "sw3",
    score: 0,
    share: 1,
    n:2
  },
  {
    name: "sw4",
    score: 0,
    share: 1,
    n:3
  },
  {
    name: "sw5",
    score: 0,
    share: 1,
    n:3
  },
  {
    name: "sw6",
    score: 0,
    share: 1,
    n:2
  },
];




const attributesSlice = createSlice({
  name: "attributes",
  initialState: initial,
  reducers: { addScore, execludeAttributes, resetAttributes},
});

function addScore(state, action) {
  const {id, score, weight} = action.payload;
  const idx = state.findIndex(item => item.name === id);
  if (idx !== -1) {
    const multiplier = state[idx].share;
    state[idx].score = getOneScore(score, multiplier, weight);
  }
}

//function to calculate effect of scores of one attribute
function getOneScore(score, multiplier, totalWeight) {
    const effect = 100 * ((score * multiplier)/ totalWeight);
    return effect;
  }

  // function to execlude attribute 
  function execludeAttributes(state, action) {
    const {execludeArray} = action.payload;
    state.forEach(attr => {
      console.log('attr: ', attr)
      if (execludeArray.includes(attr.name)) {
        attr.share = 0;
      }
    });
    console.log('state wxecluded: ', state)
  }

  // reset attributes
  function resetAttributes(state) {
    state = initial
  }
export default attributesSlice.reducer
 const actions = attributesSlice.actions
 export {actions}