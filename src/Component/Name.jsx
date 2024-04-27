import React from "react";
import Members from "../students.json";
import { Link } from "react-router-dom";
import AdvanceDetail from "./AdvanceDetail";
import { useState } from "react";

const Name = () => {
  let i = 1;

  return (
    <div className="name">
      <div className="conatiner">
        <span className="name-heading">Name</span>
      </div>
      {Members.map((member) => {
        return (
          <Link to="./AdvanceDetail.jsx" className="redirect">
            <div className="student">
              <div>{i++}</div>
              <div>
                <strong>Name :</strong>
                {member.name}
              </div>
              <div>
                <strong>Year :</strong>
                {member.Year}
              </div>
              <div>
                <strong>Domain :</strong>
                {member.domain}
              </div>
              <br />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Name;
