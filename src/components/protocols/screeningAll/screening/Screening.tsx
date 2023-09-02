import React, { useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import StateControl from '../../../stateControl/StateControl';
import { axiosRequest } from '../../../../utils/request/NewAxiosRequest';

const Screening = ({
  data, index, anchorClassname, setIsColorRed, setIsOptionsColorRed, isOptionsColorRed,
}) => {
  const [informedConsent, setInformedConsent] = useState({
    signed: data.SignedCondition.Signed,
    date_of_sign: data && data.DateOfSignCondition.DateOfSign,
    time_of_sign: data && data.TimeOfSignCondition.TimeOfSign,
    original: data && data.ReceivedAnInsurancePolicyCondition.ReceivedAnInsurancePolicy,
    consent: data && data.ReceivedAnInformaionConsentCondition.ReceivedAnInformaionConsent,
  });
  const params = useParams();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  const handleInformedConsentChange = (event) => {
    const { name, value } = event.target;
    setInformedConsent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    await axiosRequest.patch('/subject/screening/informationconsent', {
      date_of_sign: informedConsent.date_of_sign,
      information_consent: +informedConsent.consent,
      insurance_policy: +informedConsent.original,
      is_signed: +informedConsent.signed,
      protocol_id: parseInt(params.protocolId),
      subject_num: (index).toString(),
      time_of_sign: informedConsent.time_of_sign,
    });
    window.location.reload();
  };

  const colors = Object.values(data).map((condition: any) => condition.Color);
  if (colors.includes(3) || colors.includes(5)) {
    setIsColorRed(true);
    if (isOptionsColorRed.consent !== true) {
      setIsOptionsColorRed((prevState) => ({
        ...prevState,
        consent: true,
      }));
    }
  }

  return (
    <div className="form" id={anchorClassname}>
      <h3>Информированное согласие</h3>
      <hr className="hr" />
      <div className="section">
        <label>
          Информированное согласие подписано?
          <div className="label-select">
            <select
              disabled={data && data?.SignedCondition.Color != 0}
              ref={ref1}
              name="signed"
              value={informedConsent.signed}
              onChange={handleInformedConsentChange}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.SignedCondition.Color}
                element={(
                  <select
                              ref={ref1}
                              name="signed"
                              value={informedConsent.signed}
                              onChange={handleInformedConsentChange}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                refProps={ref1}
                index={index}
                fieldName="signed"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Дата подписания
          <div className="label-select">
            <input
              disabled={data && data?.DateOfSignCondition.Color != 0}
              type="date"
              ref={ref2}
              name="date_of_sign"
              value={informedConsent.date_of_sign}
              onChange={handleInformedConsentChange}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.DateOfSignCondition.Color}
                refProps={ref2}
                element={(
                  <input
                              type="date"
                              ref={ref2}
                              name="date_of_sign"
                              value={informedConsent.date_of_sign}
                              onChange={handleInformedConsentChange}
                              className="exact-protocol-select"
                            />
                              )}
                index={index}
                fieldName="date_of_sign"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Время подписания
          <div className="label-select">
            <input
              disabled={data && data?.TimeOfSignCondition.Color != 0}
              type="text"
              ref={ref3}
              name="time_of_sign"
              value={informedConsent.time_of_sign}
              onChange={handleInformedConsentChange}
              className="exact-protocol-select"
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.TimeOfSignCondition.Color}
                refProps={ref3}
                element={(
                  <input
                              type="text"
                              ref={ref3}
                              name="time_of_sign"
                              value={informedConsent.time_of_sign}
                              onChange={handleInformedConsentChange}
                              className="exact-protocol-select"
                            />
                              )}
                index={index}
                fieldName="time_of_sign"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Доброволец получил на руки оригинал страхового Полиса участника исследования?
          <div className="label-select">
            <select
              disabled={data && data?.ReceivedAnInsurancePolicyCondition.Color != 0}
              name="original"
              ref={ref4}
              value={informedConsent.original}
              onChange={handleInformedConsentChange}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.ReceivedAnInsurancePolicyCondition.Color}
                refProps={ref4}
                element={(
                  <select
                              name="original"
                              ref={ref4}
                              value={informedConsent.original}
                              onChange={handleInformedConsentChange}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="original"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />
        <label>
          Доброволец получил на руки один экземпляр информированного согласия?
          <div className="label-select">
            <select
              disabled={data && data?.ReceivedAnInformaionConsentCondition.Color != 0}
              name="consent"
              ref={ref5}
              value={informedConsent.consent}
              onChange={handleInformedConsentChange}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.ReceivedAnInformaionConsentCondition.Color}
                refProps={ref5}
                element={(
                  <select
                              name="consent"
                              ref={ref5}
                              value={informedConsent.consent}
                              onChange={handleInformedConsentChange}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="consent"
              />
            </div>
          </div>
        </label>
      </div>
      {
                data && data?.ReceivedAnInformaionConsentCondition.Color !== 1
                  ? <button className="modal-button" type="submit" onClick={handleSave}>Отправить</button>
                  : ''
            }
    </div>
  );
};

export default Screening;
