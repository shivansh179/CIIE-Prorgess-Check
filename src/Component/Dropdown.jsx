import React from "react";
import { useState, useEffect } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="dropdown"
      >
        <option value="stuck" className="Stuck">
          Stuck
        </option>
        <option value="Done" className="Done">
          Done
        </option>
        <option value="Working" className="Working">
          Working
        </option>
        <option value="Not Started" className="Not Started">
          Not Started
        </option>
      </select>
      {console.log(selectedOption)}
      <button>Submit</button>
    </div>
  );
};

export default Dropdown;
