import React, { useEffect, useState } from 'react';
import {
  BASE_CARD_URL,
  axiosCardRequest,
} from '../../utils/request/NewAxiosRequest';
import './documents.scss';
import { Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const Documents = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { id } = useParams();

  const fetchData: any = async (page) => {
    const headers = {
      Token: `${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axiosCardRequest.get(
        `/Card/List/${id}?page=${page}`,
        {
          headers,
        },
      );
      setData(response.data.cards);
      setTotalPages(response.data.totalPages);
      // setData(testData.cards);
      // setTotalPages(testData.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  // const getCurrentPageData = () => {
  //     const startIdx = (currentPage - 1) * testData.pageSize;
  //     const endIdx = startIdx + testData.pageSize;
  //     return testData.cards.slice(startIdx, endIdx);
  // };

  return (
    <div className="pagination-container">
      <div className="new-cart">
        <Link to={`/document/data/${id}`}>
          <button>Создать амбулаторную карту</button>
        </Link>
      </div>
      <div className="person-blocks">
        {data.map((person) => (
          <div key={person.id} className="person-block">
            <div className="person-block-div">
              <div className="person-block-block">
                <span>ФИО:</span>
                <span>
                  {person.secondName}
                  {' '}
                  {person.firstName}
                  {' '}
                  {person.thirdName}
                </span>
              </div>
              <div className="person-block-block">
                <span>Дата рождения:</span>
                {person.birthDate ? (
                  <span>
                    {person.birthDate
                          .split('-')
                          .reverse()
                          .join('-')}
                  </span>
                ) : (
                  <span>Данных нет</span>
                )}
              </div>
              <div className="person-block-block">
                <span>Дата создания:</span>
                {person.createDate ? (
                  <span>
                    {person.createDate
                          .split('-')
                          .reverse()
                          .join('-')}
                  </span>
                ) : (
                  <span>Данных нет</span>
                )}
              </div>
            </div>
            <div className="form-button-block">
              <form
                action={`${BASE_CARD_URL}/Card/Export/${person.id}`}
                method="POST"
              >
                <input
                  type="hidden"
                  name="Token"
                  value={`${Cookies.get('token')}`}
                />
                <button type="submit">Напечатать</button>
              </form>
              <Link to={`/document/data/edit/${id}/${person.id}`}>
                <button>Перейти</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-buttons">
        {data.length === 0 || totalPages <= 1 ? (
          ''
        ) : (
          <>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Предыдущая
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Следующая
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Documents;
