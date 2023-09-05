import React, { useRef, useState } from 'react';
import './anthropometry.scss';
import { useParams } from 'react-router-dom';
import StateControl from '../../../stateControl/StateControl';
import { axiosRequest } from '../../../../utils/request/NewAxiosRequest';

const Anthropometry = ({
  data, index, anchorClassname, setIsColorRed, setIsOptionsColorRed, isOptionsColorRed,
}) => {
  const [anthropometry, setAnthropometry] = useState({
    data_been_measured: data && data.AnthropometricDataBeenMeasuredCondition.AnthropometricDataBeenMeasured,
    if_not: data && data.ReasonIfNotCondition.ReasonIfNot,
    date_of_start: data && data.DateOfStartMeasuredCondition.DateOfStartMeasured,
    weight: data && data.WeightOfBodyCondition.WeightOfBody,
    height: data && data.HeightOfBodyCondition.HeightOfBody,
    index: data && data.IndexWeigthOfBodyCondition.IndexWeigthOfBody,
  });

  const params = useParams();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const handleAnthropometryChange = (event) => {
    const { name, value } = event.target;
    setAnthropometry((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    await axiosRequest.patch('/subject/screening/anthropometry', {
      anthropometricdatabeenmeasured: +anthropometry.data_been_measured,
      dateofstartmeasured: anthropometry.date_of_start,
      heightofbody: +anthropometry.height,
      indexweightofbody: +anthropometry.index,
      reasonifnot: anthropometry.if_not,
      weightofbody: +anthropometry.weight,
      protocol_id: parseInt(params.protocolId),
      subject_num: (index).toString(),
    });
    window.location.reload();
  };

  const colors = Object.values(data).map((condition: any) => condition.Color);
  if (colors.includes(3) || colors.includes(5)) {
    setIsColorRed(true);
    if (isOptionsColorRed.anthropometry !== true) {
      setIsOptionsColorRed((prevState) => ({
        ...prevState,
        anthropometry: true,
      }));
    }
  }

  return (
    <div className="form" id={anchorClassname}>
      <h3>Антропометрия</h3>
      <hr className="hr" />
      <div className="section">
        <label>
          Измерение антропометрических данных проведено?
          <div className="label-select">
            <select
              disabled={data && data?.AnthropometricDataBeenMeasuredCondition.Color != 0}
              ref={ref1}
              name="data_been_measured"
              value={anthropometry.data_been_measured}
              onChange={handleAnthropometryChange}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.AnthropometricDataBeenMeasuredCondition.Color}
                refProps={ref1}
                element={(
                  <select
                    ref={ref1}
                    name="data_been_measured"
                    value={anthropometry.data_been_measured}
                    onChange={handleAnthropometryChange}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="data_been_measured"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Если НЕТ, то укажите причину
          <div className="label-select">
            <input
              type="text"
              ref={ref2}
              disabled={data && data?.ReasonIfNotCondition.Color != 0}
              name="if_not"
              value={anthropometry.if_not}
              onChange={handleAnthropometryChange}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.ReasonIfNotCondition.Color}
                refProps={ref2}
                element={(
                  <input
                    type="text"
                    ref={ref2}
                    name="if_not"
                    value={anthropometry.if_not}
                    onChange={handleAnthropometryChange}
                    className="exact-protocol-select"
                  />
                              )}
                index={index}
                fieldName="if_not"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Дата проведения измерений
          <div className="label-select">
            <input
              type="date"
              ref={ref3}
              disabled={data && data?.DateOfStartMeasuredCondition.Color != 0}
              name="date_of_start"
              value={anthropometry.date_of_start}
              onChange={handleAnthropometryChange}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.DateOfStartMeasuredCondition.Color}
                refProps={ref3}
                element={(
                  <input
                    type="date"
                    ref={ref3}
                    name="date_of_start"
                    value={anthropometry.date_of_start}
                    onChange={handleAnthropometryChange}
                    className="exact-protocol-select"
                  />
                              )}
                index={index}
                fieldName="date_of_start"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Масса тела
          <div className="label-select">
            <input
              type="text"
              ref={ref4}
              disabled={data && data?.WeightOfBodyCondition.Color != 0}
              name="weight"
              value={anthropometry.weight}
              onChange={handleAnthropometryChange}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.WeightOfBodyCondition.Color}
                refProps={ref4}
                element={(
                  <input
                    type="text"
                    ref={ref4}
                    name="weight"
                    value={anthropometry.weight}
                    onChange={handleAnthropometryChange}
                    className="exact-protocol-select"
                  />
                              )}
                index={index}
                fieldName="weight"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Рост
          <div className="label-select">
            <input
              type="text"
              ref={ref5}
              disabled={data && data?.HeightOfBodyCondition.Color != 0}
              name="height"
              value={anthropometry.height}
              onChange={handleAnthropometryChange}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.HeightOfBodyCondition.Color}
                refProps={5}
                element={(
                  <input
                    type="text"
                    ref={ref5}
                    name="height"
                    value={anthropometry.height}
                    onChange={handleAnthropometryChange}
                    className="exact-protocol-select"
                  />
                              )}
                index={index}
                fieldName="height"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />
        <label>
          Индекс массы тела(рассчетное значение)
          <div className="label-select">
            <input
              disabled={data && data?.IndexWeigthOfBodyCondition.Color != 0}
              ref={ref6}
              type="text"
              name="index"
              value={anthropometry.index}
              onChange={handleAnthropometryChange}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.IndexWeigthOfBodyCondition.Color}
                refProps={ref6}
                element={(
                  <input
                    ref={ref6}
                    type="text"
                    name="index"
                    value={anthropometry.index}
                    onChange={handleAnthropometryChange}
                    className="exact-protocol-select"
                  />
                              )}
                index={index}
                fieldName="index"
              />
            </div>
          </div>
        </label>
      </div>
      {
                data && data && data?.IndexWeigthOfBodyCondition.Color !== 1
                  ? <button className="modal-button" type="submit" onClick={handleSave}>Сохранить</button>
                  : ''
            }
    </div>
  );
};

export default Anthropometry;
