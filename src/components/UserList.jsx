import React from "react";
import { usuarios } from "../datos/usuarios";

import "../css/tarjetas.css";
import UserItem from "./UserItem";

const UserList = () => {
  console.log(usuarios);

  return (
    <div>
      {/* tarjetas  */}
      {usuarios.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default UserList;
