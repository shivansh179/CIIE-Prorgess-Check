import React, { useState } from "react";
import Dropdown from "./Dropdown";
import students from "../students.json";

const User = () => {
  const [name, setName] = useState("");
  const [updatedStudents, setUpdatedStudents] = useState(students); // Maintain a separate state for updated data

  const updateName = (selectedOption) => {
    setName(selectedOption);
  };

  const handleSubmit = (index) => {
    const updatedStudentsCopy = [...updatedStudents]; // Create a copy of the updatedStudents array

    updatedStudentsCopy.forEach((student, studentIndex) => {
      // Check if the current student's index matches the one passed as an argument
      if (studentIndex === index) {
        student.State = name; // Update the state of the specific student
      }
    });

    setUpdatedStudents(updatedStudentsCopy); // Update the state with the modified student
    console.log(updatedStudentsCopy);
  };

  return (
    <div className="user">
      {updatedStudents.map((records, index) => (
        <div className="users" key={records.id}>
          <div className="about">
            <span>Name:{records.name}</span>
            <span>Year:{records.Year}</span>
            <span>Domain:{records.domain}</span>
            <br />
          </div>
          <div className="drop">
            <Dropdown onNameChange={updateName} />
            <button onClick={() => handleSubmit(index)}>Submit</button>{" "}
            {/* Pass the index as an argument */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
