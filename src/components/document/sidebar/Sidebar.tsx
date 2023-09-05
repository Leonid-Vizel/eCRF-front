import React, { useEffect, useState } from 'react';
import './sidebar.scss';
import { Link, useParams } from 'react-router-dom';
import { axiosCardRequest } from '../../../utils/request/NewAxiosRequest';
import { CardDay, CardSyphilis } from '../../../utils/types/documentType';

const Sidebar = () => {
  const { id, protocolId } = useParams();
  const [status, setStatus] = useState({
    syphilis: false,
    screening: false,
    anamnesis: false,
    criteria: false,
    physical: false,
    secondVisit: false,
    thirdVisit: false,
    fourthVisit: false,
  });

  useEffect(() => {
    axiosCardRequest
      .get<CardSyphilis>(`/Syphilis/Index/${id}`)
      .then((res) => setStatus((prev) => ({ ...prev, syphilis: true })))
      .catch(({ response }) => {
        if (response.status === 404) {
          setStatus((prev) => ({ ...prev, syphilis: false }));
        }
      });

    axiosCardRequest
      .get<CardSyphilis>(`/Screening/Index/${id}`)
      .then((res) => setStatus((prev) => ({ ...prev, screening: true })))
      .catch(({ response }) => {
        if (response.status === 404) {
          setStatus((prev) => ({ ...prev, screening: false }));
        }
      });

    axiosCardRequest
      .get<CardSyphilis>(`/Anamnesis/Index/${id}`)
      .then((res) => setStatus((prev) => ({ ...prev, anamnesis: true })))
      .catch(({ response }) => {
        if (response.status === 404) {
          setStatus((prev) => ({ ...prev, anamnesis: false }));
        }
      });

    axiosCardRequest
      .get<CardSyphilis>(`/Criteria/Index/${id}`)
      .then((res) => setStatus((prev) => ({ ...prev, criteria: true })))
      .catch(({ response }) => {
        if (response.status === 404) {
          setStatus((prev) => ({ ...prev, criteria: false }));
        }
      });

    axiosCardRequest
      .get<CardSyphilis>(`/PhysicalExam/Index/${id}`)
      .then((res) => setStatus((prev) => ({ ...prev, physical: true })))
      .catch(({ response }) => {
        if (response.status === 404) {
          setStatus((prev) => ({ ...prev, physical: false }));
        }
      });

    axiosCardRequest
      .get<CardDay[]>(`/Day/List/${id}`)
      .then((res) => {
        if (res.data[0]) {
          setStatus((prev) => ({ ...prev, secondVisit: true }));
        }
        if (res.data[1]) {
          setStatus((prev) => ({ ...prev, thirdVisit: true }));
        }
        if (res.data[2]) {
          setStatus((prev) => ({ ...prev, fourthVisit: true }));
        }
      })
      .catch(({ response }) => {
        if (response.status === 404) {
          setStatus((prev) => ({
            ...prev,
            secondVisit: false,
            thirdVisit: false,
            fourthVisit: false,
          }));
        }
      });
  }, []);

  return (
    <div className="document-sidebar">
      <div className="document-sidebar-block">
        <div className="document-sidebar-block-options-top">
          Выберите документ
        </div>
        <div className="document-sidebar-block-options">
          <Link
            className="link"
            to={`/document/data/edit/${protocolId}/${id}`}
          >
            <button>Основная информация</button>
          </Link>
        </div>
        <div className="document-sidebar-block-options">
          <div className="document-sidebar-block-options-top">
            Обследование на сифилис
            {' '}
          </div>
          <div className="document-sidebar-block-options-bottom">
            {!status.syphilis ? (
              <Link
                className="link"
                to={`/document/data/${protocolId}/${id}/syphilis`}
              >
                <button>Создать</button>
              </Link>
            ) : (
              <Link
                className="link"
                to={`/document/data/edit/${protocolId}/${id}/syphilis`}
              >
                <button>Изменить</button>
              </Link>
            )}
          </div>
        </div>
        <div className="document-sidebar-block-options">
          <div className="document-sidebar-block-options-top">
            Скрининговый визит
          </div>
          <div className="document-sidebar-block-options-bottom">
            {!status.screening ? (
              <Link
                className="link"
                to={`/document/data/${protocolId}/${id}/screening`}
              >
                <button>Создать</button>
              </Link>
            ) : (
              <Link
                className="link"
                to={`/document/data/edit/${protocolId}/${id}/screening`}
              >
                <button>Изменить</button>
              </Link>
            )}
          </div>
        </div>
        <div className="document-sidebar-block-options">
          <div className="document-sidebar-block-options-top">
            Анамнез жизни
          </div>
          <div className="document-sidebar-block-options-bottom">
            {!status.anamnesis ? (
              <Link
                className="link"
                to={`/document/data/${protocolId}/${id}/anamnesis`}
              >
                <button>Создать</button>
              </Link>
            ) : (
              <Link
                className="link"
                to={`/document/data/edit/${protocolId}/${id}/anamnesis`}
              >
                <button>Изменить</button>
              </Link>
            )}
          </div>
        </div>
        <div className="document-sidebar-block-options">
          Оценка критериев
          {!status.criteria ? (
            <Link
              to={`/document/data/${protocolId}/${id}/criteria`}
            >
              <button>Создать</button>
            </Link>
          ) : (
            <Link
              to={`/document/data/edit/${protocolId}/${id}/criteria`}
            >
              <button>Изменить</button>
            </Link>
          )}
        </div>
        <div className="document-sidebar-block-options">
          Физикальный осмотр
          {!status.physical ? (
            <Link
              to={`/document/data/${protocolId}/${id}/physical`}
            >
              <button>Создать</button>
            </Link>
          ) : (
            <Link
              to={`/document/data/edit/${protocolId}/${id}/physical`}
            >
              <button>Изменить</button>
            </Link>
          )}
        </div>
        <div className="document-sidebar-block-options">
          Второй визит
          {!status.secondVisit ? (
            <Link to={`/document/data/${protocolId}/${id}/visit/2`}>
              <button>Создать</button>
            </Link>
          ) : (
            <Link
              to={`/document/data/edit/${protocolId}/${id}/visit/2`}
            >
              <button>Изменить</button>
            </Link>
          )}
        </div>
        <div className="document-sidebar-block-options">
          Третий визит
          {!status.thirdVisit ? (
            <Link to={`/document/data/${protocolId}/${id}/visit/3`}>
              <button>Создать</button>
            </Link>
          ) : (
            <Link
              to={`/document/data/edit/${protocolId}/${id}/visit/3`}
            >
              <button>Изменить</button>
            </Link>
          )}
        </div>
        <div className="document-sidebar-block-options">
          Четвертый визит
          {!status.fourthVisit ? (
            <Link to={`/document/data/${protocolId}/${id}/visit/4`}>
              <button>Создать</button>
            </Link>
          ) : (
            <Link
              to={`/document/data/edit/${protocolId}/${id}/visit/4`}
            >
              <button>Изменить</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
