import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import BlockInfo from "../../components/blockInfo/BlockInfo";
import "./main.scss";
import { cookiesData } from "../../utils/cookies/getCookies";
import { useAppDispatch, useAppSelector } from "../../store/redux-hook";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { protocolSelector } from "../../store/protocolSlice/protocolSelector";
import {
  addProtocols,
  addProtocolSuccess,
  deleteProtocols,
  deleteProtocolSuccess,
  editProtocols,
  getProtocols,
} from "../../store/protocolSlice/protocolSlice";
import { getCenters } from "../../store/centerSlice/centerSlice";
import { centerSelector } from "../../store/centerSlice/centerSelector";
import {
  axiosCardRequest,
  axiosRequest,
} from "../../utils/request/NewAxiosRequest";
import CheckAuth from "../../utils/CheckAuth";

const Main = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setEditModal] = useState<boolean>(false);
  const [showDeleteModal, setDeleteModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<number | any>(null);
  const [centerValue, setCenterValue] = useState<number | any>(null);
  const [organizationValue, setOrganizationValue] = useState<number | any>(
    null,
  );
  const [selectedProtocolId, setSelectedProtocolId] = useState<number | null>(
    null,
  );
  const [deleteId, setDeleteId] = useState("");

  const [protocolNum, setProtocolNum] = useState<any>(0);

  const location: any = useLocation();
  const filter = parseInt(location.pathname.split("/").pop().split("=")[1]);

  const dispatch = useAppDispatch();
  const { protocol } = useAppSelector(protocolSelector);
  const { data } = useAppSelector(centerSelector);

  const [orgs, setOrgs] = useState<any>();
  const [centers, setCenters] = useState<any>("");
  const [filtered, setFiltered] = useState<any>();

  const navigate = useNavigate();

  // useEffect(() => {
  //     const isAuth = cookiesData.cookieId
  //     if(!isAuth) {
  //         navigate('/')
  //     }
  // }, [])

  useEffect(() => {
    const getAllOrganizations: any = async () => {
      await axiosCardRequest.get("/Organisation/List").then((res) => {
        setOrgs(res);
      });
    };

    getAllOrganizations();
  }, [organizationValue]);

  const [organization, setOrganization] = useState<any>();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const getProtocol: any = async () => {
      try {
        await dispatch<any>(
          getProtocols({
            filter: filter,
            user_centerId: parseInt(cookiesData.cookieCenterId),
          }),
        );
      } catch (error) {
        console.log(error);
      }
    };

    const getCenter: any = async () => {
      await dispatch<any>(
        getCenters({ id: parseInt(cookiesData.cookieCenterId) }),
      );
    };

    const getAllCenters: any = async () => {
      await axiosCardRequest.get("/center/list").then((res) => {
        setCenters(res);
      });
    };

    const getFilteredProtocols: any = async () => {
      await axiosCardRequest
        .get(
          `/protocol/list?sort=${filter}&center=${+cookiesData.cookieCenterId}`,
        )
        .then((res) => {
          setFiltered(res);
        });
    };

    const getUser: any = async () => {
      const res = await axiosCardRequest.get(
        `/user/index/${+cookiesData.cookieId}`,
      );
      setUser(res);
    };

    // const getUserOrganization: any = async () => {
    //   const res = await axiosCardRequest.get(`/organization/name/${1}`);
    //   setOrganization(res);
    // };

    getUser();
    getCenter();
    getProtocol();
    getAllCenters();
    // getUserOrganization();
    getFilteredProtocols();
  }, [deleteProtocols, addProtocols]);

  const handleAddProtocol = () => {
    setShowAddModal(true);
  };

  const handleShowDeleteProtocol = (id) => {
    setDeleteModal(true);
    setDeleteId(id);
  };

  const [protocolOldName, setProtocolOldName] = useState("");
  const [protocolOldStatus, setProtocolOldStatus] = useState(0);
  const handleEditProtocol = (
    protocolId: number,
    oldName: string,
    oldStatus: number,
  ) => {
    setSelectedProtocolId(protocolId);
    setProtocolOldName(oldName);
    setProtocolOldStatus(oldStatus);
    setEditModal(true);
  };

  const handleModalClose = () => {
    setOrganizationValue(null);
    setShowAddModal(false);
    setEditModal(false);
    setDeleteModal(false);
    setInputValue("");
    setSelectValue(1);
    setCenterValue(1);
    setSelectedProtocolId(null);
  };

  //отправление запроса на добавление
  const handleSaveProtocol = async () => {
    try {
      await dispatch<any>(
        addProtocols({
          centerID: parseInt(centerValue),
          name: inputValue,
          status: parseInt(selectValue),
          number: protocolNum,
        }),
      );
      await window.location.reload();
    } catch (e) {
      console.log(e);
    }

    handleModalClose();
  };

  const editProtocol = async (id) => {
    await dispatch<any>(
      editProtocols({
        centerID: parseInt(centerValue),
        status: parseInt(selectValue),
        name: inputValue,
        id: parseInt(id),
        number: protocolNum,
      }),
    );
    await window.location.reload();
  };

  //для того чтобы в селекте значение не было строкой
  const handleChange = (event) => {
    event.preventDefault();
    const value = parseInt(event.target.value, 10);
    setSelectValue(value);
  };

  const handleDeleteProtocol = async (id) => {
    await dispatch<any>(deleteProtocols({ id }));
    dispatch(deleteProtocolSuccess(id));
    setDeleteModal(false);
    window.location.reload();
  };

  const handleFilterProtocols = async (event) => {
    const filterValue = event.target.value;
    if (filterValue === "number") return;
    navigate(`/main/filter=${filterValue}`);
    window.location.reload();
  };

  return (
    <div className="main">
      <BlockInfo text={"Список протоколов"} />
      <div className="main-form">
        <div className="main-form-top">
          <select onChange={handleFilterProtocols}>
            <option value="number">Фильтр</option>
            <option value="0">По номеру</option>
            <option value="1">По имени</option>
            <option value="3">По клиническому центру</option>
            <option value="2">По статусу</option>
          </select>
          <button onClick={handleAddProtocol}>Добавить протокол</button>
        </div>
        <div className="main-form-bottom">
          <table className="data-table">
            <thead>
              <tr>
                <th>Действие</th>
                <th>№ п/п</th>
                <th>Название</th>
                {/*<th>Организация</th>*/}
                <th>Клинический центр</th>
                <th>Статус</th>
                <th>Перейти к ИРК</th>
                <th>Перейти к картам</th>
              </tr>
            </thead>
            <tbody>
              {location.pathname === "/main/filter=0" ? (
                <>
                  {protocol &&
                    protocol.map((item) => (
                      <tr key={item.Id}>
                        <td>
                          <button
                            onClick={() =>
                              handleEditProtocol(
                                item.Id,
                                item.Name,
                                item.Status,
                              )
                            }
                          >
                            🖊️
                          </button>
                          <button
                            onClick={() => handleShowDeleteProtocol(item.Id)}
                          >
                            🗑️
                          </button>
                        </td>
                        <td>{item.Number}</td>
                        <td>{item.Name}</td>
                        {/*<td>{item.orgranization_id}</td>*/}
                        <td>{data && data.message}</td>
                        <td>{item.status === 1 ? "Активен" : "Неактивен"}</td>
                        <td>
                          <Link
                            to={`/protocol/${item.Id}/${cookiesData.cookieId}`}
                          >
                            <button>📑</button>
                          </Link>
                        </td>
                        {/*todo изменить когда бэк будет готов*/}
                        <td>
                          <Link to={`/documents/${item.Id}`}>
                            <button>📑</button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </>
              ) : (
                <>
                  {filtered &&
                    filtered.data &&
                    filtered.data.map((item) => (
                      <tr key={item.Id}>
                        <td>
                          <button
                            onClick={() =>
                              handleEditProtocol(
                                item.Id,
                                item.Name,
                                item.Status,
                              )
                            }
                          >
                            🖊️
                          </button>
                          <button
                            onClick={() => handleShowDeleteProtocol(item.Id)}
                          >
                            🗑️
                          </button>
                        </td>
                        <td>{item.number}</td>
                        <td>{item.name}</td>
                        <td>{data && data.message}</td>
                        <td>{item.status === 1 ? "Активен" : "Неактивен"}</td>
                        <td>
                          <Link
                            to={`/protocol/${item.Id}/${cookiesData.cookieId}`}
                          >
                            <button>📑</button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/*модалка добавления*/}
      {showAddModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>
              ×
            </button>
            <span>Добавить протокол</span>
            <div className="modal-content">
              Название
              <input
                type="text"
                placeholder="Введите название"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              Введите номер протокола
              <input
                type="number"
                min={0}
                placeholder="Введите номер"
                value={protocolNum}
                onChange={(e) => setProtocolNum(e.target.value)}
              />
              Статус
              <select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <option value="" disabled selected>
                  Выберите
                </option>
                <option value={1}>Активный</option>
                <option value={0}>Неактивный</option>
              </select>
              Организация
              <select onChange={(e) => setOrganizationValue(e.target.value)}>
                <option value={null} disabled selected>
                  Выберите
                </option>
                {orgs &&
                  orgs.data.map((center) => (
                    <option
                      key={center.organization_id}
                      value={center.organization_id}
                    >
                      {center.name}
                    </option>
                  ))}
              </select>
              {organizationValue && (
                <>
                  Центр
                  <select
                    // value={centerValue}
                    onChange={(e) => setCenterValue(e.target.value)}
                  >
                    <option value={null} disabled selected>
                      Выберите
                    </option>
                    {centers &&
                      centers.data.map((center) => (
                        <option key={center.id} value={center.id}>
                          {center.name}
                        </option>
                      ))}
                  </select>
                </>
              )}
            </div>
            <div className="modal-actions">
              <button className="modal-button" onClick={handleSaveProtocol}>
                Сохранить
              </button>
              <button className="modal-button" onClick={handleModalClose}>
                Отменить
              </button>
            </div>
          </div>
        </div>
      )}

      {/*модалка редактирования*/}
      {showEditModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>
              ×
            </button>
            <span>Изменить протокол</span>
            <div className="modal-content">
              {/*<input*/}
              {/*    type="text"*/}
              {/*    placeholder={selectedProtocolId && selectedProtocolId.toString()}*/}
              {/*    disabled={true}*/}
              {/*/>*/}
              Название
              <input
                type="text"
                placeholder={protocolOldName}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              Введите номер протокола
              <input
                type="number"
                min={0}
                placeholder="Введите номер"
                value={protocolNum}
                onChange={(e) => setProtocolNum(e.target.value)}
              />
              Статус
              <select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                {/*<option disabled selected>*/}
                {/*  {protocolOldStatus === 1 ? "Активен" : "Неактивен"}*/}
                {/*</option>*/}
                <option value="" disabled selected>
                  Выберите
                </option>
                <option value={1}>Активный</option>
                <option value={0}>Неактивный</option>
              </select>
              Организация
              <select
                value={organizationValue}
                onChange={(e) => setOrganizationValue(e.target.value)}
              >
                <option value={null} disabled selected>
                  Выберите
                </option>
                {orgs &&
                  orgs.data.map((center) => (
                    <option
                      key={center.organization_id}
                      value={center.organization_id}
                    >
                      {center.name}
                    </option>
                  ))}
              </select>
              Центр
              <select
                value={centerValue}
                onChange={(e) => setCenterValue(e.target.value)}
              >
                <option value={null} disabled selected>
                  Выберите
                </option>
                {centers &&
                  centers.data.map((center) => (
                    <option key={center.id} value={center.id}>
                      {center.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="modal-actions">
              <button
                className="modal-button"
                onClick={() => editProtocol(selectedProtocolId)}
              >
                Сохранить
              </button>
              <button className="modal-button" onClick={handleModalClose}>
                Отменить
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleModalClose}>
              ×
            </button>
            <span>Удалить протокол?</span>
            <div className="modal-actions">
              <button
                className="modal-button"
                onClick={(e) => handleDeleteProtocol(deleteId)}
              >
                Удалить
              </button>
              <button className="modal-button" onClick={handleModalClose}>
                Отменить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
