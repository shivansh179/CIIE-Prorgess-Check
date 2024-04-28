import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import students from "../students.json";
import { Link } from "react-router-dom";

const User = () => {
  const [updatedStudents, setUpdatedStudents] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("updatedStudents");
    if (storedData) {
      setUpdatedStudents(JSON.parse(storedData));
    } else {
      setUpdatedStudents(students);
    }
  }, []);

  const updateName = (selectedOption, index) => {
    const updatedStudentsCopy = [...updatedStudents];
    updatedStudentsCopy[index].state = selectedOption;
    setUpdatedStudents(updatedStudentsCopy);
    localStorage.setItem(
      "updatedStudents",
      JSON.stringify(updatedStudentsCopy)
    );
  };

  return (
    <div className="user">
      {updatedStudents.map((student, index) => (
        <div className="users" key={student.id}>
          <div className="about">
            <span>Name: {student.name}</span>
            <span>Year: {student.Year}</span>
            <span>Domain: {student.domain}</span>
            <div>
              <Link to="./AdvanceDescription.jsx">Detail</Link>
            </div>
            <br />
          </div>
          <div className="drop">
            <Dropdown
              onNameChange={(selectedOption) =>
                updateName(selectedOption, index)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
