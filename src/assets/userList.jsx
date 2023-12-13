import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  console.log(listOfUsers);
  return (
    <div>
      <h1 className="heading">List of Users</h1>
      <div className="users">
        {listOfUsers.map((user) => (
          <div className="user--card" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
