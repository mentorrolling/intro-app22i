import React from "react";
import UserList from "./UserList";

const UserContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1>Lista de usuarios 🤩</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <h3>Lista con los usuarios</h3>
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
