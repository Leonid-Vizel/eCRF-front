import React, { useEffect, useState } from "react";
import "./journal.scss";
import NavbarAuth from "../../components/navbar_auth/NavbarAuth";
import { Link, useNavigate } from "react-router-dom";
import { cookiesData } from "../../utils/cookies/getCookies";
import { axiosRequest } from "../../utils/request/NewAxiosRequest";
import { useAppDispatch, useAppSelector } from "../../store/redux-hook";
import { journalSelector } from "../../store/journalSlice/journalSelector";
import ExactJournalOther from "../exactJournal/exactJournalOther/ExactJournalOther";
import {
  getJournals,
  selectItem,
  selectMethod,
  selectType,
} from "../../store/journalSlice/journalSlice";

const Journal = () => {
  const data = [
    {
      id: 1,
      method: "AddProtocol",
      action: "Добавление протокола",
      initiator: "Person 1",
      status: "Статус 1",
      data: "2023-06-19 12:11:45.113",
    },
    {
      id: 2,
      method: "DeleteProtocol",
      action: "Добавление протокола",
      initiator: "Person 1",
      status: "Статус 2",
      data: "2023-06-19 12:11:45.113",
    },
    {
      id: 3,
      method: "SaveProtocol",
      action: "Добавление протокола",
      initiator: "Person 1",
      status: "Статус 3",
      data: "2023-06-19 12:11:45.113",
    },
    {
      id: 4,
      method: "AddProtocol",
      action: "Добавление протокола",
      initiator: "Person 1",
      status: "Статус 1",
      data: "2023-06-19 12:11:45.113",
    },
  ];

  const navigate = useNavigate();

  // useEffect(() => {
  //     const isAuth = cookiesData.cookieId
  //     if(!isAuth) {
  //         navigate('/')
  //     }
  // }, [])

  const [journalData, setJournalData] = useState<any>("");
  const dispatch = useAppDispatch();
  const { journal, selectedItem } = useAppSelector(journalSelector);

  const handleItemClick = (item) => {
    const str = item && item.Method.split(" ");
    const savedStr = str.slice(0, 2).join(" ");
    console.log(savedStr);
    dispatch(selectItem(item.Body));
    dispatch(selectMethod(item.ActionType));
    dispatch(selectType(savedStr));
  };

  useEffect(() => {
    // const getJournals: any = async () => {
    //     await axiosRequest.get('/journal/all')
    //         .then((res): any => {
    //             setJournalData(res.data)
    //         })
    // }

    const getJournalsFunc: any = async () => {
      dispatch<any>(getJournals());
    };

    getJournalsFunc();
  }, []);

  const handleNavigate = () => {
    navigate("/main/filter=0");
  };

  return (
    <div className="journal">
      <NavbarAuth />
      <button className="back-button" onClick={handleNavigate}>
        Вернуться
      </button>
      <div className="journal-table">
        <span>Информация о действиях</span>
        <table className="data-table">
          <thead>
            <tr>
              <th>№ п/п</th>
              {/*<th>Метод</th>*/}
              <th>Действие</th>
              <th>Инициатор</th>
              {/*<th>Статус</th>*/}
              <th>Дата</th>
              <th>Просмотр</th>
            </tr>
          </thead>
          <tbody>
            {journal &&
              journal.data.map((item, index) => {
                const str = item && item.Method.split(" ");
                const savedStr = str.slice(0, 2).join(" ");
                console.log(savedStr);

                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.Method}</td>
                    <td>{item.Initiator}</td>
                    <td>{item.CreatedAt}</td>
                    <td className="td-as-button">
                      {item.ActionType === "update" ? (
                        <Link
                          className="link"
                          to={`/journal/update/${index}`}
                          onClick={() => handleItemClick(item)}
                        >
                          Посмотреть
                        </Link>
                      ) : (
                        <Link
                          className="link"
                          to={`/journal/${index}`}
                          onClick={() => handleItemClick(item)}
                        >
                          Посмотреть
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Link to={"/main/filter=0"} className="link">
        <div className="journal-logo">
          <img src="/logo.png" />
          <span>Developed and designed by Nabla Lab.</span>
        </div>
      </Link>
    </div>
  );
};

export default Journal;
