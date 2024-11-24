import { useState } from "react";
import classes from "./bigButton.module.css";
import TreeGenerator from "./TreeGenerator";
import {actions as attrActions} from "./store/AttributesSlice";
import {useDispatch} from "react-redux";
const BigButton = ({ keyName, configs, color, execlude }) => {
  const dispatch = useDispatch();
  dispatch(attrActions.execludeAttributes({execludeArray:execlude}));
  //state to manage tree appearance
  const [configActive, setConfig] = useState(false);
  // on click show or hide the tree
  const clickHandler = (e) => {
    e.preventDefault();
    setConfig(!configActive);
  };
  // function to generate tree
  // function branchGenerator(content, branch) {
  //   if (branch.last) {
  //     content += <p>put your score</p>;
  //     return content;
  //   } else {
  //     content += <SmallButton name={branch.name} />;
  //     branchGenerator(attr.value);
  //   }
  // }
  // function treeGenerator(config) {}
  return (
    <div className={classes.container}>
      <button className={classes.bigbtn} style={{ backgroundColor: color }} onClick={clickHandler}>
        {keyName}
      </button>
      <div>{configActive && <TreeGenerator data={configs} execlude={execlude} />}</div>
    </div>
  );
};

export default BigButton;
