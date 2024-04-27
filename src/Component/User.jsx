import React from "react";
import Dropdown from "./Dropdown";
import students from "../students.json";

const User = () => {
  return (
    <div className="user">
      {students.map((records) => {
        return (
          <div className="users">
            <div className="about">
              <span>Name:{records.name}</span>
              <span>Year:{records.Year}</span>
              <span>Domain:{records.domain}</span>
              <br />
            </div>
            <div className="drop">
              <Dropdown />
              <button>Submit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
