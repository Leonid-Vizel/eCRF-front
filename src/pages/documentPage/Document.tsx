import React, { useEffect, useState } from 'react';
import { Page } from 'react-pdf';
import DocumentInput from '../../components/documentInput/DocumentInput';
import './document.scss';
import { useAppSelector } from '../../store/redux-hook';
import { documentSelector } from '../../store/documentSlice/documentSelector';
import axios from 'axios';
import { BASE_CARD_URL, axiosCardRequest } from '../../utils/request/NewAxiosRequest';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const Document = () => {
  const [documentData, setDocumentData] = useState<any>('');

  const { document, twelveData, twentyData } = useAppSelector(documentSelector) as any;
  console.log(document);

  const { id } = useParams();

  const headers = {
    Token: `${Cookies.get('token')}`,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    const getDocument: any = async () => {
      await axiosCardRequest.get(`/Card/Index/${id}`, {
        headers,
      })
        .then((res) => {
          setDocumentData(res);
        });
    };

    getDocument();
  }, []);

  console.log(document);

  const handlePrintDoc = async () => {
    await axiosCardRequest.post(`/Card/Export/${id}?${`${Cookies.get('token')}`}`, '', {
      headers,
    });
  };

  const MAX_ROWS = 5;

  const renderTable = () => {
    const dataLength = twelveData ? twelveData.length : 0;
    const displayedData = twelveData ? twelveData.slice(0, MAX_ROWS) : [];

    return (
      <table>
        <thead>
          <tr>
            <th>Дата начала диспансерного наблюдения</th>
            <th>Дата прекращения диспансерного наблюдения</th>
            <th>Диагноз</th>
            <th>Код по МКБ-10</th>
            <th>Врач</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((data, index) => (
            <tr key={index}>
              <td>{data.startDateTwelve}</td>
              <td>{data.endDateTwelve}</td>
              <td>{data.diagnosisTwelve}</td>
              <td>{data.mkbCodeTwelve}</td>
              <td>{data.doctorTwelve}</td>
            </tr>
          ))}

          {/* Добавление пустых строк */}
          {Array.from({ length: Math.max(0, MAX_ROWS - dataLength) }).map((_, index) => (
            <tr key={`empty-row-${index}`}>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          ))}

          {/* Оставшиеся данные на следующей строке */}
          {twelveData && twelveData.slice(MAX_ROWS).map((data, index) => (
            <tr key={index + MAX_ROWS}>
              <td>{data.startDateTwelve}</td>
              <td>{data.endDateTwelve}</td>
              <td>{data.diagnosisTwelve}</td>
              <td>{data.mkbCodeTwelve}</td>
              <td>{data.doctorTwelve}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderTwentyTable = () => {
    const dataLength = twentyData ? twentyData.length : 0;
    const displayedData = twentyData ? twentyData.slice(0, MAX_ROWS) : [];

    return (
      <table>
        <thead>
          <tr>
            <th>Дата (число, месяц, год)</th>
            <th>Заключительные (уточненные) диагнозы</th>
            <th>Установленные впервые или повторно (+/-)</th>
            <th>Врач</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((data, index) => (
            <tr key={index}>
              <td>{data.dateTwenty}</td>
              <td>{data.diagnosisTwenty}</td>
              <td>{data.isFirstTwenty}</td>
              <td>{data.doctorTwenty}</td>
            </tr>
          ))}

          {/* Добавление пустых строк */}
          {Array.from({ length: Math.max(0, MAX_ROWS - dataLength) }).map((_, index) => (
            <tr key={`empty-row-${index}`}>
              <td />
              <td />
              <td />
              <td />
            </tr>
          ))}

          {/* Оставшиеся данные на следующей строке */}
          {twentyData && twentyData.slice(MAX_ROWS).map((data, index) => (
            <tr key={index + MAX_ROWS}>
              <td>{data.dateTwenty}</td>
              <td>{data.diagnosisTwenty}</td>
              <td>{data.isFirstTwenty}</td>
              <td>{data.doctorTwenty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="document">
      {/* Общий блок */}
      {document && document.map((item, index) => (
        <div className="document-block">
          {/* верхняя часть документа */}
          <div className="document-top">
            <div className="document-top-up">
              <div className="document-top-up-left">
                Протокол
                {' '}
                {item.protocolId ? item.protocolId : ''}
                , центр 01
              </div>
              <div className="document-top-up-right">
                Доброволец
                {' '}
                <DocumentInput underlineLength={250} text={item.volunteer ? item.volunteer : ''} />
                Инициалы
                {' '}
                <DocumentInput underlineLength={50} text={item.initials ? item.initials : ''} />
              </div>
            </div>

            <div className="document-top-bottom">
              <div className="document-top-bottom-block">
                <div className="document-top-bottom-left">
                  <div className="document-top-bottom-left-column">
                    <p>Педикулез</p>
                    <p>Чесотка</p>
                    <p>ТБС</p>
                    <p>Гепатит</p>
                    <p>Вен. Заб-я</p>
                  </div>
                  <div className="document-top-bottom-center-column">
                    <DocumentInput underlineLength={50} text={item.pediculosis ? item.pediculosis : ''} />
                    <DocumentInput underlineLength={50} text={item.scabies ? item.scabies : ''} />
                    <DocumentInput underlineLength={50} text={item.tbs ? item.tbs : ''} />
                    <DocumentInput underlineLength={50} text={item.hepatitis ? item.hepatitis : ''} />
                    <DocumentInput underlineLength={50} text={item.venerealDiseases ? item.venerealDiseases : ''} />
                  </div>
                </div>

                <div className="document-top-bottom-center">
                  <span>ООО «ННЦ ИССЛЕДОВАНИЙ И ФАРМАКОНАДЗОРА»</span>
                  Саранск, ул. Косарева, 116 А
                </div>

                <div className="document-top-bottom-right">
                  <p>
                    Приложение №1 к приказу Министерства здравохранения Российской Федерации
                    от 15 декабря 2014 г. N 834н
                  </p>
                  <p>Медицинская документация Форма №025/у утверждена приказом Минздрава России</p>
                </div>
              </div>
            </div>
          </div>
          {/* Основная часть документа */}
          <div className="document-bottom">
            <div className="document-bottom-name">
              <div className="document-bottom-name-block">
                <span>
                  МЕДИЦИНСКАЯ КАРТА ПАЦИЕНТА, ПОЛУЧАЮЩЕГО МЕДИЦИНСКУЮ ПОМОЩЬ В АМБУЛАТОРНЫХ УСЛОВИЯХ
                  №
                </span>
              </div>
            </div>
            <div className="document-bottom-point">
              1.
              {' '}
              <span>Дата заполнения медицинской карты:</span>
              число
              {' '}
              <DocumentInput underlineLength={50} text={item.dateOfFill ? item.dateOfFill : ''} />
              месяц
              {' '}
              <DocumentInput underlineLength={100} text={item.monthOfFill ? item.monthOfFill : ''} />
              год
              {' '}
              <DocumentInput underlineLength={50} text={item.yearOfFill ? item.yearOfFill : ''} />
            </div>
            <div className="document-bottom-point">
              2.
              {' '}
              <span>Фамилия, имя, отчество</span>
              <DocumentInput underlineLength={200} text={item.volunteer ? item.volunteer : ''} />
            </div>
            <div className="document-bottom-point">
              {

                            }
              3.
              {' '}
              <span>Пол:</span>
              {' '}
              {item.sex}
              <div className="document-bottom-point-one-line">
                4.
                {' '}
                <span>Дата рождения:</span>
                число
                {' '}
                <DocumentInput underlineLength={30} text={item.dateOfBirth ? item.dateOfBirth : ''} />
                месяц
                {' '}
                <DocumentInput underlineLength={70} text={item.monthOfBirth ? item.monthOfBirth : ''} />
                год
                {' '}
                <DocumentInput underlineLength={30} text={item.yearOfBirth ? item.yearOfBirth : ''} />
              </div>
            </div>
            <div className="document-bottom-point">
              5.
              {' '}
              <span>Место регистрации:</span>
              субъект Российской Федерации
              {' '}
              <DocumentInput
                underlineLength={100}
                text={item.subjectOfTheRussianFederation ? item.subjectOfTheRussianFederation : ''}
              />
            </div>
            <div className="document-bottom-point">
              район
              {' '}
              <DocumentInput underlineLength={50} text={item.district ? item.district : ''} />
              город
              {' '}
              <DocumentInput underlineLength={50} text={item.city ? item.city : ''} />
              населенный пункт
              {' '}
              <DocumentInput underlineLength={50} text={item.locality ? item.locality : ''} />
            </div>
            <div className="document-bottom-point">
              улица
              {' '}
              <DocumentInput underlineLength={50} text={item.street ? item.street : ''} />
              дом
              {' '}
              <DocumentInput underlineLength={50} text={item.house ? item.house : ''} />
              квартира
              {' '}
              <DocumentInput underlineLength={50} text={item.apart ? item.apart : ''} />
              тел
              {' '}
              <DocumentInput underlineLength={50} text={item.phNumber ? item.phNumber : ''} />
            </div>
            <div className="document-bottom-point">
              6.
              {' '}
              <span>Местность:</span>
              {' '}
              {item.terrain ? item.terrain : ''}
            </div>
            <div className="document-bottom-point">
              7.
              {' '}
              <span>Полис ОМС:</span>
              серия
              {' '}
              <DocumentInput underlineLength={100} text={item.OMSSeries ? item.OMSSeries : ''} />
              №
              {' '}
              <DocumentInput underlineLength={100} text={item.OMSNumber ? item.OMSNumber : ''} />
              <div className="document-bottom-point-one-line">
                8.
                {' '}
                <span>СНИЛС</span>
                {' '}
                <DocumentInput underlineLength={100} text={item.snils ? item.snils : ''} />
              </div>
            </div>
            <div className="document-bottom-point">
              9.
              {' '}
              <span>Наименование медицинской организации:</span>
              <DocumentInput underlineLength={300} text={item.medOrg ? item.medOrg : ''} />
            </div>
            <div className="document-bottom-point">
              10.
              {' '}
              <span>Код категории льготы</span>
              <DocumentInput underlineLength={50} text={item.benefitsCategoryCode ? item.benefitsCategoryCode : ''} />
              <div className="document-bottom-point-one-line">
                11.
                {' '}
                <span>Документ</span>
                {' '}
                <DocumentInput underlineLength={100} text={item.docsPassport ? item.docsPassport : ''} />
                {' '}
                :
                серия
                {' '}
                <DocumentInput underlineLength={50} text={item.passportSeries ? item.passportSeries : ''} />
                №
                {' '}
                <DocumentInput underlineLength={50} text={item.passportN ? item.passportN : ''} />
              </div>
            </div>
            <div className="document-bottom-point-table">
              <span>12. Заболевания, по поводу которых осуществляется диспансерное наблюдение:</span>
              {/* todo table */}
              <div className="document-bottom-point-table-block">
                {renderTable()}
              </div>
            </div>
            <div className="document-bottom-point">
              13.
              {' '}
              <span>Семейное положение:</span>
              {item.maritalStatus ? item.maritalStatus : ''}
              {/* Состоит в зарегистрированном браке - 1, */}
              {/* не состоит в браке - 2, */}
              {/* неизвестно - 3. */}
            </div>
            <div className="document-bottom-point">
              14.
              {' '}
              <span className="document-bottom-point-span">Образование:</span>
              {item.education ? item.education : ''}
              {/* Профессиональное: высшее - 1, */}
              {/* среднее - 2; */}
              {/* общее среднее - 3, */}
              {/* основное - 4, */}
              {/* начальное - 5, */}
            </div>
            <div className="document-bottom-point">
              неизвестно - 6.
            </div>
            <div className="document-bottom-point">
              15.
              {' '}
              <span>Занятость:</span>
              {item.occupation ? item.occupation : ''}
              {/* Работает - 1, проходит военную службу - 2 и приравненную к ней службу - 2; пенсионер(ка) - 3, */}
            </div>
            {/* <div className="document-bottom-point"> */}
            {/*    студент(ка) - 4, не работает - 5, прочие - 6. */}
            {/* </div> */}
            <div className="document-bottom-point">
              16.
              {' '}
              <span>Инвалидность (первичная, повторная, группа, дата):</span>
              <DocumentInput underlineLength={100} text={item.disability ? item.disability + item.disabilityGroup + item.disabilityDate : ''} />
            </div>
            <div className="document-bottom-point">
              17.
              {' '}
              <span>Место работы:</span>
              <DocumentInput underlineLength={100} text={item.work ? item.work : ''} />
              должность
              <DocumentInput underlineLength={100} text={item.post ? item.post : ''} />
            </div>
            <div className="document-bottom-point">
              18.
              {' '}
              <span>Изменение места работы:</span>
              <DocumentInput underlineLength={100} text={item.changeOfWork ? item.changeOfWork : ''} />
            </div>
            <div className="document-bottom-point">
              19.
              {' '}
              <span>Изменение места регистрации:</span>
              <DocumentInput underlineLength={100} text={item.changeOfRegPlace ? item.changeOfRegPlace : ''} />
            </div>
            <div className="document-bottom-point-table">
              <span>20. Лист записи заключительных (уточненных) диагнозов:</span>
              <div className="document-bottom-point-table-block">
                {renderTwentyTable()}
              </div>
            </div>
            <div className="document-bottom-point">
              21.
              {' '}
              <span>Группа крови:</span>
              <DocumentInput underlineLength={30} text={item.bloodType ? item.bloodType : ''} />
              <div className="document-bottom-point-one-line">
                22.
                {' '}
                <span>Rh-фактор :</span>
                <DocumentInput underlineLength={30} text={item.rh ? item.rh : ''} />
              </div>
              <div className="document-bottom-point-one-line">
                23.
                {' '}
                <span>Аллергические реакции :</span>
                <DocumentInput underlineLength={30} text={item.allergic ? item.allergic : ''} />
              </div>
            </div>
            {/* <div className="document-bottom-point"> */}
            {/*    <DocumentInput underlineLength={700} text={item.}/> */}
            {/* </div> */}
            <div className="document-bottom-point">
              24.
              {' '}
              <span>Записи врачей-специалистов: </span>
              Дата осмотра
              {' '}
              <DocumentInput underlineLength={100} text={item.dateOfView ? item.dateOfView : ''} />
              {' '}
              на приеме, на
              дому, в фельдшерско-
            </div>
            <div className="document-bottom-point">
              акушерском пункте, прочее.
            </div>
          </div>
        </div>
      ))}
      <form action={`${BASE_CARD_URL}/Card/Export/${id}`} method="POST">
        <input type="hidden" name="Token" value={`${Cookies.get('token')}`} />
        <button type="submit">Напечатать</button>
      </form>
    </div>
  );
};

export default Document;
