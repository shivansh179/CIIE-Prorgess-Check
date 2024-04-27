import React, { useState } from "react";

const Dropdown = ({ onNameChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (onNameChange) {
      // Check if the prop is passed
      onNameChange(event.target.value); // Call the passed-down function with the selected option
    }
  };

  return (
    <div>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="custom-dropdown"
      >
        <option value="Done" className="option1">
          Done
        </option>
        <option value="Stuck" className="option2">
          Stuck
        </option>
        <option value="Working" className="option3">
          Working
        </option>
        <option value="Not Active" className="option3">
          Not Active
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
