import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import './demography.scss';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import Circle from '../../../circles/Circle';
import CircleNoDropDown from '../../../circle/CircleNoDropDown';
import { axiosRequest } from '../../../../utils/request/NewAxiosRequest';
import StateControl from '../../../stateControl/StateControl';

const Demography = ({
  data, index, anchorClassname, setIsColorRed, setIsOptionsColorRed, isOptionsColorRed,
}) => {
  const [demographics, setDemographics] = useState({
    sex: data.SexCondition.Sex,
    race: data.RaceCondition.Race,
    birth_date: data.BirthDateCondition.BirthDate,
  });
  const params = useParams();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const handleDemographicsChange = (event) => {
    const { name, value } = event.target;
    setDemographics((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    await axiosRequest.patch('/subject/screening/demography', {
      date_of_birth: demographics.birth_date,
      protocol_id: parseInt(params.protocolId),
      race: parseInt(demographics.race),
      sex: parseInt(demographics.sex),
      subject_num: (index).toString(),
    });
    window.location.reload();
  };

  console.log(isOptionsColorRed);

  const memo = useMemo(() => ({
    startOfScreening: isOptionsColorRed.startOfScreening,
    demography: true,
  }), []);

  const colors = Object.values(data).map((condition: any) => condition.Color);
  if (colors.includes(3) || colors.includes(5)) {
    setIsColorRed(true);
    if (isOptionsColorRed.demography !== true) {
      setIsOptionsColorRed((prevState) => ({
        ...prevState,
        demography: true,
      }));
    }
  }

  return (
    <div className="form" id={anchorClassname}>
      <h3>Демография</h3>
      <hr className="hr" />
      <div className="section">
        <label>
          Пол
          <div className="label-select">
            <select
              disabled={data && data?.SexCondition.Color != 0}
              name="sex"
              value={demographics.sex}
              onChange={handleDemographicsChange}
              ref={ref1}
              placeholder={data && data?.SexCondition.Sex === 1 ? 'M' : 'W'}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={0} selected>Муж</option>
              <option value={1}>Жен</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.SexCondition.Color}
                element={(
                  <select
                              name="sex"
                              value={demographics.sex}
                              onChange={handleDemographicsChange}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={0}>Муж</option>
                              <option value={1}>Жен</option>
                            </select>
                              )}
                refProps={ref1}
                fieldName="sex"
                index={index}
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Раса
          <div className="label-select">
            <select
              disabled={data && data?.RaceCondition.Color != 0}
              name="race"
              value={demographics.race}
              onChange={handleDemographicsChange}
              ref={ref2}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={0}>Европеоидная</option>
              <option value={1}>Негроидная</option>
              <option value={2}>Монголоидная</option>
              <option value={3}>Американоидная</option>
              <option value={4}>Австралоидная</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.RaceCondition.Color}
                element={(
                  <select
                              name="race"
                              value={demographics.race}
                              onChange={handleDemographicsChange}
                              ref={ref2}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={0}>Европеоидная</option>
                              <option value={1}>Негроидная</option>
                              <option value={2}>Монголоидная</option>
                              <option value={3}>Американоидная</option>
                              <option value={4}>Австралоидная</option>
                            </select>
                              )}
                refProps={ref2}
                fieldName="race"
                index={index}
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Дата рождения
          <div className="label-select">
            <input
              disabled={data && data?.BirthDateCondition.Color != 0}
              type="date"
              name="birth_date"
              value={demographics.birth_date}
              onChange={handleDemographicsChange}
              ref={ref3}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.BirthDateCondition.Color}
                element={(
                  <input
                              type="date"
                              name="birth_date"
                              value={demographics.birth_date}
                              onChange={handleDemographicsChange}
                              ref={ref3}
                              className="exact-protocol-select"
                            />
                              )}
                refProps={ref3}
                fieldName="birth_date"
                index={index}
              />
            </div>
          </div>
        </label>
      </div>
      {
                data && data?.BirthDateCondition.Color !== 1
                  ? <button className="modal-button" type="submit" onClick={handleSave}>Сохранить</button>
                  : ''
            }
    </div>
  );
};

export default Demography;
