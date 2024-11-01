import { useState } from "react";
import classes from "./bigButton.module.css";
import TreeGenerator from "./TreeGenerator";
const BigButton = ({ keyName, configs }) => {
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
    <div>
      <button className={classes.bigbtn} onClick={clickHandler}>
        {keyName}
      </button>
      <div>{configActive && <TreeGenerator data={configs} />}</div>
    </div>
  );
};

export default BigButton;
