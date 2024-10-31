import classes from "./addscore.module.css";
import { NumberInputWithStatus } from "./NumberInput";

const data = [
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
        name: "Provide views of prominent landmarks, waterscapes, landscapes, geological forms, etc",
        score: 0,
      },
    ],
  },
  {
    id: "b2",
    scores: [
      {
        name: "Conceive a place for withdrawal from the main flow of activity or environmental conditions to make the individual feel safe or under shelter like an overhead trellis.",
        score: 0,
      },
      {
        name: "Create a partial refuge place from the main flow of activity, like reading nooks, bay window seats, booth seating, canopy trees, arcades, covered walkways, or porches",
        score: 0,
      },
    ],
  },
  {
    id: "b3",
    scores: [
      {
        name: "The presence of a focal point and a guiding line to direct visual attention",
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
      },
      {
        name: "The place provides many enjoyable activities that are compatible with users' desires",
        score: 0,
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
      },
      {
        name: "Encouraging going outside and exposure to natural air by creating shaded outdoor seating.",
        score: 0,
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
        name: "Create simulated water such as fountains, ponds, water walls, rainwater spouts, aquaria, and so on.",
        score: 0,
      },
      {
        name: "Access to natural water features like streams, ponds, rivers, oceans, etc.",
        score: 0,
      },
      {
        name: "Visual access to rainfall and flows.",
        score: 0,
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
      },
      {
        name: "Bring vegetation indoors by indoor green walls and potting plants.",
        score: 0,
      },
      {
        name: "Design landscapes in courtyards, atria, green roofs, etc.",
        score: 0,
      },
    ],
  },
  {
    id: "b10",
    scores: [
      {
        name: "Fragrant flowers, songbirds, crackling fire.",
        score: 0,
      },
      {
        name: "Natural ventilation, sun patches, and flowing water.",
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
      },
      {
        name: "Present images include human survival experiences in nature.",
        score: 0,
      },
    ],
  },
  {
    id: "b12",
    scores: [
      {
        name: "Use natural materials like rock, wood, stone, etc.",
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
        name: "Balance between dynamic and diffuse lighting conditions.",
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
    ],
  },
  {
    id: "b16",
    scores: [
      {
        name: "Use hierarchically organised ratios, fractions , and scales in designs.",
        score: 0,
      },
      {
        name: "Use the Golden Ratio (1:1.618) or Fibonacci series (0, 1, 1, 2, 3, 5, 8, 13, 21, 34).",
        score: 0,
      },
      {
        name: "Choose the intermediate ratio (1:1.3e1.75).",
        score: 0,
      },
    ],
  },
  {
    id: "b17",
    scores: [
      {
        name: "Create winding paths and non-translucent materials.",
        score: 0,
      },
      {
        name: "Views are medium (≥ 20 ft) to high (≥ 100 ft) in depth of field.",
        score: 0,
      },
      {
        name: "At least one edge of the focal subject is obscured, preferably two edges.",
        score: 0,
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
        name: "Visual order of scene components, through patterning or linkage of scene components.",
        score: 0,
      },
      {
        name: "Balance and unity are founded on symmetries, repeated elements, content, or colour patterns.",
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
        name: "Having a variety of workspaces (open-plan offices, informal workspaces, and concentration spaces), giving the employees the freedom to work anywhere.",
        score: 0,
      },
      {
        name: "Create stand-up workstations with treadmills throughout the space.",
        score: 0,
      },
      {
        name: "Various spaces for both individual private offices and group collaboration workspaces.",
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
        name: "Allow users to control their environment, such as temperature and lighting, through personal lighting.",
        score: 0,
      },
      {
        name: "Establishing electrical access everywhere so that people may work anywhere in the building.",
        score: 0,
      },
      {
        name: "Allow users to control the privacy of their environment through adjustable blinds and privacy screens",
        score: 0,
      },
      {
        name: "Movable and adjustable furniture like seats and tables with landscape elements.",
        score: 0,
      },
    ],
  },
  {
    id: "fw3",
    scores: [
      {
        name: "Gradient the scale of privacy in the workplace from open-plan offices to semi-private and then private workplaces.",
        score: 0,
      },
      {
        name: "Separate open offices by using a colorful or short partition.",
        score: 0,
      },
      {
        name: "Separate open-space offices by using a wood partition or indoor plants.",
        score: 0,
      },
    ],
  },
  {
    id: "fw4",
    scores: [
      {
        name: "Increase employee communication by integrating hallway whiteboards for brief discussions or clarifications.",
        score: 0,
      },
      {
        name: "Create open floors and dynamic workspaces for teamwork and partitions and translucent walls.",
        score: 0,
      },
      {
        name: "Assembling coworkers to sit in the same section with similar tasks means that workers must be no closer to one another than 2.5 minutes by foot.",
        score: 0,
      },
      {
        name: "Design community spaces like rooftop gardens and outdoor workspaces.",
        score: 0,
      },
    ],
  },
  {
    id: "fw5",
    scores: [
      {
        name: "Create concentration spaces and reading nooks through elements such as lighting, layout, and types of furniture.",
        score: 0,
      },
      {
        name: "Create clusters by dividing the workspace area with glass walls.",
        score: 0,
      },
      {
        name: "Use sound-absorbing and insulating materials in spaces that require concentration.",
        score: 0,
      },
    ],
  },
  {
    id: "fw6",
    scores: [
      {
        name: "Design that encourages physical activity by using bikes and skateboards to transport between buildings and between amenities inside buildings.",
        score: 0,
      },
      {
        name: "Provide many activities that help in movement, like incorporating a gym and fitness center.",
        score: 0,
      },
      {
        name: "Establish outdoor meandering walkways to encourage workers to move around freely.",
        score: 0,
      },
      {
        name: "Enhance the interior experience of space by removing visual barriers.",
        score: 0,
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
        name: "Design courtyards in the building with conversation areas to facilitate group gatherings.",
        score: 0,
      },
      {
        name: "create an amphitheater-style courtyard with staggered seating levels.",
        score: 0,
      },
    ],
  },
  {
    id: "sw2",
    scores: [
      {
        name: "Design informal outdoor and indoor working spaces that allow the social connection between workers.",
        score: 0,
      },
      {
        name: "Comfortable and flexible pieces of furniture inside and outside the building.",
        score: 0,
      },
    ],
  },
  {
    id: "sw3",
    scores: [
      {
        name: "Create a multi-purpose meeting and event room.",
        score: 0,
      },
      {
        name: "Create diverse open areas, indoor and outdoor.",
        score: 0,
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
        name: "Create small shopping spaces.",
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
      },
    ],
  },
];
// function to calculate scores
function getOneScore(id,totalWeight) {
  const itemToFind = data.find((item) => item.id === id);
  const n = itemToFind.scores.length;
  const sum = itemToFind.scores.reduce((acc, score) => acc + score.score, 0);
  const score = sum/n
  const effect = 100*(score*itemToFind.multiplier)/totalWeight
  return effect
}

const AddScore = ({ id }) => {
  return (
    <div className={classes.container}>
      <span>Add Score: </span>
      <input type="number" min={0} max={3} />
    </div>
  );
};

export default AddScore;
