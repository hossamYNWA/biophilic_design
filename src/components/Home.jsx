import classes from "./home.module.css";
import logo from "./images/logo2-nobg.png";
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
          <h2>Formal Workspaces</h2>
        </Link>
        <Link to="/tree/1">
          <h2>Informal Workspaces</h2>
        </Link>
        <Link to="/tree/2">
          {" "}
          <h2>Gathering Spaces</h2>{" "}
        </Link>
        <Link to="/tree/3">
          {" "}
          <h2>Relaxing and Taking Break Spaces</h2>{" "}
        </Link>
      </div>
      <div className={classes.title}>
        <h1>restoration <span style={{ color: "var(--pf-t--color--orange--30" }}>evaluator</span> application</h1>
        <h3 style={{ color: "var(--pf-t--color--orange--10" }}>
          for improving psychological restoration in workspaces
        </h3>
        <h5>
          designed by:{" "}
          <span style={{ fontWeight: "bold" }}>Eng.Mariam Abdelghany</span>
        </h5>
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <footer className={classes.footer}>
        Developed by: Hossam Mousa
      </footer>
    </div>
  );
};

export default Home;
