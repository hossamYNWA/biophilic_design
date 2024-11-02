import BigButton from "./BigButton";
import { useParams } from "react-router-dom";
import classes from "./tree.module.css";
const DATA = [
  {
    last: false,
    name: "Biophilic design attributes",
    value: [
      {
        name: "Attributes that permit restoration",
        value: [
          { last: true,id:'b1', name: "B01- Access", score: 0 },
          { last: true,id:'b2', name: "B02- Prospect and refuge", score: 0 },
          { last: true,id:'b3', name: "B03- Information gathering support", score: 0 },
          { last: true,id:'b4', name: "B04- Compatibility", score: 0 },
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
                id:'b5',
                score: 0,
                last: true,
              },
              {
                name: "B06- Air",
                id:'b6',
                score: 0,
                last: true,
              },
              {
                name: "B07- Water",
                id:'b7',
                score: 0,
                last: true,
              },
              {
                name: "B08- Visual connection with nature",
                id:'b8',
                score: 0,
                last: true,
              },
              {
                name: "B09- Natural landscapes",
                id:'b9',
                score: 0,
                last: true,
              },
              {
                name: "B10- Non-visual connection with nature",
                id:'b10',
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
                id:'b11',
                score: 0,
                last: true,
              },
              {
                name: "B12- Natural materials and colours",
                id:'b12',
                score: 0,
                last: true,
              },
              {
                name: "B13- Simulating natural light and air",
                id:'b13',
                score: 0,
                last: true,
              },
              {
                name: "B14- Biomorphic forms and patterns",
                id:'b14',
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
                id:'b15',
                score: 0,
                last: true,
              },
              {
                name: "B16- Integrated structural form",
                id:'b16',
                score: 0,
                last: true,
              },
              {
                name: "B17- Mystery",
                id:'b17',
                score: 0,
                last: true,
              },
              {
                name: "B18- Depth",
                id:'b18',
                score: 0,
                last: true,
              },
              {
                name: "B19- Coherence",
                id:'b19',
                score: 0,
                last: true,
              },
              {
                name: "B20- Openness",
                id:'b20',
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
            id:'fw1',
            score: 0,
            last: true,
          },
          {
            name: "FW2- Flexibility",
            id:'fw2',
            score: 0,
            last: true,
          },
          {
            name: "FW3- Privacy",
            id:'fw3',
            score: 0,
            last: true,
          },
          {
            name: "FW4- Creativity and collaboration",
            id:'fw4',
            score: 0,
            last: true,
          },
          {
            name: "FW5- Concentration and reducing noise",
            id:'fw5',
            score: 0,
            last: true,
          },
          {
            name: "FW6- Encouraging active and movement",
            id:'fw6',
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
            id:'sw1',
            score: 0,
            last: true,
          },
          {
            name: "SW2- Informal working",
            id:'sw2',
            score: 0,
            last: true,
          },
          {
            name: "SW3- Meeting and celebration",
            id:'sw3',
            score: 0,
            last: true,
          },
          {
            name: "SW4- Enjoyment and playing",
            id:'sw4',
            score: 0,
            last: true,
          },
          {
            name: "SW5- Relaxation and restoration",
            id:'sw5',
            score: 0,
            last: true,
          },
          {
            name: "SW6- Providing food services",
            id:'sw6',
            score: 0,
            last: true,
          },
        ],
      },
    ],
    last: false,
  },
];

const titles = ["Spaces for Formal Working", 'Spaces for Informal Working', 'Spaces for gathering', 'Spaces for taking a break']

const Tree = () => {
  const {id} = useParams();
  console.log(id);
  const title = titles[parseInt(id)];
  const bigContent = DATA.map((category, i) => {
    return (
      <BigButton keyName={category.name} configs={category.value} key={i} />
    );
  });
  return <div className={classes.container}>
    <h2>{title}</h2>{bigContent}</div>;
};

export default Tree;
