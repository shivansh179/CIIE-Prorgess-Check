import React, { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="custom-dropdown"
      >
        <option value="option1" className="option1">
          Done
        </option>
        <option value="option2" className="option2">
          Stuck
        </option>
        <option value="option3" className="option3">
          Working
        </option>
        <option value="option3" className="option3">
          Not Active
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
