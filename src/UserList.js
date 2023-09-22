import React from "react";
import User from "./user";
import classes from './UserList.module.css'

const UserList = (props) => {
  return (
    <>
    <ul>
      {props.users.map((user) => (
        <User className = {classes.container}
          name={user.name}
          department={user.department}
          img={user.img_url}
          dob={user.dob}
        />
      ))}
    </ul>
    </>
  );
};

export default UserList;
