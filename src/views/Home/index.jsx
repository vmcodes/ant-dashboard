import React from "react";
import Welcome from "./components/Welcome";
import Rectangles from "./components/Rectangles";
import Activity from "./components/Activity";

const Home = () => {
  return (
    <React.Fragment>
      <Welcome />

      <Rectangles />

      <Activity />
    </React.Fragment>
  );
};

export default Home;
