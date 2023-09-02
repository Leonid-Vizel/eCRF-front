import React, { useState } from "react";
import { axiosCardRequest, axiosRequest } from "../../request/NewAxiosRequest";

const EditCenterModal = ({
  handleModalClose,
  inputCenterValue,
  setInputCenterValue,
  centerId,
  organizationValue,
}) => {
  const [orgId, setOrgId] = useState<any>();

  const handleEditCenter = async () => {
    await axiosCardRequest
      .patch("/center/edit", {
        name: inputCenterValue,
        id: parseInt(centerId),
        organisationId: parseInt(orgId),
      })
      .then(() => {
        console.log("success");
        window.location.reload();
      })
      .finally(() => {
        console.log("second success");
      });
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div
        onSubmit={handleEditCenter}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleModalClose}>
          ×
        </button>
        <span>Изменить название центра</span>
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
            placeholder={"Выберите"}
            onChange={(e) => {
              setOrgId(e.target.value);
            }}
          >
            <option value="">Выберите</option>
            {organizationValue &&
              organizationValue.data.map((organization) => (
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
          <button className="modal-button" onClick={handleEditCenter}>
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

export default EditCenterModal;
