import React, { useEffect, useState } from "react";
import "./adminMain.scss";
import BlockInfo from "../../../components/blockInfo/BlockInfo";
import { Link, useNavigate } from "react-router-dom";
import AddUserModal from "../../../utils/modals/user/AddUserModal";
import EditUserModal from "../../../utils/modals/user/EditUserModal";
import DeleteUserModal from "../../../utils/modals/user/DeleteUserModal";
import AddCenterModal from "../../../utils/modals/center/AddCenterModal";
import EditCenterModal from "../../../utils/modals/center/EditCenterModal";
import CenterList from "../../../utils/modals/center/CenterList";
import {
  axiosCardRequest,
  axiosRequest,
} from "../../../utils/request/NewAxiosRequest";
import GetNameOfCenter from "../../../components/GetNameOfCenter";
import AddOrganization from "../../../utils/modals/organization/AddOrganization";
import EditOrganization from "../../../utils/modals/organization/EditOrganization";
import DeleteOrganization from "../../../utils/modals/organization/DeleteOrganization";
import DeleteCenter from "../../../utils/modals/center/DeleteCenter";
import Cookies from "js-cookie";

const AdminMain = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const [showAddOrganizations, setShowAddOrgs] = useState<boolean>(false);
  const [showEditOrganizations, setShowEditOrgs] = useState<boolean>(false);
  const [showDeleteOrg, setShowDeleteOrg] = useState<boolean>(false);
  const [orgInput, setOrgInput] = useState<string>("");

  const [showAddCenterModal, setShowAddCenterModal] = useState<boolean>(false);
  const [showEditCenterModal, setShowEditCenterModal] =
    useState<boolean>(false);
  const [showDeleteCenterModal, setShowDeleteCenterModal] =
    useState<boolean>(false);
  const [showCentersListModal, setCentersListModal] = useState<boolean>(false);

  const [inputCenterValue, setInputCenterValue] = useState<string>("");
  const [inputLoginValue, setInputLoginValue] = useState<string>("");
  const [inputPasswordValue, setInputPasswordValue] = useState<string>("");
  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputSecondValue, setInputSecondValue] = useState<string>("");
  const [inputThirdNameValue, setInputThirdNameValue] = useState<string>("");
  const [inputIdUserDelete, setInputIdUserDelete] = useState<string>("");

  const [insurance, setInsurance] = useState<any>("");
  const [insuranceId, setInsuranceId] = useState<any>("");
  const [showAddInsurance, setShowAddInsurance] = useState<boolean>(false);
  const [showEditInsurance, setShowEditInsurance] = useState<boolean>(false);
  const [showDeleteInsurance, setShowDeleteInsurance] =
    useState<boolean>(false);

  const [selectValue, setSelectValue] = useState<number | any>(1);
  const [centerValue, setCenterValue] = useState<number | any>(1);

  const [organizationId, setOrganizationId] = useState("");
  const [centerId, setCenterId] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //     const isAuth = cookiesData.cookieId
  //     if(!isAuth) {
  //         navigate('/')
  //     }
  // }, [])

  const handleAddUser = () => {
    setShowAddModal(true);
  };

  const handleEditUser = (userId) => {
    setUserId(userId);
    setShowEditModal(true);
  };

  const handleDeleteUser = () => {
    setShowDeleteModal(true);
  };

  const handleAddOrg = () => {
    setShowAddOrgs(true);
  };

  const handleEditOrg = (orgId) => {
    setOrganizationId(orgId);
    setShowEditOrgs(true);
  };

  const handleDeleteOrg = (orgId) => {
    setOrganizationId(orgId);
    setShowDeleteOrg(true);
  };

  const handleAddInsurance = () => {
    setShowAddInsurance(true);
  };

  const handleDelelteInsurance = (insId) => {
    setInsuranceId(insId);
    setShowDeleteInsurance(true);
  };

  const handleEditInsurance = (insId) => {
    setInsuranceId(insId);
    setShowEditInsurance(true);
  };

  const handleAddCenter = () => {
    setShowAddCenterModal(true);
  };

  const handleDeleteCenter = (centerId) => {
    setCenterId(centerId);
    setShowDeleteCenterModal(true);
  };

  const handleEditCenter = (centerId) => {
    setCenterId(centerId);
    setShowEditCenterModal(true);
  };

  const handleShowCentersList = () => {
    setCentersListModal(true);
  };

  const handleModalClose = () => {
    setShowAddOrgs(false);
    setShowEditOrgs(false);
    setShowDeleteOrg(false);
    setShowAddModal(false);
    setShowDeleteInsurance(false);
    setShowEditInsurance(false);
    setShowAddInsurance(false);
    setShowAddCenterModal(false);
    setShowEditCenterModal(false);
    setShowDeleteCenterModal(false);
    setShowEditModal(false);
    setShowDeleteModal(false);
    setCentersListModal(false);
    setInputNameValue("");
    setInputPasswordValue("");
    setInputLoginValue("");
    setOrgInput("");
    setSelectValue(1);
    setCenterValue(1);
  };

  const [users, setUsers] = useState<any>("");
  const [centers, setCenters] = useState<any>("");
  const [insurances, setInsurances] = useState<any>("");
  const [organizations, setOrganizations] = useState<any>("");

  useEffect(() => {
    const handleGetAllUsers: any = async () => {
      await axiosCardRequest("/user/list").then((res) => {
        setUsers(res);
      });
    };

    const headers = {
      Token: `${Cookies.get("token")}`,
      "Content-Type": "application/json",
    };

    const handleGetCenters: any = async () => {
      await axiosCardRequest("/center/list").then((res) => {
        setCenters(res);
      });
    };

    const handleGetInsurances: any = async () => {
      await axiosCardRequest("/Insurance/List").then((res) => {
        setInsurances(res);
      });
    };

    const getOrganizations: any = async () => {
      await axiosCardRequest.get("/Organisation/List").then((res) => {
        setOrganizations(res);
      });
    };

    handleGetCenters();
    handleGetAllUsers();
    getOrganizations();
    handleGetInsurances();
  }, []);

  return (
    <div className="admin-panel">
      <Link to="/journal">
        <button className="admin-panel-journal">Журнал операций</button>
      </Link>
      <BlockInfo text={"Панель администратора"} />
      <span>Работа с пользователями</span>
      <div className="admin-panel-actions">
        <button onClick={handleAddUser}>Добавление пользователя</button>
        <button onClick={handleDeleteUser}>Удаление пользователя</button>
      </div>
      <div className="admin-panel-table">
        <table className="admin-panel-data-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Логин</th>
              <th>Имя</th>
              <th>Организация</th>
              <th>Клинический центр</th>
              <th>Роль</th>
              <th>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {users.data &&
              users.data.map((item) => (
                <GetNameOfCenter
                  handleEditUser={handleEditUser}
                  id={item.id}
                  name={item.firstName}
                  email={item.login}
                  role={item.role}
                  center_id={item.centerId}
                  organizationId={item.center && item.center.organisationId}
                />
              ))}
          </tbody>
        </table>
      </div>

      <span>Работа с организациями</span>
      <div className="admin-panel-actions">
        <button onClick={handleAddOrg}>Добавление организации</button>
        <button onClick={handleDeleteOrg}>Удаление организации</button>
      </div>
      <div className="admin-panel-centre-table">
        <table className="admin-panel-data-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Название</th>
              <th>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {organizations.data &&
              organizations.data.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <button onClick={() => handleEditOrg(item.id)}>🖊️</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <span>Работа с клиническими центрами</span>
      <div className="admin-panel-actions">
        <button onClick={handleAddCenter}>Добавление центра</button>
        <button onClick={handleDeleteCenter}>Удаление центра</button>
      </div>
      <div className="admin-panel-centre-table">
        <table className="admin-panel-data-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Название</th>
              <th>Организация</th>
              <th>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {centers.data &&
              centers.data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.organisationId}</td>
                  <td>
                    <button onClick={() => handleEditCenter(item.id)}>
                      🖊️
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <span>Работа со страховыми медицинскими организациями</span>
      <div className="admin-panel-actions">
        <button onClick={handleAddInsurance}>
          Добавление страховой мединциской организации
        </button>
        <button onClick={handleDelelteInsurance}>
          Удаление страховой мединциской организации
        </button>
      </div>
      <div className="admin-panel-centre-table">
        <table className="admin-panel-data-table">
          <thead>
            <tr>
              <th>№</th>
              <th>id</th>
              <th>Название</th>
              <th>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {insurances.data &&
              insurances.data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <button onClick={() => handleEditInsurance(item.id)}>
                      🖊️
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/*добавление модалки пользователя*/}
      {showAddModal && (
        <AddUserModal
          handleModalClose={handleModalClose}
          inputLoginValue={inputLoginValue}
          setInputLoginValue={setInputLoginValue}
          inputPasswordValue={inputPasswordValue}
          setInputPasswordValue={setInputPasswordValue}
          inputNameValue={inputNameValue}
          inputThirdNameValue={inputThirdNameValue}
          inputSecondValue={inputSecondValue}
          setInputThirdNameValue={setInputThirdNameValue}
          setInputSecondValue={setInputSecondValue}
          setInputNameValue={setInputNameValue}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          organizationValue={organizations}
          centerValue={centerValue}
        />
      )}

      {/*добавление модалки редактирования пользователя*/}
      {showEditModal && (
        <EditUserModal
          handleModalClose={handleModalClose}
          inputLoginValue={inputLoginValue}
          setInputLoginValue={setInputLoginValue}
          inputPasswordValue={inputPasswordValue}
          setInputPasswordValue={setInputPasswordValue}
          inputNameValue={inputNameValue}
          setInputNameValue={setInputNameValue}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          organizationValue={organizations}
          centerValue={centerValue}
          setCenterValue={setCenterValue}
          userId={userId}
          inputThirdNameValue={inputThirdNameValue}
          inputSecondValue={inputSecondValue}
          setInputThirdNameValue={setInputThirdNameValue}
          setInputSecondValue={setInputSecondValue}
        />
      )}

      {showDeleteModal && (
        <DeleteUserModal
          handleModalClose={handleModalClose}
          inputIdUserDelete={inputIdUserDelete}
          setInputIdUserDelete={setInputIdUserDelete}
        />
      )}

      {showDeleteOrg && (
        <DeleteOrganization
          modalType={"organization"}
          handleModalClose={handleModalClose}
          inputValue={orgInput}
          setInputValue={setOrgInput}
        />
      )}

      {showDeleteInsurance && (
        <DeleteOrganization
          modalType={"insurance"}
          handleModalClose={handleModalClose}
          inputValue={orgInput}
          setInputValue={setOrgInput}
        />
      )}

      {showDeleteCenterModal && (
        <DeleteCenter
          handleModalClose={handleModalClose}
          inputValue={inputCenterValue}
          setInputValue={setInputCenterValue}
        />
      )}

      {showAddInsurance && (
        <AddOrganization
          modalType={"insurance"}
          handleModalClose={handleModalClose}
          inputOrgValue={insurance}
          setInputOrgValue={setInsurance}
          title={"Добавить страховую медицинскую организацию"}
          placeholder={"Введите название организации"}
        />
      )}

      {showEditInsurance && (
        <EditOrganization
          modalType={"insurance"}
          handleModalClose={handleModalClose}
          inputValue={insurance}
          setInputValue={setInsurance}
          organizationId={insuranceId}
          title={"Добавить страховую медицинскую организацию"}
          placeholder={"Введите название организации"}
        />
      )}

      {showAddOrganizations && (
        <AddOrganization
          modalType={"organization"}
          handleModalClose={handleModalClose}
          inputOrgValue={orgInput}
          setInputOrgValue={setOrgInput}
          title={"Добавить организацию"}
          placeholder={"Введите название организации"}
        />
      )}

      {showEditOrganizations && (
        <EditOrganization
          modalType={"organization"}
          handleModalClose={handleModalClose}
          inputValue={orgInput}
          setInputValue={setOrgInput}
          organizationId={organizationId}
          title={"Изменить название центра"}
          placeholder={"Введите название центра"}
        />
      )}

      {/*добавление модалки центра*/}
      {showAddCenterModal && (
        <AddCenterModal
          handleModalClose={handleModalClose}
          inputCenterValue={inputCenterValue}
          setInputCenterValue={setInputCenterValue}
          organizationValue={organizations}
        />
      )}

      {/*добавление модалки для редактирования*/}
      {showEditCenterModal && (
        <EditCenterModal
          handleModalClose={handleModalClose}
          inputCenterValue={inputCenterValue}
          setInputCenterValue={setInputCenterValue}
          centerId={centerId}
          organizationValue={organizations}
        />
      )}

      {/*добавление модалки для списка центров*/}
      {showCentersListModal && (
        <CenterList handleModalClose={handleModalClose} />
      )}
    </div>
  );
};

export default AdminMain;
