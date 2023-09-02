import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosRequest } from '../../../../utils/request/NewAxiosRequest';
import StateControl from '../../../stateControl/StateControl';

const Undesirable = ({ data, index }) => {
  const [undesirable, setUndesirable] = useState({
    dateofstart: data.DateStartOfScreeningCondition.DateOfStart,
    timeofstart: data.TimeStartOfScreeningCondition.TimeOfStart,
  });
  const params = useParams();
  const ref1 = useRef();
  const ref2 = useRef();

  const handleUndesirableChange = (event) => {
    const { name, value } = event.target;
    setUndesirable((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(data);

  const handleSave = async () => {
    await axiosRequest.patch('/subject/screening/startofscreening', {
      dateofstart: undesirable.dateofstart,
      protocol_id: parseInt(params.protocolId),
      subject_num: (index).toString(),
      timeofstart: undesirable.timeofstart,
    });
    window.location.reload();
  };

  return (
    <div className="form">
      <h3>Начало скрининга</h3>
      <hr className="hr" />
      <div className="section">
        <label>
          Дата подписания
          <div className="label-select">
            <input
              disabled={data && data?.DateStartOfScreeningCondition?.Color != 0}
              type="date"
              ref={ref1}
              name="dateofstart"
              value={undesirable.dateofstart}
              onChange={handleUndesirableChange}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.DateStartOfScreeningCondition.Color}
                refProps={ref1}
                element={(
                            <input
                              type="date"
                              ref={ref1}
                              name="dateofstart"
                              value={undesirable.dateofstart}
                              onChange={handleUndesirableChange}
                              className="exact-protocol-select"
                            />
                              )}
                index={index}
                fieldName="dateofstart"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />
        <label>
          Время подписания
          <div className="label-select">
            <input
              disabled={data && data?.TimeStartOfScreeningCondition.Color != 0}
              type="text"
              ref={ref2}
              name="timeofstart"
              value={undesirable.timeofstart}
              onChange={handleUndesirableChange}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.TimeStartOfScreeningCondition.Color}
                refProps={ref2}
                element={(
                            <input
                              type="text"
                              ref={ref2}
                              name="timeofstart"
                              value={undesirable.timeofstart}
                              onChange={handleUndesirableChange}
                              className="exact-protocol-select"
                            />
                              )}
                index={index}
                fieldName="timeofstart"
              />
            </div>
          </div>
        </label>
      </div>
      {
                data && data?.TimeStartOfScreeningCondition.Color !== 1
                  ? <button className="modal-button" type="submit" onClick={handleSave}>Отправить</button>
                  : ''
            }
    </div>
  );
};

export default Undesirable;
