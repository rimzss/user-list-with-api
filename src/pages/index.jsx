import React, { useEffect, useState } from "react";

import SearchBar from "@/components/searchbar";
import Table from "@/components/table";
import Form from "@/components/Form";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [userList, setUserList] = useState([]);

  const closeForm = () => {
    setOpen(false);
    setCount(5);
    setRefresh(!refresh);
  };

  const getAllUser = async () => {
    const { users } = await fetch("http://localhost:8008/api/users").then(
      (res) => res.json()
    );
    setUserList(users);
  };

  useEffect(() => {
    getAllUser();
  }, [refresh]);
  return (
    <main className="bg-[#f5f5f5] p-10 w-screen h-screen">
      <SearchBar count={count} setOpen={setOpen} />
      <Table users={userList} setRefresh={setRefresh} refresh={refresh} />
      <Form open={open} closeForm={closeForm} />
    </main>
  );
}
