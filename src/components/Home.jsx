import classes from "./home.module.css";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className={classes.container}>
      {/* <header>
        <div className={classes.logo}>
          <img src="https://i.ibb.co/S7Gs7VV/logoo.png" alt="logo" />
        </div>
      </header> */}
      <div className={classes.img_container}>
        <img src="https://i.ibb.co/fShGMC8/bg-1.jpg" alt="poster" />
      </div>
      <div className={classes.spaces}>
        <h2><Link to='/tree:formal'>Spaces for Formal Working</Link></h2>
        <h2><Link to='/tree:informal'>Spaces for Informal Working</Link></h2>
        <h2><Link to='/tree:gather'>Spaces for gathering</Link></h2>
        <h2><Link to='/tree:break'>Spaces for taking a break</Link></h2>
      </div>
    </div>
  );
};

export default Home;
