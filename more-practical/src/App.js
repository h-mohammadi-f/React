import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, { name: uName, age: uAge, id:Math.random().toString() }];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </Fragment>
  );
}

export default App;
