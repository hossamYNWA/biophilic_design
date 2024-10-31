import classes from "./home.module.css";
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
        <h2>Spaces for Formal Working</h2>
        <h2>Spaces for Informal Working</h2>
        <h2>Spaces for gathering</h2>
        <h2>Spaces for taking a break</h2>
      </div>
    </div>
  );
};

export default Home;
