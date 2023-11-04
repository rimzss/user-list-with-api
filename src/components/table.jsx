import React from "react";

import User from "./user";

const Table = ({ users, setRefresh, refresh }) => {
  return (
    <div className="mt-16 shadow rounded-lg">
      <ul className="flex px-5">
        <li className="w-1/6">Зураг</li>
        <li className="w-1/6">Нэр</li>
        <li className="w-1/6">Овог</li>
        <li className="w-1/6">Төрсөн он сар</li>
        <li className="w-1/6">Хэлтэс</li>
        <li className="w-1/6">Үйлдлүүд</li>
      </ul>
      <User users={users} setRefresh={setRefresh} refresh={refresh} />
    </div>
  );
};

export default Table;
