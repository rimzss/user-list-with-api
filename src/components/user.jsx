import React from "react";
import Avatar from "@mui/material/Avatar";

const User = ({ users, setRefresh, refresh }) => {
  const deleteUser = async (id) => {
    try {
      const { message } = await fetch(`http://localhost:8008/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "applicatuin/json",
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setRefresh(!refresh);
    }
  };

  return (
    <div className="bg-white">
      {users.map((user) => {
        return (
          <ul key={user.id} className="flex py-2 px-5 items-center text-black">
            <div className="w-1/6">
              <Avatar src="" />
            </div>
            <h1 className="w-1/6">{user.name}</h1>
            <h1 className="w-1/6">{user.lastName}</h1>
            <h1 className="w-1/6">{user.birthDate}</h1>
            <h1 className="w-1/6">{user.department}</h1>
            <div className="w-1/6">
              <button className="btn btn-primary mr-3 w-1/3">edit</button>
              <button
                className="btn btn-error w-1/3"
                onClick={deleteUser.bind(this, user.id)}
              >
                Delete
              </button>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default User;
