import React from "react";
import { axiosRequest } from "../../request/NewAxiosRequest";

const DeleteCenter = ({ handleModalClose, inputValue, setInputValue }) => {
  const handleDeleteCenter = async () => {
    await axiosRequest
      .delete(`/center/delete/${parseInt(inputValue)}`)
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div
        onSubmit={handleDeleteCenter}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleModalClose}>
          ×
        </button>
        <span>Удалить центр</span>
        <div className="modal-content">
          ID-центра
          <input
            type="text"
            placeholder="Введите ID"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleDeleteCenter}>
            Сохранить
          </button>
          <button className="modal-button" onClick={handleModalClose}>
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCenter;
