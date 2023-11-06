import React from "react";

const Ask = ({ deleteSure, userId, deleteUser, setDeleteSure }) => {
  return (
    <dialog open={deleteSure} className="modal">
      <div className="modal-box flex justify-center items-center flex-col">
        <img
          src="https://media3.giphy.com/media/TxfZ3ARFjpWgELUMCI/giphy.gif"
          alt=""
        />
        <h3 className="font-bold text-lg">Are you sure to delete</h3>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn mr-2"
              onClick={() => {
                setDeleteSure(false);
              }}
            >
              No
            </button>
            <button
              className="btn btn-error"
              onClick={deleteUser.bind(this, userId)}
            >
              Yes
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Ask;
