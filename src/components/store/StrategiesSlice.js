import { createSlice } from "@reduxjs/toolkit";

const initial = [
    {
      id: "b1",
      scores: [
        {
          name: "Symmetry of repeated elements along an axis",
          score: 0,
        },
        {
          name: "Having a safe space from which to plan a route.",
          score: 0,
        },
        {
          name: "Provide views of prominent landmarks or landscapes.",
          score: 0,
        },
      ],
    },
    {
      id: "b2",
      scores: [
        {
          name: "Conceive a place for withdrawal from the environmental conditions.",
          score: 0,
          optional: true
        },
        {
          name:'Create a partial refuge place from the main flow of activity.',
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "b3",
      scores: [
        {
          name: "Presence of a focal point and a guiding.",
          score: 0,
        },
        {
          name: "Degree of visual transparency and the presence of wayfinding tools in the scene.",
          score: 0,
        },
        {
          name: "Encourage exploration by using complex details in forms and motifs.",
          score: 0,
        },
      ],
    },
    {
      id: "b4",
      scores: [
        {
          name: "The built environment and activities seem to fit together quite naturally.",
          score: 0,
          optional: true
        },
        {
          name: "The place provides many enjoyable activities that are compatible with users' desires",
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "b5",
      scores: [
        {
          name: "Bring in natural light through glass walls, skylights, chandeliers, atria, reflective colours/materials, etc.",
          score: 0,
        },
        {
          name: "Using daylight-preserving window treatments in spaces where people spend a long time.",
          score: 0,
        },
        {
          name: "Avoidance of direct sunlight and high contrasts where directed attention activities are performed.",
          score: 0,
        },
      ],
    },
    {
      id: "b6",
      scores: [
        {
          name: "Installing operable windows, vents, narrower structures, etc. to reach thermal comfort.",
          score: 0,
          optional: true
        },
        {
          name: "Encouraging going outside and exposure to natural air by creating shaded outdoor seating.",
          score: 0,
          optional: true
        },
        {
          name: "Incorporate airflow and thermal conditions into materials.",
          score: 0,
        },
      ],
    },
    {
      id: "b7",
      scores: [
        {
          name: "Create simulated water such as fountains, ponds, water walls, rainwater spouts, aquaria.",
          score: 0,
        },
        {
          name: "Access to natural water features like streams, ponds, rivers, oceans, etc.",
          score: 0,
          optional:true
        },
        {
          name: "Visual access to rainfall and flows.",
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "b8",
      scores: [
        {
          name: "Support a visual connection that can be experienced for at least 5-20 minutes per",
          score: 0,
        },
        {
          name: "Incorporate plants into buildings like green roofs, walls, pockets, etc.",
          score: 0,
        },
      ],
    },
    {
      id: "b9",
      scores: [
        {
          name: "Create landscapes such as grasslands, prairies, and other habitats.",
          score: 0,
          optional: true
        },
        {
          name: "Design landscapes in courtyards, atria, green roofs, etc.",
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "b10",
      scores: [
        {
          name: "Fragrant flowers, songbirds, crackling fire, sun patches, or flowing water.",
          score: 0,
        },
        {
          name: "Textured materials (stone, wood, fur).",
          score: 0,
        },
      ],
    },
    {
      id: "b11",
      scores: [
        {
          name: "Present natural scenes, animals, plants, water, or landscapes in photographs or paintings.",
          score: 0,
          optional: true
        },
        {
          name: "Present images include human survival experiences in nature.",
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "b12",
      scores: [
        {
          name: "Use between 30 and 45 percent natural materials like rock, wood, stone, etc.",
          score: 0,
        },
        {
          name: "Use natural colours like green, blue, and other earth colours.",
          score: 0,
        },
      ],
    },
    {
      id: "b13",
      scores: [
        {
          name: "Simulate weather conditions such as temperature, barometric pressure, and humidity.",
          score: 0,
        },
        {
          name: "Simulate natural air and ventilation through HVAC delivery strategy, etc.",
          score: 0,
        },
        {
          name: "Simulate natural light and balance dynamic and diffuse lighting.",
          score: 0,
        },
      ],
    },
    {
      id: "b14",
      scores: [
        {
          name: "Imitate botanical/animal organisms (biomorphic design) in building forms, motifs, and structural systems.",
          score: 0,
        },
        {
          name: "Use natural forms like shells, spirals, ovals, domes, vaults, etc.",
          score: 0,
        },
      ],
    },
    {
      id: "b15",
      scores: [
        {
          name: "Arrange rich and complex details in an orderly manner.",
          score: 0,
        },
        {
          name: "Evoke natural geometry, forms, and patterns.",
          score: 0,
        },
        {
          name:"Using duplicate materials or colours to arrange the various details.",
          score: 0
        }
      ],
    },
    {
      id: "b16",
      scores: [
        {
          name: "Use hierarchically organised ratios, fractions, and scales in designs.",
          score: 0,
        },
        {
          name: "Use the Golden Ratio (1:1.618) or Fibonacci series (0, 1, 1, 2, 3, 5, 8, 13, 21, 34).",
          score: 0,
          optional: true
        },
        {
          name: "Choose the intermediate ratio (1:1.3e1.75).",
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "b17",
      scores: [
        {
          name: "Create winding paths and non-translucent materials.",
          score: 0,
          optional: true
        },
        {
          name: "Views are medium (≥ 20 ft) to high (≥ 100 ft) in depth of field.",
          score: 0,
        },
        {
          name: "At least one edge of the focal subject is obscured, preferably two edges.",
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "b18",
      scores: [
        {
          name: "landscape dominated by the experience of moderate depth",
          score: 0,
        },
        {
          name: "Having a suitable ground surface for navigation.",
          score: 0,
        },
        {
          name: "Using the relative size of known objects as the metric for the distance of what lies beyond.",
          score: 0,
        },
      ],
    },
    {
      id: "b19",
      scores: [
        {
          name: "The place is organized in its physical arrangement.",
          score: 0,
        },
        {
          name: "Unity of Visual order of scene components, through colours, patterns, or repeated elements.",
          score: 0,
        },
      ],
    },
    {
      id: "b20",
      scores: [
        {
          name: "Optimize visual access to indoor or outdoor vistas by orienting buildings and corridors.",
          score: 0,
        },
        {
          name: "Enhance the experience of space by providing focal lengths ≥ 6 meters and removing visual barriers.",
          score: 0,
        },
      ],
    },
    {
      id: "fw1",
      scores: [
        {
          name: "Having a variety of workspaces (individual, collaborative, formal , informal)",
          score: 0,
        },
        {
          name: "Create stand-up workstations.",
          score: 0,
        },
        {
          name: "Using natural light and ventilation in the workspaces.",
          score: 0,
        },
      ],
    },
    {
      id: "fw2",
      scores: [
        {
          name: "Allow users to control of temperature and lighting.",
          score: 0,
        },
        {
          name: "Establishing electrical access everywhere so users can work anywhere.",
          score: 0,
        },
        {
          name: "Allow users to control the privacy of their environment through adjustable blinds and privacy screens",
          score: 0,
        },
        {
          name: "Movable and adjustable furniture.",
          score: 0,
        },
      ],
    },
    {
      id: "fw3",
      scores: [
        {
          name: "The spaces gradually transition from open-plan to semi-private and finally private spaces.",
          score: 0,
        },
        {
          name:"Separate private offices by using a colourful or tinted glass partition.",
          score: 0,
          optional: true
        },
        {
          name: "Separate open-space offices by using a wood partition or indoor plants.",
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "fw4",
      scores: [
        {
          name: "Integrating whiteboards for brief discussions or clarifications.",
          score: 0,
        },
        {
          name: "Create open floors and dynamic workspaces for teamwork and partitions and translucent walls.",
          score: 0,
          optional: true
        },
        {
          name: "Design community spaces like rooftop gardens or outdoor workspaces.",
          score: 0,
          optional: true
        },
        {
          name: "Assembling co-workers to be no distance to one another than 2.5 minutes by foot.",
          score: 0,
        },

      ],
    },
    {
      id: "fw5",
      scores: [
        {
          name: "Create concentration spaces through elements such as lighting, layout, and types of furniture.",
          score: 0,
        },
        {
          name: "Create clusters by dividing the workspace with partitions.",
          score: 0,
        },
        {
          name: "Use sound-absorbing and insulating materials in concentration spaces.",
          score: 0,
        },
      ],
    },
    {
      id: "fw6",
      scores: [
        {
          name: "Encourage using bikes and skateboards to transport inside and outside buildings.",
          score: 0,
        },
        {
          name: "Provide movement activities, like a gym and fitness center.",
          score: 0,
        },
        {
          name: "Establish outdoor meandering walkways to encourage walking freely.",
          score: 0,
          optional: true
        },
        {
          name: "Enhance the interior experience of space by removing visual barriers.",
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "sw1",
      scores: [
        {
          name: "Designing public spaces like parks, plazas, or rooftop gardens.",
          score: 0,
        },
        {
          name: "Design courtyards with conversation areas to facilitate group gatherings.",
          score: 0,
        },
        {
          name: "create an amphitheatre-style space with staggered seating levels.",
          score: 0,
        },
      ],
    },
    {
      id: "sw2",
      scores: [
        {
          name: "Provide enough lighting and power outlets for laptops.",
          score: 0,
        },
        {
          name: "Comfortable and flexible pieces of furniture inside and outside the building.",
          score: 0,
        },
        {
          name: "Variety of private and collaborative seating.",
          score: 0,
        },
      ],
    },
    {
      id: "sw3",
      scores: [
        {
          name: "Design formal and/ or informal meeting rooms.",
          score: 0,
        },
        {
          name: "Create a multi-purpose meeting and event room.",
          optional:true,
          score: 0,
        },
        {
          name: "Create diverse open areas, indoor and outdoor for celebrating.",
          score: 0,
          optional: true
        },
      ],
    },
    {
      id: "sw4",
      scores: [
        {
          name: "Outdoor recreation center for sports like basketball or tennis.",
          score: 0,
        },
        {
          name: "Indoor rooms of video games, playing tables, or quick games.",
          score: 0,
        },
        {
          name: "Design entertainment space for sitting freely, playing, or relaxing.",
          score: 0,
        },
      ],
    },
    {
      id: "sw5",
      scores: [
        {
          name: "Create a meditation or massage room for workers to relieve stress.",
          score: 0,
        },
        {
          name:"Design outdoor shaded seating for relaxation in nature.",
          score: 0,
        },
        {
          name: "Bring natural elements like plants, water, air, and light.",
          score: 0,
        },
      ],
    },
    {
      id: "sw6",
      scores: [
        {
          name: "provide several cafés and restaurants in different parts.",
          score: 0,
        },
        {
          name: "Design small open kitchens in the building.",
          score: 0,
          optional: true
        },
        {
          name: "Create a bar for drinks.",
          score: 0,
          optional: true
        }
      ],
    },
  ];
  

  //update scores of strategies [STRATEGY SLICE]
  function updateStrategy(state, action) {
    console.log('updating attr of id: ', action.payload.id)
    const {type, id, i} = action.payload;
    const targetAttr = state.find((item) => item.id === id);
    const targetScore = targetAttr.scores[i];
    if(type === 'inc') {
      targetScore.score++;
    }
    if(type === 'dec') {
      targetScore.score--;
    }
    console.log('state: ', state)
  }


  // reset all 
  const resetStrategies = (state) => state = initial



const strategiesSlice = createSlice({
    name: "strategies",
    initialState: initial,
    reducers: {updateStrategy, resetStrategies},
  })

  export default strategiesSlice.reducer
  const actions = strategiesSlice.actions
  export {actions}
