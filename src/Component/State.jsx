import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Members from "../students.json";
const State = () => {
  return (
    <div className="name">
      <div className="conatiner">
        <span className="name-heading">State</span>
      </div>
      {Members.map((member, index) => (
        <div key={index}>
          <Dropdown />
        </div>
      ))}
    </div>
  );
};

export default State;
