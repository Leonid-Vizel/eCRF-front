import React from 'react';
import Cookies from 'js-cookie';
import { axiosCardRequest, axiosRequest } from '../../request/NewAxiosRequest';

const AddOrganization = ({
  modalType,
  handleModalClose,
  inputOrgValue,
  setInputOrgValue,
  title,
  placeholder,
}) => {
  const handleAddOrg = async () => {
    await axiosCardRequest
      .post('/Organisation/Create', {
        name: inputOrgValue,
      })
      .then(() => {
        console.log('success');
        setTimeout(() => {
          handleModalClose();
        }, 1000);
        window.location.reload();
      });
  };

  const handleAddIns = async () => {
    await axiosCardRequest
      .post('/Insurance/Create', {
        name: inputOrgValue,
      })
      .then(() => {
        console.log('success');
        setTimeout(() => {
          handleModalClose();
        }, 1000);
        window.location.reload();
      });
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div
        // onSubmit={modalType === "insurance" ? handleAddIns : handleAddOrg}
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
            value={inputOrgValue}
            onChange={(e) => setInputOrgValue(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button
            onClick={modalType === 'insurance' ? handleAddIns : handleAddOrg}
            className="modal-button"
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

export default AddOrganization;
