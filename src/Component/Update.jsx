import React, { useState } from "react";
import State from "./State";
import Dropdown from "./Dropdown";

function MyComponent() {
  const [nameInput, setNameInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [domainInput, setDomainInput] = useState("");

  const handleAddOrUpdateData = async () => {
    try {
      // Load the JSON data from the server
      const response = await fetch("/members.json");
      if (!response.ok) {
        throw new Error("Failed to fetch JSON data");
      }
      const jsonData = await response.json();

      // Find if a member with the provided name already exists
      const existingMemberIndex = jsonData.findIndex(
        (member) => member.name === nameInput
      );

      // If member exists, update their data; otherwise, add a new member
      if (existingMemberIndex !== -1) {
        jsonData[existingMemberIndex] = {
          name: nameInput,
          Year: yearInput,
          domain: domainInput,
        };
      } else {
        jsonData.push({
          name: nameInput,
          Year: yearInput,
          domain: domainInput,
        });
      }

      // Serialize the updated data back into JSON format
      const updatedData = JSON.stringify(jsonData);

      // Update the members.json file with the new data
      const updateResponse = await fetch("/update-members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: updatedData,
      });

      if (updateResponse.ok) {
        console.log("Data added/updated successfully");
      } else {
        console.error("Failed to add/update data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Enter name"
      />
      <input
        type="text"
        value={yearInput}
        onChange={(e) => setYearInput(e.target.value)}
        placeholder="Enter year"
      />
      <input
        type="text"
        value={domainInput}
        onChange={(e) => setDomainInput(e.target.value)}
        placeholder="Enter domain"
      />
      <button onClick={handleAddOrUpdateData}>Add/Update Data</button>
    </div>
  );
}

export default MyComponent;
