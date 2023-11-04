import React from "react";
import Button from "@mui/material/Button";

const SearchBar = ({ setOpen }) => {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        placeholder="Search user by name"
        className="input bg-white w-2/3"
      />
      <Button
        variant="contained"
        color="success"
        className="bg-[#409645]"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add user
      </Button>
    </div>
  );
};

export default SearchBar;
