import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import User from "./User";
import DownloadCSV from "./DownloadCSV";
import students from "../students.json";

const Detail = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(students); // Set initial data
  }, []); // Empty dependency array to run only once after mount

  // Listen for the "updatedData" event dispatched by User.js
  const handleUpdatedData = (event) => {
    setJsonData(event.detail); // Update jsonData with received data
  };

  useEffect(() => {
    window.addEventListener("updatedData", handleUpdatedData);

    return () => {
      window.removeEventListener("updatedData", handleUpdatedData); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="detail">
      <div className="box">
        <Navbar />
        <User />
      </div>
      <div className="buttons">
        <button className="Send Report">Send Report</button>
        <DownloadCSV jsonData={jsonData} filename="updated_students.csv" />
      </div>
    </div>
  );
};

export default Detail;
