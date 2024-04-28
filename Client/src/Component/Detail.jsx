import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import { Link } from "react-router-dom";
import AddData from "./AddData";

const Detail = () => {
  return (
    <div className="detail">
      <div className="box">
        <Navbar />
        <User />
      </div>
      <div className="buttons">
        <button className="Send Report">Send Report</button>
        <button className="Add Student">
          <Link to = './AddData.jsx'>Add Students</Link>
        </button>
      </div>
    </div>
  );
};

export default Detail;
