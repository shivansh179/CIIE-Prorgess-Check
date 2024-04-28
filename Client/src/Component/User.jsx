import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from './Dropdown';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const handleStatusChange = (selectedStatus, user) => {
    console.log("Selected status for", user.name, ":", selectedStatus);
     
  };

  return (
    <div className="main">
      {users.map((user) => {
        return (
          <div className="detail" key={user._id}>  
            <div className="personal">
              <div><span>Name: </span>{user.name}</div>
              <div><span>Reg No.:</span>{user.Registration_number}</div>
              <div><span>Year :</span>{user.year}</div>
              <div><span>Domain :</span> {user.domain}</div>
              <br />
            </div>
            <div className="status">
              <span>{user.status}</span>
              <Dropdown onNameChange={(selectedStatus) => handleStatusChange(selectedStatus, user)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
