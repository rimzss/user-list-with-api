import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Ask from "./Ask";

const User = ({ users, setRefresh, refresh, handleUpdate }) => {
  const [deleteSure, setDeleteSure] = useState(false);
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
      setDeleteSure(false);
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
              <button
                className="btn mr-3 w-1/3"
                onClick={() => {
                  handleUpdate(user.id);
                }}
              >
                edit
              </button>
              <button
                className="btn btn-error w-1/3"
                onClick={() => {
                  setDeleteSure(true);
                }}
                // onClick={deleteUser.bind(this, user.id)}
              >
                Delete
              </button>
              <Ask
                setDeleteSure={setDeleteSure}
                deleteSure={deleteSure}
                userId={user.id}
                deleteUser={deleteUser}
              />
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default User;
