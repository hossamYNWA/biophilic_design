import BigButton from "./BigButton";
const DATA = [
  {
    last: false,
    name: "Biophilic design attributes",
    value: [
      {
        name: "Attributes that permit restoration",
        value: [
          { last: true, name: "B01- Access", score: 0 },
          { last: true, name: "B02- Prospect and refuge", score: 0 },
          { last: true, name: "B03- Information gathering support", score: 0 },
          { last: true, name: "B04- Compatibility", score: 0 },
        ],
        last: false,
      },
      {
        name: "Attributes that promote restoration",
        value: [
          {
            name: "Direct Natural Attributes",
            value: [
              {
                name: "B05- Light",
                score: 0,
                last: true,
              },
              {
                name: "B06- Air",
                score: 0,
                last: true,
              },
              {
                name: "B07- Water",
                score: 0,
                last: true,
              },
              {
                name: "B08- Visual connection with nature",
                score: 0,
                last: true,
              },
              {
                name: "B09- Natural landscapes",
                score: 0,
                last: true,
              },
              {
                name: "B10- Non-visual connection with nature",
                score: 0,
                last: true,
              },
            ],
            last: false,
          },
          {
            name: "Indirect Natural Attributes",
            value: [
              {
                name: "B11- Images of nature",
                score: 0,
                last: true,
              },
              {
                name: "B12- Natural materials and colours",
                score: 0,
                last: true,
              },
              {
                name: "B13- Simulating natural light and air",
                score: 0,
                last: true,
              },
              {
                name: "B14- Biomorphic forms and patterns",
                score: 0,
                last: true,
              },
            ],
            last: false,
          },
          {
            name: "Space and Place Attributes",
            value: [
              {
                name: "B15- Organized complexity",
                score: 0,
                last: true,
              },
              {
                name: "B16- Integrated structural form",
                score: 0,
                last: true,
              },
              {
                name: "B17- Mystery",
                score: 0,
                last: true,
              },
              {
                name: "B18- Depth",
                score: 0,
                last: true,
              },
              {
                name: "B19- Coherence",
                score: 0,
                last: true,
              },
              {
                name: "B20- Openness",
                score: 0,
                last: true,
              },
            ],
            last: false,
          },
        ],
        last: false,
      },
    ],
  },
  {
    last: false,
    name: "Characteristics for wellbeing in workspaces",
    value: [
      {
        last: false,
        name: "Functional and physical wellbeing",
        value: [
          {
            name: "FW1- Productivity and satisfaction",
            score: 0,
            last: true,
          },
          {
            name: "FW2- Flexibility",
            score: 0,
            last: true,
          },
          {
            name: "FW3- Privacy",
            score: 0,
            last: true,
          },
          {
            name: "FW4- Creativity and collaboration",
            score: 0,
            last: true,
          },
          {
            name: "FW5- Concentration and reducing noise",
            score: 0,
            last: true,
          },
          {
            name: "FW6- Encouraging active and movement",
            score: 0,
            last: true,
          },
        ],
      },
      {
        last: false,
        name: "Social wellbeing",
        value: [
          {
            name: "SW1- Gathering",
            score: 0,
            last: true,
          },
          {
            name: "SW2- Informal working",
            score: 0,
            last: true,
          },
          {
            name: "SW3- Meeting and celebration",
            score: 0,
            last: true,
          },
          {
            name: "SW4- Enjoyment and playing",
            score: 0,
            last: true,
          },
          {
            name: "SW5- Relaxation and restoration",
            score: 0,
            last: true,
          },
          {
            name: "SW6- Providing food services",
            score: 0,
            last: true,
          },
        ],
      },
    ],
    last: false,
  },
];

const Tree = () => {
  const bigContent = DATA.map((category, i) => {
    return (
      <BigButton keyName={category.name} configs={category.value} key={i} />
    );
  });
  return <div>{bigContent}</div>;
};

export default Tree;
