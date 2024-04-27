import React from "react";
import Name from "./Name";
import State from "./State";

const Detail = () => {
  return (
    <div className="detail">
      <div className="box">
        <div className="left">
          <Name />
        </div>
        <div className="right">
          <State />
        </div>
      </div>
      <div className="final-report">
        <button className="report">Send Report</button>
        <button className="report">Download CSV</button>
      </div>
    </div>
  );
};

export default Detail;
