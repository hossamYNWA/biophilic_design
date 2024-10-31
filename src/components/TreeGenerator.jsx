import classes from "./smallButton.module.css";
import SmallButton from "./SmallButton";
import AddScore from "./AddScore";
import { NumberInputWithStatus } from "./NumberInput";
const TreeGenerator = ({ data }) => {
  return (
    <ul className={classes.row}>
      {data.map((attr, index) => {
        return (
          <li>
            <SmallButton name={attr.name} key={index} />
            {attr.last && <NumberInputWithStatus />}
            {!attr.last && attr.value && <TreeGenerator data={attr.value} />}
          </li>
        );
      })}
    </ul>
  );
};

export default TreeGenerator;
