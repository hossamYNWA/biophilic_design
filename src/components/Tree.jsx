import BigButton from "./BigButton";
import { useParams, useNavigate,useLocation } from "react-router-dom";
import classes from "./tree.module.css";
import CalculateScore from "./CalculateScore";
import Occupational from "./Occupational";
import { useDispatch } from "react-redux";
import { actions as attrActions } from "./store/AttributesSlice";
import { actions as strategiesActions } from "./store/StrategiesSlice";
import { actions as spacesActions } from "./store/SpacesSlice";
import {actions as occu_actions} from "./store/Occupational";
import { useEffect, useState } from "react";
import ModalWithDropdown from "./Modal";
import SatisfactionIndicator from "./Reference";
// f6c899
const occuData = [
  {
    color:'var(--pf-t--color--orange--50)',
    name: "Users",
    attrbutes: [
      {
        id:'oc1',
        name: "Individuals",
        score: 0,
      },
      {
        id:'oc2',
        name: "Small Groups",
        score: 0,
      },
      {
        id:'oc3',
        name: "Large Groups",
        score: 0,
      },
    ],
  },
  {
    color:'var(--pf-t--color--orange--50)',
    name: "Activities",
    attrbutes: [
      {
        color:'var(--pf-t--color--orange--40)',
        name: "neccessary",
        attrbutes: [
          {
            id:'oc4',
            name: "working",
            score: 0,
          },
          {
            id:'oc5',
            name: "meeting",
            score: 0,
          },
          {
            id:'oc6',
            name: "learning",
            score: 0,
          },
        ],
      },
      {
        color:'var(--pf-t--color--orange--40)',
        name: "optional",
        attrbutes: [
          {
            id:'oc7',
            name: "reading",
            score: 0,
          },
          {
            id:'oc8',
            name: "relaxing",
            score: 0,
          },
          {
            id:'oc9',
            name: "eating",
            score: 0,
          },
          {
            id:'oc10',
            name: "sleeping",
            score: 0,
          },
          {
            id:'oc11',
            name: "seating",
            score: 0,
          },
          {
            id:'oc12',
            name: "Viewing Nature",
            score: 0,
          }
        ],
      },
      {
        color:'var(--pf-t--color--orange--40)',
        name:'social',
        attrbutes:[
            {
                id:'oc13',
                name:'talking',
                score:0
            },
            {
                id:'oc14',
                name:'gathering',
                score:0
            },
            {
                id:'oc15',
                name:'celebrating',
                score:0
            },
            {
                id:'oc16',
                name:'Playing',
                score:0
            },
        ]
      }
    ],
  },
];
const DATA = [
  {
    color: "var(--pf-t--color--gray--20)",
    last: false,
    bold: true,
    name: "Biophilic design attributes",
    value: [
      {
        color: "var(--pf-t--color--yellow--30)",
        name: "Attributes that permit restoration",
        bold: true,
        value: [
          { color:'var(--pf-t--color--yellow--20', last: true, id: "b1", name: "B01- Access", score: 0 },
          { color:'var(--pf-t--color--yellow--20', last: true, id: "b2", name: "B02- Prospect and refuge", score: 0 },
          {color:'var(--pf-t--color--yellow--20',
            last: true,
            id: "b3",
            name: "B03- Information gathering support",
            score: 0,
          },
          {color:'var(--pf-t--color--yellow--20', last: true, id: "b4", name: "B04- Compatibility", score: 0 },
        ],
        last: false,
      },
      { color:'var(--pf-t--color--green--40',
        name: "Attributes that promote restoration",
        bold: true,
        value: [
          {
            color:'var(--pf-t--color--green--30',
            name: "Direct Natural Attributes",
            bold: true,
            value: [
              {
                color:'var(--pf-t--color--green--20',
                name: "B05- Light",
                id: "b5",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B06- Air",
                id: "b6",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B07- Water",
                id: "b7",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B08- Visual connection with nature",
                id: "b8",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B09- Natural landscapes",
                id: "b9",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B10- Non-visual connection with nature",
                id: "b10",
                score: 0,
                last: true,
              },
            ],
            last: false,
          },
          {
            color:'var(--pf-t--color--green--30',
            name: "Indirect Natural Attributes",
            bold: true,
            value: [
              {
                color:'var(--pf-t--color--green--20',
                name: "B11- Images of nature",
                id: "b11",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B12- Natural materials and colours",
                id: "b12",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B13- Simulating natural light and air",
                id: "b13",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B14- Biomorphic forms and patterns",
                id: "b14",
                score: 0,
                last: true,
              },
            ],
            last: false,
          },
          {
            color:'var(--pf-t--color--green--30',
            name: "Space and Place Attributes",
            bold: true,
            value: [
              {
                color:'var(--pf-t--color--green--20',
                name: "B15- Organized complexity",
                id: "b15",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B16- Integrated structural form",
                id: "b16",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B17- Mystery",
                id: "b17",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B18- Depth",
                id: "b18",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B19- Coherence",
                id: "b19",
                score: 0,
                last: true,
              },
              {
                color:'var(--pf-t--color--green--20',
                name: "B20- Openness",
                id: "b20",
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
    color: "var(--pf-t--color--gray--20)",
    last: false,
    name: "Characteristics for wellbeing in workspaces",
    bold: true,
    value: [
      {
        color: "var(--pf-t--color--blue--40)",
        last: false,
        name: "Functional and physical wellbeing",
        bold: true,
        value: [
          {
            color:'var(--pf-t--color--blue--20',
            name: "FW1- Productivity and satisfaction",
            id: "fw1",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--blue--20',
            name: "FW2- Flexibility",
            id: "fw2",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--blue--20',
            name: "FW3- Privacy",
            id: "fw3",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--blue--20',
            name: "FW4- Creativity and collaboration",
            id: "fw4",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--blue--20',
            name: "FW5- Concentration and reducing noise",
            id: "fw5",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--blue--20',
            name: "FW6- Encouraging active and movement",
            id: "fw6",
            score: 0,
            last: true,
          },
        ],
      },
      {
        color:'var(--pf-t--color--red--30',
        last: false,
        name: "Social wellbeing",
        bold: true,
        value: [
          {
            color:'var(--pf-t--color--red--20',
            name: "SW1- Gathering",
            id: "sw1",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--red--20',
            name: "SW2- Informal working",
            id: "sw2",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--red--20',
            name: "SW3- Meeting and celebration",
            id: "sw3",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--red--20',
            name: "SW4- Enjoyment and playing",
            id: "sw4",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--red--20',
            name: "SW5- Relaxation and restoration",
            id: "sw5",
            score: 0,
            last: true,
          },
          {
            color:'var(--pf-t--color--red--20',
            name: "SW6- Providing food services",
            id: "sw6",
            score: 0,
            last: true,
          },
        ],
      },
    ],
    last: false,
  },
];

const titles = [{
  name:"Formal Workspaces",
  execlude:['b7','b14','b15','b16','b17','b18','b20','fw6','sw1','sw2','sw3','sw4','sw5','sw6']
},
  {
    name:"Informal Workspaces",
    execlude:['b7','b14','b16','b17','b18','fw6','sw4','sw5','sw6']
  }
  , {
    name:"Gathering Spaces",
    execlude:['b13','fw1','fw4','fw5']
  },
  {
    name:"Relaxing and Taking Break Spaces",
    execlude:['b13','b15','b17','fw1','fw4','fw5']
  }
];


const Tree = () => {
  const [userData, setUserData] = useState({role:null, purpose:null});
  const [showUserBar, setShowUserBar] = useState(false);
  // const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log('location: ', location.pathname)
    if (location.pathname.startsWith(`/tree/`)) {
      dispatch(strategiesActions.resetStrategies())
      dispatch(attrActions.resetAttributes());
      dispatch(occu_actions.resetOccupational())
    }
}, [location]);


  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  dispatch(spacesActions.selectSpace({index:id}))
  const title = titles[parseInt(id)].name;
  const execlude = titles[parseInt(id)].execlude;
  const bigContent = DATA.map((category, i) => {
    return (
      <BigButton keyName={category.name} configs={category.value} execlude={execlude} color={category.color} key={i} />
    );
  });
  const modalHandler = (role, purpose) => {
    setUserData({role:role, purpose:purpose});
    setShowUserBar(true);
  }
  return (
    <div className={classes.container}>
      <ModalWithDropdown passUserData={modalHandler}/>
      <SatisfactionIndicator/>
      {showUserBar && <div className={classes.user}>{userData.role} - {userData.purpose}</div>}
      <h2>{title}</h2>
      <h4 className={classes.ocu_title}>Occupational Attributes</h4>
      <Occupational data={occuData}/>
      {bigContent}
      <CalculateScore />
    </div>
  );
};

export default Tree;
