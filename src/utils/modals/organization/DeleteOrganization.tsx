import React from "react";
import { axiosCardRequest, axiosRequest } from "../../request/NewAxiosRequest";

const DeleteOrganization = ({
  modalType,
  handleModalClose,
  inputValue,
  setInputValue,
}) => {
  const handleDeleteOrg = async () => {
    await axiosCardRequest
      .delete(`/organisation/delete/${parseInt(inputValue)}`)
      .then(() => {
        window.location.reload();
      });
  };

  const handleDeleteIns = async () => {
    await axiosCardRequest
      .post(`/Insurance/Delete/${parseInt(inputValue)}`)
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div
        onSubmit={modalType === "insurance" ? handleDeleteIns : handleDeleteOrg}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleModalClose}>
          ×
        </button>
        <span>Удалить организацию</span>
        <div className="modal-content">
          ID-организации
          <input
            type="text"
            placeholder="Введите ID"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button
            className="modal-button"
            onClick={
              modalType === "insurance" ? handleDeleteIns : handleDeleteOrg
            }
          >
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

export default DeleteOrganization;
