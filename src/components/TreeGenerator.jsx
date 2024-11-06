import classes from "./smallButton.module.css";
import SmallButton from "./SmallButton";
import AddScore from "./AddScore";
const TreeGenerator = ({ data }) => {
  return (
    <ul className={classes.row}>
      {data.map(({ name, id, last, value }) => (
        <li key={id}>
          <SmallButton name={name} />
          {last && <AddScore id={id} />}
          {!last && value && <TreeGenerator data={value} />}
        </li>
      ))}
    </ul>
  );
};

export default TreeGenerator;
