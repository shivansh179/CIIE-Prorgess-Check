import React from "react";

import Details from "./Component/Detail";
import User from "./Component/User";
import AddData from "./Component/AddData";
import Description from './Component/Description.jsx';

const Home = () => {
  return (
    <div className="home">
      <Description/>
      <Details />
     <AddData/>
    </div>
  );
};

export default Home;
