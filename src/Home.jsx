import React from "react";

import Description from "./Component/Description";
import Detail from "./Component/Detail";
import students from "./students.json";

const Home = () => {
  return (
    <div className="home">
      <Description />
      <Detail />
    </div>
  );
};

export default Home;
