import React from "react";
import Navbar from "./Navbar";
import User from "./User";

const Detail = () => {
  return (
    <div className="detail">
      <div className="box">
        <Navbar />
        <User />
      </div>
      <div className="buttons">
        <button className="Send Report">Send Report</button>
        <button className="Download CSV">Download CSV</button>
      </div>

      <button></button>
    </div>
  );
};

export default Detail;
