import classes from "./smallButton.module.css";
import SmallButton from "./SmallButton";
import AddScore from "./AddScore";
const TreeGenerator = ({ data, execlude }) => {
  console.log("execlude: ", execlude);
  return (
    <ul className={classes.row}>
      {data.map(({ name, id, last, value, color }) => {
        const execluded = execlude.includes(id);
        return (
          <li key={name}>
            {!execluded && <SmallButton color={color} name={name} key={name} />}
            {last && !execluded && <AddScore id={id} key={name} />}
            {!last && value && (
              <TreeGenerator data={value} key={name} execlude={execlude} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TreeGenerator;
