import React, { useState } from 'react';
import { axiosCardRequest, axiosRequest } from '../../request/NewAxiosRequest';

const AddCenterModal = ({
  handleModalClose,
  inputCenterValue,
  setInputCenterValue,
  organizationValue,
}) => {
  const [orgId, setOrgId] = useState<any>();
  const handleAddCenter = async () => {
    await axiosCardRequest
      .post('/center/create', {
        name: inputCenterValue,
        organizationId: parseInt(orgId),
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div
        onSubmit={handleAddCenter}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleModalClose}>
          ×
        </button>
        <span>Добавить центр</span>
        Название
        <div className="modal-content">
          <input
            type="text"
            className="admin-panel-center-input"
            placeholder="Введите название центра"
            value={inputCenterValue}
            onChange={(e) => setInputCenterValue(e.target.value)}
          />
          Выберите организацию
          <select
            placeholder="Выберите"
            onChange={(e) => {
              setOrgId(e.target.value);
            }}
          >
            <option value="">Выберите</option>
            {organizationValue
              && organizationValue.data.map((organization) => (
                <option
                  key={organization.organisationId}
                  value={organization.organisationId}
                >
                  {organization.name}
                </option>
              ))}
          </select>
        </div>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleAddCenter}>
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

export default AddCenterModal;
