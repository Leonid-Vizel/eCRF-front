import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import StateControl from '../../../stateControl/StateControl';
import { axiosRequest } from '../../../../utils/request/NewAxiosRequest';

const Ending = ({
  data, index, anchorClassname, setIsColorRed, setIsOptionsColorRed, isOptionsColorRed,
}) => {
  const [ending, setEnding] = useState({
    volunteereligible: data.VolunteerEligibleCondition.VolunteerEligible,
    noexclusioncriteria: data.NoExclusionCriteriaCondition.NoExclusionCriteria,
    informedoftherestrictions: data.InformedOfTheRestrictionsCondition.InformedOfTheRestrictions,
    volunteerincluded: data.VolunteerIncludedCondition.VolunteerIncluded,
    reasonifnot: data.ReasonIfNotCondition.ReasonIfNot,
    commentvalue: data.CommentCondition.CommentValue,
  });

  const params = useParams();
  const refEnding1 = useRef();
  const refEnding2 = useRef();
  const refEnding3 = useRef();
  const refEnding4 = useRef();
  const refEnding5 = useRef();
  const refEnding6 = useRef();

  const handleEnding = (event) => {
    const { name, value } = event.target;
    setEnding((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    await axiosRequest.patch('/subject/screening/completion', {
      commentvalue: ending.commentvalue,
      informedoftherestrictions: +ending.informedoftherestrictions,
      noexclusioncriteria: +ending.noexclusioncriteria,
      reasonifnot: ending.reasonifnot,
      volunteereligible: +ending.volunteereligible,
      volunteerincluded: +ending.volunteerincluded,
      protocol_id: parseInt(params.protocolId),
      subject_num: (index).toString(),
    });
    window.location.reload();
  };

  const colors = Object.values(data).map((condition: any) => condition.Color);
  if (colors.includes(3) || colors.includes(5)) {
    setIsColorRed(true);
    if (isOptionsColorRed.completionOfScreening !== true) {
      setIsOptionsColorRed((prevState) => ({
        ...prevState,
        completionOfScreening: true,
      }));
    }
  }

  return (
    <div className="form" id={anchorClassname}>
      <h3>Завершение скрининга</h3>
      <hr className="hr" />
      <div className="section">
        <label>
          Доброволец соответствует критериям включения?
          <div className="label-select">
            <select
              disabled={data && data?.VolunteerEligibleCondition.Color != 0}
              ref={refEnding1}
              name="volunteereligible"
              value={ending.volunteereligible}
              onChange={handleEnding}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              {
                                ['Нет', 'Да'].map((item, index) => (
                                  <option value={index} selected={index === data && data?.VolunteerEligibleCondition.VolunteerEligible}>{item}</option>
                                ))
                            }
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.VolunteerEligibleCondition.Color}
                refProps={refEnding1}
                element={(
                  <select
                              ref={refEnding1}
                              name="volunteereligible"
                              value={ending.volunteereligible}
                              onChange={handleEnding}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              {
                                        ['Нет', 'Да'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.VolunteerEligibleCondition.VolunteerEligible}>{item}</option>
                                        ))
                                    }
                            </select>
                              )}
                index={index}
                fieldName="volunteereligible"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Критерии невключения отсутствуют?
          <div className="label-select">
            <select
              disabled={data && data?.NoExclusionCriteriaCondition.Color != 0}
              ref={refEnding2}
              name="noexclusioncriteria"
              value={ending.noexclusioncriteria}
              onChange={handleEnding}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              {
                                ['Нет', 'Да'].map((item, index) => (
                                  <option value={index} selected={index === data && data?.NoExclusionCriteriaCondition.NoExclusionCriteria}>{item}</option>
                                ))
                            }
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NoExclusionCriteriaCondition.Color}
                refProps={refEnding2}
                element={(
                  <select
                              ref={refEnding2}
                              name="noexclusioncriteria"
                              value={ending.noexclusioncriteria}
                              onChange={handleEnding}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              {
                                        ['Нет', 'Да'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.NoExclusionCriteriaCondition.NoExclusionCriteria}>{item}</option>
                                        ))
                                    }
                            </select>
                              )}
                index={index}
                fieldName="noexclusioncriteria"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Доброволец был проинформирован об ограничениях, требуемых протоколом и согласен их соблюдать в течение исследования?
          <div className="label-select">
            <select
              disabled={data && data?.InformedOfTheRestrictionsCondition.Color != 0}
              ref={refEnding3}
              name="informedoftherestrictions"
              value={ending.informedoftherestrictions}
              onChange={handleEnding}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              {
                                ['Нет', 'Да'].map((item, index) => (
                                  <option value={index} selected={index === data && data?.InformedOfTheRestrictionsCondition.InformedOfTheRestrictions}>{item}</option>
                                ))
                            }
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.InformedOfTheRestrictionsCondition.Color}
                refProps={refEnding3}
                element={(
                  <select
                              ref={refEnding3}
                              name="informedoftherestrictions"
                              value={ending.informedoftherestrictions}
                              onChange={handleEnding}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              {
                                        ['Нет', 'Да'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.InformedOfTheRestrictionsCondition.InformedOfTheRestrictions}>{item}</option>
                                        ))
                                    }
                            </select>
                              )}
                index={index}
                fieldName="informedoftherestrictions"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Доброволец включен в исследование?
          <div className="label-select">
            <select
              disabled={data && data?.VolunteerIncludedCondition.Color != 0}
              name="volunteerincluded"
              value={ending.volunteerincluded}
              onChange={handleEnding}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              {['Нет', 'Да'].map((item, index) => (
                <option
                  value={index.toString()}
                  key={index}
                  selected={data?.VolunteerIncludedCondition.VolunteerIncluded === index.toString()}
                >
                  {item}
                </option>
              ))}
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.VolunteerIncludedCondition.Color}
                refProps={refEnding4}
                element={(
                  <select
                              name="volunteerincluded"
                              value={ending.volunteerincluded}
                              onChange={handleEnding}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              {['Нет', 'Да'].map((item, index) => (
                                <option
                                  value={index.toString()}
                                  key={index}
                                  selected={data?.VolunteerIncludedCondition.VolunteerIncluded === index.toString()}
                                >
                                  {item}
                                </option>
                              ))}
                            </select>
                              )}
                index={index}
                fieldName="volunteerincluded"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Если «НЕТ», необходимо указать причину
          <div className="label-select">
            <input
              disabled={data && data?.ReasonIfNotCondition.Color != 0}
              type="text"
              name="reasonifnot"
              value={ending.reasonifnot}
              onChange={handleEnding}
              className="exact-protocol-select"
              placeholder={data && data.ReasonIfNotCondition.ReasonIfNot}
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.ReasonIfNotCondition.Color}
                refProps={refEnding5}
                element={(
                  <input
                              type="text"
                              name="reasonifnot"
                              value={ending.reasonifnot}
                              onChange={handleEnding}
                              className="exact-protocol-select"
                              placeholder={data && data.ReasonIfNotCondition.ReasonIfNot}
                            />
                              )}
                index={index}
                fieldName="reasonifnot"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Поле «Комментарий» заполняется по желанию в произвольном тексте.
          <div className="label-select">
            <input
              disabled={data && data?.CommentCondition.Color != 0}
              ref={refEnding6}
              type="text"
              name="commentvalue"
              value={ending.commentvalue}
              onChange={handleEnding}
              className="exact-protocol-select"
              placeholder={data && data.CommentCondition.CommentValue}
            />
            <div className="label-select-block">
              <StateControl
                color={data && data?.CommentCondition.Color}
                refProps={refEnding6}
                element={(
                  <input
                              type="text"
                              ref={refEnding6}
                              name="commentvalue"
                              value={ending.commentvalue}
                              onChange={handleEnding}
                              className="exact-protocol-select"
                              placeholder={data && data.CommentCondition.CommentValue}
                            />
                              )}
                index={index}
                fieldName="commentvalue"
              />
            </div>
          </div>
        </label>
      </div>
      {
                data && data?.InformedOfTheRestrictionsCondition.Color !== 1
                  ? <button className="modal-button" type="submit" onClick={handleSave}>Отправить</button>
                  : ''
            }
    </div>
  );
};

export default Ending;
