import React, { useEffect, useState } from 'react';
import { axiosCardRequest, axiosRequest } from '../../request/NewAxiosRequest';

const EditUserModal = ({
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
  setCenterValue,
  userId,
  inputThirdNameValue,
  inputSecondValue,
  setInputThirdNameValue,
  setInputSecondValue,
}) => {
  const [organizationId, setOrgId] = useState<any>(null);
  const [center, setCenter] = useState<any>();
  const [centers, setCenters] = useState<any>();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const getCentersByOrg = async () => {
      const res = await axiosCardRequest.get(`/center/index/${organizationId}`);
      setCenters(res);
    };

    getCentersByOrg();
  }, [organizationId]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axiosCardRequest.get(`/user/index/${userId}`);
      setUser(res.data);
    };

    getUser();
  }, []);

  const handleEditUser = async () => {
    await axiosCardRequest
      .post('/user/edit', {
        // ...user,
        CenterId: parseInt(centerValue),
        Login: inputLoginValue,
        FirstName: inputNameValue,
        SecondName: inputSecondValue,
        ThirdName: inputThirdNameValue,
        Password: inputPasswordValue,
        Role: parseInt(selectValue),
        Id: parseInt(userId),
        // organization_id: organizationId,
      })
      .then(() => {
        console.log('success');
        setTimeout(() => {
          handleModalClose();
        }, 1000);
        window.location.reload();
      });
  };

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
        <span>Редактировать пользователя</span>
        <div className="modal-content">
          Логин
          <input
            type="text"
            placeholder={user ? user.Login : inputLoginValue}
            value={inputLoginValue}
            onChange={(e) => setInputLoginValue(e.target.value)}
          />
          Пароль
          <input
            type="text"
            placeholder={user ? user.Password : inputPasswordValue}
            value={inputPasswordValue}
            onChange={(e) => setInputPasswordValue(e.target.value)}
          />
          Имя
          <input
            type="text"
            placeholder={user ? user.FirstName : inputNameValue}
            value={inputNameValue}
            onChange={(e) => setInputNameValue(e.target.value)}
          />
          Фамилия
          <input
            type="text"
            placeholder={user ? user.SecondName : inputSecondValue}
            value={inputSecondValue}
            onChange={(e) => setInputSecondValue(e.target.value)}
          />
          Отчество
          <input
            type="text"
            placeholder={user ? user.ThirdName : inputThirdNameValue}
            value={inputThirdNameValue}
            onChange={(e) => setInputThirdNameValue(e.target.value)}
          />
          Роль
          <select
            placeholder={user ? user.Role : selectValue}
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
            {organizationValue
              && organizationValue.data.map((organization) => (
                <option key={organization.id} value={organization.id}>
                  {organization.name}
                </option>
              ))}
          </select>
          Центр
          <select onChange={handleCenterChange}>
            <option value="">Выберите центр</option>
            {centers && centers.data && (
              <option key={centers.data.Id} value={centers.data.Id}>
                {centers.data.Name}
              </option>
            )}
          </select>
        </div>
        <div className="modal-actions">
          <button className="modal-button" onClick={handleEditUser}>
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

export default EditUserModal;
