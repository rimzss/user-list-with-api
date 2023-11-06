import React, { useState } from "react";

const Form = ({ open, closeForm, setSelectedUser, selectedUser }) => {
  const [imgData, setImgData] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const [formData, setFormData] = useState({
    avatarUrl: "",
    name: "",
    lastName: "",
    email: "",
    birthDate: "",
    department: "",
  });

  const handleChange = (e) => {
    if (selectedUser) {
      console.log("inputing", e.target.value);
      setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    } else {
      console.log("INPUTING", e.target.value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const saveData = async () => {
    try {
      setIsloading(true);
      if (selectedUser) {
        const { message } = await fetch(
          "http://localhost:8008/api/users/" + selectedUser.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedUser),
          }
        );
      } else {
        const { message } = await fetch("http://localhost:8008/api/users/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }
    } catch (error) {
      console.log("ERR", error);
    } finally {
      setIsloading(false);
      closeForm();
    }
  };

  return (
    <dialog className={`modal bg-black bg-opacity-50`} open={open}>
      <div className="modal-box bg-white">
        <h3 className="font-bold text-lg text-center">
          {selectedUser
            ? "Хэрэглэгч мэдээлэл засах форм "
            : "Шинэ хэрэглэгч нэмэх форм"}
        </h3>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Нэр</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="нэрээ оруулна уу"
              className="w-full input input-bordered input-primary bg-white"
              onChange={handleChange}
              value={selectedUser ? selectedUser.name : formData.name}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Овог</span>
            </label>
            <input
              name="lastName"
              type="text"
              placeholder="овог оруулна уу"
              className="w-full input input-bordered input-primary bg-white"
              onChange={handleChange}
              value={selectedUser ? selectedUser.lastName : formData.lastName}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">И-мэйл</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="таны имэйл"
              className="w-full input input-bordered input-primary bg-white"
              onChange={handleChange}
              value={selectedUser ? selectedUser.email : formData.email}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Төрсөн он сар</span>
            </label>
            <input
              name="birthDate"
              type="date"
              placeholder="төрсөн он сараа оруулна уу"
              className="w-full input input-bordered input-primary bg-white"
              onChange={handleChange}
              value={selectedUser ? selectedUser.birthDate : formData.birthDate}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Хэлтэс</span>
            </label>
            <select
              name="department"
              className="select select-primary w-full max-w-xs bg-white"
              onChange={handleChange}
              value={
                selectedUser ? selectedUser.department : formData.department
              }
            >
              <option disabled selected>
                Та хэлтэсээ сонгоно уу
              </option>
              <option value="marketing">Маркетинг</option>
              <option value="human resource">Хүний нөөц</option>
              <option value="technology">Технологи</option>
              <option value="finance">Санхүү</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Зураг оруулна уу</span>
            </label>
            <input
              name="avatarUrl"
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs bg-white"
              accept="image/*"
            />
          </div>
          <div>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={imgData} alt="pic" />
              </div>
            </div>
          </div>
        </form>
        <div className="modal-action">
          <button className="btn" onClick={closeForm}>
            Close
          </button>
          <button className="btn btn-primary" onClick={saveData}>
            {isLoading && <span className="loading loading-spinner"></span>}
            Save
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Form;
