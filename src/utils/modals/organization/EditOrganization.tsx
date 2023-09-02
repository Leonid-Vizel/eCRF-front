import React from 'react';
import { axiosCardRequest, axiosRequest } from '../../request/NewAxiosRequest';

const EditOrganization = ({
  modalType,
  handleModalClose,
  inputValue,
  setInputValue,
  organizationId,
  title,
  placeholder,
}) => {
  const handleEdit = async () => {
    await axiosCardRequest
      .patch('/Organization/Edit', {
        name: inputValue,
        id: organizationId,
      })
      .then(() => {
        window.location.reload();
      });
  };

  const handleEditIns = async () => {
    await axiosCardRequest
      .post('/Insurance/Edit/{id}', {
        name: inputValue,
        id: organizationId,
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div
        onSubmit={modalType === 'insurance' ? handleEditIns : handleEdit}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleModalClose}>
          ×
        </button>
        <span>{title}</span>
        Название
        <div className="modal-content">
          <input
            type="text"
            className="admin-panel-center-input"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button
            className="modal-button"
            onClick={modalType === 'insurance' ? handleEditIns : handleEdit}
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

export default EditOrganization;
