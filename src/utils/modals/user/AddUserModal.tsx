import React, { useEffect, useState } from "react";
import { axiosCardRequest, axiosRequest } from "../../request/NewAxiosRequest";

const AddUserModal = ({
  handleModalClose,
  inputLoginValue,
  setInputLoginValue,
  inputPasswordValue,
  setInputPasswordValue,
  inputNameValue,
  setInputNameValue,
  selectValue,
  setSelectValue,
  organizationValue,
  centerValue,
  inputThirdNameValue,
  inputSecondValue,
  setInputThirdNameValue,
  setInputSecondValue,
}) => {
  const [organizationId, setOrgId] = useState<any>(null);
  const [center, setCenter] = useState<any>();
  const [centers, setCenters] = useState<any>();

  const handleRegisterUser = async () => {
    await axiosCardRequest
      .post("/user/register", {
        centerId: parseInt(centerValue),
        login: inputLoginValue,
        firstName: inputNameValue,
        secondName: inputSecondValue,
        thirdName: inputThirdNameValue,
        password: inputPasswordValue,
        role: parseInt(selectValue),
      })
      .then(() => {
        console.log("success");
        setTimeout(() => {
          handleModalClose();
        }, 1000);
        window.location.reload();
      });
  };

  useEffect(() => {
    const getCentersByOrg = async () => {
      const res = await axiosCardRequest.get(`/center/index/${organizationId}`);
      setCenters(res);
    };

    getCentersByOrg();
  }, [organizationId]);

  const handleOrganizationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setOrgId(event.target.value);
    setCenter(null);
  };

  const handleCenterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCenter(event.target.value);
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleModalClose}>
          ×
        </button>
        <span>Зарегистрировать пользователя</span>
        <div className="modal-content">
          Логин
          <input
            type="text"
            placeholder="Введите логин"
            value={inputLoginValue}
            onChange={(e) => setInputLoginValue(e.target.value)}
          />
          Пароль
          <input
            type="text"
            placeholder="Введите пароль"
            value={inputPasswordValue}
            onChange={(e) => setInputPasswordValue(e.target.value)}
          />
          Имя
          <input
            type="text"
            placeholder="Введите имя"
            value={inputNameValue}
            onChange={(e) => setInputNameValue(e.target.value)}
          />
          Фамилия
          <input
            type="text"
            placeholder="Введите фамилию"
            value={inputSecondValue}
            onChange={(e) => setInputSecondValue(e.target.value)}
          />
          Отчество
          <input
            type="text"
            placeholder="Введите отчество"
            value={inputThirdNameValue}
            onChange={(e) => setInputThirdNameValue(e.target.value)}
          />
          Роль
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value={0}>Администратор</option>
            <option value={1}>Исследователь</option>
            <option value={2}>Главный исследователь</option>
            <option value={3}>Монитор</option>
            <option value={4}>Дата менеджер</option>
            <option value={5}>Аудитор контроля качества</option>
            <option value={6}>Медицинский монитор</option>
            <option value={7}>Специалист по фармаконадзору</option>
          </select>
          Выберите организацию
          <select onChange={handleOrganizationChange}>
            <option value="">Выберите организацию</option>
            {organizationValue &&
              organizationValue.data.map((organization) => (
                <option key={organization.id} value={organization.id}>
                  {organization.name}
                </option>
              ))}
          </select>
          {organizationId !== null && (
            <>
              Центр
              <select onChange={handleCenterChange}>
                <option value="">Выберите центр</option>
                {centers && centers.data && (
                  <option key={centers.data.Id} value={centers.data.Id}>
                    {centers.data.Name}
                  </option>
                )}
              </select>
            </>
          )}
        </div>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleRegisterUser}>
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

export default AddUserModal;
