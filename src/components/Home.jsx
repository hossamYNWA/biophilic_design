import classes from "./home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={classes.container}>
      {/* <header>
        <div className={classes.logo}>
          <img src="https://i.ibb.co/S7Gs7VV/logoo.png" alt="logo" />
        </div>
      </header> */}
      {/* <div className={classes.img_container}>
        <img src="https://i.ibb.co/fShGMC8/bg-1.jpg" alt="poster" />
      </div> */}
      <div className={classes.spaces}>
        <Link to="/tree/0">
          <h2>Spaces for Formal Working</h2>
        </Link>
        <Link to="/tree/1">
          <h2>Spaces for Informal Working</h2>
        </Link>
        <Link to="/tree/2">
          {" "}
          <h2>Spaces for gathering </h2>{" "}
        </Link>
        <Link to="/tree/3">
          {" "}
          <h2>Spaces for taking a break </h2>{" "}
        </Link>
      </div>
      <div className={classes.title}>
        <h1>restoration evaluation application</h1>
        <h3>for improving psychological restoration in workplaces</h3>
        <h5>designed by: <span style={{fontWeight: "bold"}}>Eng.Mariam Abdelghany</span></h5>

      </div>
      <div className={classes.logo}>
          <img src="https://i.ibb.co/S7Gs7VV/logoo.png" alt="logo" />
        </div>
    </div>
  );
};

export default Home;
