import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import StateControl from '../../stateControl/StateControl';

const AdverseEvent = ({
  data, index, anchorClassname, setIsColorRed, setIsOptionsColorRed, isOptionsColorRed,
}) => {
  // console.log(data)
  const [adverse, setAdverse] = useState({
    adverseEventsRegisteredCondition: data.AdverseEventsRegisteredCondition.AdverseEventsRegistered,
    descriptionOfTheAdverseEventCondition: data.DescriptionOfTheAdverseEventCondition.DescriptionOfTheAdverseEvent,
    dateOfStartAECondition: data.DateOfStartAECondition.DateOfStartAE,
    timeOfStart: '',
    dateOfEndAECondition: data.DateOfEndAECondition.DateOfEndAE,
    timeOfEnd: '',
    isItSeriousCondition: data.IsItSeriousCondition.IsItSerious,
    recurringPhenomenonCondition: data.RecurringPhenomenonCondition.RecurringPhenomenon,
    associationWithTheDrugUsedCondition: data.AssociationWithTheDrugUsedCondition.AssociationWithTheDrugUsed,
    foresightCondition: data.ForesightCondition.Foresight,
    connectionBetweenAEAndDUCondition: data.ConnectionBetweenAEAndDUCondition.ConnectionBetweenAEAndDU,
    renewalAfterUseCondition: data.RenewalAfterUseCondition.RenewalAfterUse,
    localReactionCondition: data.LocalReactionCondition.LocalReaction,
    subjectDropoutCondition: data.SubjectDropoutCondition.SubjectDropout,
    measuresTakenCondition: data.MeasuresTakenCondition.MeasuresTaken,
    measuresTakenOnUDCondition: data.MeasuresTakenOnUDCondition.MeasuresTakenOnUD,
    exodusCondition: data.ExodusCondition.Exodus,
    severityCondition: data.SeverityCondition.Severity,
    severityCriterionCondition: data.SeverityCriterionCondition.SeverityCriterion,

    testImpactCondition: data.TestImpactCondition.TestImpact,
    testImpactComment: '',

    doseEffectCondition: data.DoseEffectCondition.DoseEffect,
    doseEffectComment: '',

    impactOnHospitalStayCondition: data.ImpactOnHospitalStayCondition.ImpactOnHospitalStay,
    impactComment: '',

    relationshipWithMedicationCondition: data.RelationshipWithMedicationCondition.RelationshipWithMedication,
    expectancyCondition: data.ExpectancyCondition.Expectancy,
  });

  const params = useParams();

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const ref11 = useRef();
  const ref12 = useRef();
  const ref13 = useRef();
  const ref14 = useRef();
  const ref15 = useRef();
  const ref16 = useRef();
  const ref17 = useRef();
  const ref18 = useRef();
  const ref19 = useRef();
  const ref20 = useRef();
  const ref21 = useRef();
  const ref22 = useRef();
  const ref23 = useRef();
  const ref24 = useRef();
  const ref25 = useRef();
  const ref26 = useRef();
  const ref27 = useRef();
  const ref28 = useRef();

  const handleAdverse = (event) => {
    const { name, value } = event.target;
    setAdverse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const colors = Object.values(data).map((condition: any) => condition.Color);
  // if (colors.includes(3) || colors.includes(5)) {
  //     setIsColorRed(true);
  //     if (isOptionsColorRed.startOfScreening !== true) {
  //         setIsOptionsColorRed(prevState => ({
  //             ...prevState,
  //             startOfScreening: true
  //         }));
  //     }
  // }

  return (
    <div className="form" id={anchorClassname}>
      <h3>Нежелательное явление</h3>
      <hr className="hr" />
      <div className="section">
        <label>
          Нежелательные явления зарегистрированы?
          <div className="label-select">
            <select
              disabled={data && data?.AdverseEventsRegisteredCondition.Color != 0}
              ref={ref1}
              name="adverseEventsRegisteredCondition"
              value={adverse.adverseEventsRegisteredCondition}
              onChange={handleAdverse}
              className="exact-protocol-select"
            >
              <option value="" selected disabled>Выберите</option>
              {
                                ['Нет', 'Да'].map((item, index) => (
                                  <option value={index} selected={index === data && data?.AdverseEventsRegisteredCondition.AdverseEventsRegistered}>{item}</option>
                                ))
                            }
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.AdverseEventsRegisteredCondition.Color}
                refProps={ref1}
                element={(
                            <select
                              ref={ref1}
                              name="adverseEventsRegisteredCondition"
                              value={adverse.adverseEventsRegisteredCondition}
                              onChange={handleAdverse}
                              className="exact-protocol-select"
                            >
                              <option value="" selected disabled>Выберите</option>
                              {
                                        ['Нет', 'Да'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.AdverseEventsRegisteredCondition.AdverseEventsRegistered}>{item}</option>
                                        ))
                                    }
                            </select>
                              )}
                index={index}
                fieldName="adverseEventsRegisteredCondition"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        {
                    adverse.adverseEventsRegisteredCondition === '1'
                    && (
                    <>
                      <label>
                        Описание нежелательного явления
                        <div className="label-select">
                          <input
                            disabled={data && data?.DescriptionOfTheAdverseEventCondition.Color != 0}
                            type="text"
                            ref={ref2}
                            name="descriptionOfTheAdverseEventCondition"
                            value={adverse.descriptionOfTheAdverseEventCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                            placeholder={data && data.DescriptionOfTheAdverseEventCondition.DescriptionOfTheAdverseEvent}
                          />
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.DescriptionOfTheAdverseEventCondition.Color} refProps={ref2} element={ */}
                          {/*        <input */}
                          {/*            type="text" */}
                          {/*            ref={ref2} */}
                          {/*            name="descriptionOfTheAdverseEventCondition" */}
                          {/*            value={adverse.descriptionOfTheAdverseEventCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*            placeholder={data && data.DescriptionOfTheAdverseEventCondition.DescriptionOfTheAdverseEvent} */}
                          {/*        /> */}
                          {/*    } index={index} fieldName={'descriptionOfTheAdverseEventCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Дата начала
                        <div className="label-select">
                          <input
                            disabled={data && data?.DateOfStartAECondition.Color != 0}
                            type="date"
                            ref={ref3}
                            name="dateOfStartAECondition"
                            value={adverse.dateOfStartAECondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                            placeholder={data && data.DateOfStartAECondition.DateOfStartAE}
                          />
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.DateOfStartAECondition.Color} refProps={ref3} element={ */}
                          {/*        <input */}
                          {/*            type="text" */}
                          {/*            ref={ref3} */}
                          {/*            name="dateOfStartAECondition" */}
                          {/*            value={adverse.dateOfStartAECondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*            placeholder={data && data.DateOfStartAECondition.DateOfStartAE} */}
                          {/*        /> */}
                          {/*    } index={index} fieldName={'dateOfStartAECondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Время начала
                        <div className="label-select">
                          <input
                            disabled={data && data?.DateOfStartAECondition.Color != 0}
                            type="time"
                            ref={ref4}
                            name="timeOfStart"
                            value={adverse.timeOfStart}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                            placeholder={adverse.timeOfStart}
                          />
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Дата конца
                        <div className="label-select">
                          <input
                            disabled={data && data?.DateOfEndAECondition.Color != 0}
                            type="date"
                            ref={ref5}
                            name="dateOfEndAECondition"
                            value={adverse.dateOfEndAECondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                            placeholder={data && data.DateOfEndAECondition.DateOfEndAE}
                          />
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.DateOfEndAECondition.Color} refProps={ref5} element={ */}
                          {/*        <input */}
                          {/*            type="text" */}
                          {/*            ref={ref5} */}
                          {/*            name="dateOfEndAECondition" */}
                          {/*            value={adverse.dateOfEndAECondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*            placeholder={data && data.DateOfEndAECondition.DateOfEndAE} */}
                          {/*        /> */}
                          {/*    } index={index} fieldName={'dateOfEndAECondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Время конца
                        <div className="label-select">
                          <input
                            disabled={data && data?.DateOfEndAECondition.Color != 0}
                            type="time"
                            ref={ref6}
                            name="timeOfEnd"
                            value={adverse.timeOfEnd}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                            placeholder={adverse.timeOfEnd}
                          />
                        </div>
                      </label>
                      <hr className="hr" />

                        {/* TODO НАПИСАТЬ ВОВЕ И СПРОСИТЬ ГДЕ ЭТОТ ПУНКТ */}
                      <label>
                        Признак, что нежелательное явление продолжается
                        <div className="label-select">
                          <select
                            disabled={data && data?.AdverseEventsRegisteredCondition.Color != 0}
                            ref={ref7}
                            name="adverseEventsRegisteredCondition"
                            value={adverse.adverseEventsRegisteredCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Нет', 'Да', 'Неизвестно'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.AdverseEventsRegisteredCondition.AdverseEventsRegisteredCondition}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.AdverseEventsRegisteredCondition.Color} refProps={ref7} element={ */}
                          {/*        <select */}
                          {/*            ref={ref7} */}
                          {/*            name="adverseEventsRegisteredCondition" */}
                          {/*            value={adverse.adverseEventsRegisteredCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Нет', 'Да'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.AdverseEventsRegisteredCondition.AdverseEventsRegisteredCondition}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'adverseEventsRegisteredCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Степень тяжести
                        <div className="label-select">
                          <select
                            disabled={data && data?.IsItSeriousCondition.Color != 0}
                            ref={ref8}
                            name="isItSeriousCondition"
                            value={adverse.isItSeriousCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Легкое', 'Средней тяжести', 'Тяжелое', 'Неизвестно'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.IsItSeriousCondition.IsItSerious}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.IsItSeriousCondition.Color} refProps={ref8} element={ */}
                          {/*        <select */}
                          {/*            ref={ref8} */}
                          {/*            name="isItSeriousCondition" */}
                          {/*            value={adverse.isItSeriousCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Легкое', 'Средней тяжести', 'Тяжелое', 'Неизвестно'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.IsItSeriousCondition.IsItSerious}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'isItSeriousCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Повторяющееся явление
                        <div className="label-select">
                          <select
                            disabled={data && data?.RecurringPhenomenonCondition.Color != 0}
                            ref={ref9}
                            name="recurringPhenomenonCondition"
                            value={adverse.recurringPhenomenonCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Нет', 'Да'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.RecurringPhenomenonCondition.RecurringPhenomenon}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.RecurringPhenomenonCondition.Color} refProps={ref9} element={ */}
                          {/*        <select */}
                          {/*            ref={ref9} */}
                          {/*            name="recurringPhenomenonCondition" */}
                          {/*            value={adverse.recurringPhenomenonCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Нет', 'Да'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.RecurringPhenomenonCondition.RecurringPhenomenon}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'recurringPhenomenonCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Связь с приемом ИП
                        <div className="label-select">
                          <select
                            disabled={data && data?.AssociationWithTheDrugUsedCondition.Color != 0}
                            ref={ref10}
                            name="associationWithTheDrugUsedCondition"
                            value={adverse.associationWithTheDrugUsedCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Определенная', 'Вероятная', 'Возможная', 'Сомнительная', 'Условная', 'Неклассифируемая', 'Не связано'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.AssociationWithTheDrugUsedCondition.AssociationWithTheDrugUsed}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.AssociationWithTheDrugUsedCondition.Color} refProps={ref10} element={ */}
                          {/*        <select */}
                          {/*            ref={ref10} */}
                          {/*            name="associationWithTheDrugUsedCondition" */}
                          {/*            value={adverse.associationWithTheDrugUsedCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Определенная', 'Вероятная', 'Возможная', 'Сомнительная', 'Условная', 'Неклассифируемая', 'Не связано'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.AssociationWithTheDrugUsedCondition.AssociationWithTheDrugUsed}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'associationWithTheDrugUsedCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Предвиденность
                        <div className="label-select">
                          <select
                            disabled={data && data?.ForesightCondition.Color != 0}
                            ref={ref11}
                            name="foresightCondition"
                            value={adverse.foresightCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Непредвиденное', 'Предвиденное', 'Оценка невозможна'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.ForesightCondition.Foresight}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.ForesightCondition.Color} refProps={ref11} element={ */}
                          {/*        <select */}
                          {/*            ref={ref11} */}
                          {/*            name="foresightCondition" */}
                          {/*            value={adverse.foresightCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Непредвиденное', 'Предвиденное', 'Оценка невозможна'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.ForesightCondition.Foresight}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'foresightCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Есть ли связь между завершением НЯ и отменой ИП?
                        <div className="label-select">
                          <select
                            disabled={data && data?.ConnectionBetweenAEAndDUCondition.Color != 0}
                            ref={ref12}
                            name="connectionBetweenAEAndDUCondition"
                            value={adverse.connectionBetweenAEAndDUCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Нет', 'Да', 'Неизвестно', 'Неприменимо'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.ConnectionBetweenAEAndDUCondition.ConnectionBetweenAEAndDU}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.ConnectionBetweenAEAndDUCondition.Color} refProps={ref12} element={ */}
                          {/*        <select */}
                          {/*            ref={ref12} */}
                          {/*            name="connectionBetweenAEAndDUCondition" */}
                          {/*            value={adverse.connectionBetweenAEAndDUCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Нет', 'Да', 'Неизвестно', 'Неприменимо'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.ConnectionBetweenAEAndDUCondition.ConnectionBetweenAEAndDU}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'connectionBetweenAEAndDUCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Отмечалось ли возобновление НЯ после повторного приема исследуемого препарата?
                        <div className="label-select">
                          <select
                            disabled={data && data?.RenewalAfterUseCondition.Color != 0}
                            ref={ref13}
                            name="renewalAfterUseCondition"
                            value={adverse.renewalAfterUseCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Нет', 'Да', 'Неизвестно', 'Неприменимо'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.RenewalAfterUseCondition.RenewalAfterUse}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.RenewalAfterUseCondition.Color} refProps={ref13} element={ */}
                          {/*        <select */}
                          {/*            ref={ref13} */}
                          {/*            name="renewalAfterUseCondition" */}
                          {/*            value={adverse.renewalAfterUseCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Нет', 'Да', 'Неизвестно', 'Неприменимо'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.RenewalAfterUseCondition.RenewalAfterUse}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'renewalAfterUseCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Это местная реакция?
                        <div className="label-select">
                          <select
                            disabled={data && data?.LocalReactionCondition.Color != 0}
                            ref={ref14}
                            name="localReactionCondition"
                            value={adverse.localReactionCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Нет', 'Да', 'Неизвестно', 'Неприменимо'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.LocalReactionCondition.LocalReaction}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.LocalReactionCondition.Color} refProps={ref14} element={ */}
                          {/*        <select */}
                          {/*            ref={ref14} */}
                          {/*            name="localReactionCondition" */}
                          {/*            value={adverse.localReactionCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Нет', 'Да', 'Неизвестно', 'Неприменимо'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.LocalReactionCondition.LocalReaction}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'localReactionCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Данное НЯ привело к выбыванию субъекта из исследования?
                        <div className="label-select">
                          <select
                            disabled={data && data?.SubjectDropoutCondition.Color != 0}
                            ref={ref15}
                            name="subjectDropoutCondition"
                            value={adverse.subjectDropoutCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Нет', 'Да'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.SubjectDropoutCondition.SubjectDropout}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.SubjectDropoutCondition.Color} refProps={ref15} element={ */}
                          {/*        <select */}
                          {/*            ref={ref15} */}
                          {/*            name="subjectDropoutCondition" */}
                          {/*            value={adverse.subjectDropoutCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Нет', 'Да'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.SubjectDropoutCondition.SubjectDropout}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'subjectDropoutCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Предпринятые меры
                        <div className="label-select">
                          <select
                            disabled={data && data?.MeasuresTakenCondition.Color != 0}
                            ref={ref16}
                            name="measuresTakenCondition"
                            value={adverse.measuresTakenCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Действия не предпринимались', 'Отмена исследуемого препарата', 'Назначение сопутствующей терапии', 'Назначение нелекарственной терапии', 'Другое лечение'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.MeasuresTakenCondition.MeasuresTaken}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.MeasuresTakenCondition.Color} refProps={ref16} element={ */}
                          {/*        <select */}
                          {/*            ref={ref16} */}
                          {/*            name="measuresTakenCondition" */}
                          {/*            value={adverse.measuresTakenCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Действия не предпринимались', 'Отмена исследуемого препарата', 'Назначение сопутствующей терапии', 'Назначение нелекарственной терапии', 'Другое лечение'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.MeasuresTakenCondition.MeasuresTaken}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'measuresTakenCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Предпринятые меры в отношении ИП
                        <div className="label-select">
                          <select
                            disabled={data && data?.MeasuresTakenOnUDCondition.Color != 0}
                            ref={ref17}
                            name="measuresTakenOnUDCondition"
                            value={adverse.measuresTakenOnUDCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Повышение дозы', 'Доза не изменялась', 'Снижение дозы', 'Временная отмена исследуемого препарата', 'Отмена исследуемого препарата', 'Не применимо', 'Неизвестно'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.MeasuresTakenOnUDCondition.MeasuresTakenOnUD}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.MeasuresTakenCondition.Color} refProps={ref17} element={ */}
                          {/*        <select */}
                          {/*            ref={ref17} */}
                          {/*            name="measuresTakenOnUDCondition" */}
                          {/*            value={adverse.measuresTakenOnUDCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Повышение дозы', 'Доза не изменялась', 'Снижение дозы', 'Временная отмена исследуемого препарата', 'Отмена исследуемого препарата', 'Не применимо', 'Неизвестно'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.MeasuresTakenOnUDCondition.MeasuresTakenOnUD}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'measuresTakenOnUDCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Исход нежелательного явления
                        <div className="label-select">
                          <select
                            disabled={data && data?.ExodusCondition.Color != 0}
                            ref={ref18}
                            name="exodusCondition"
                            value={adverse.exodusCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Переход в СНЯ', 'Стабилизация состояния', 'Выздоровление с последствиями', 'Выздоровление/прекращение НЯ', 'Улучшение состояние', 'Неизвестно'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.ExodusCondition.Exodus}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.ExodusCondition.Color} refProps={ref18} element={ */}
                          {/*        <select */}
                          {/*            ref={ref18} */}
                          {/*            name="exodusCondition" */}
                          {/*            value={adverse.exodusCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Переход в СНЯ', 'Стабилизация состояния', 'Выздоровление с последствиями', 'Выздоровление/прекращение НЯ', 'Улучшение состояние', 'Неизвестно'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.ExodusCondition.Exodus}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'exodusCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                        {/* TODO ЗАКОНЧИТЬ С 16 ПУНКТА */}
                      <label>
                        Является ли данное НЯ серьезным?
                        <div className="label-select">
                          <select
                            disabled={data && data?.SeverityCondition.Color != 0}
                            ref={ref19}
                            name="severityCondition"
                            value={adverse.severityCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Нет', 'Да'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.SeverityCondition.Severity}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.SeverityCondition.Color} refProps={ref19} element={ */}
                          {/*        <select */}
                          {/*            ref={ref19} */}
                          {/*            name="severityCondition" */}
                          {/*            value={adverse.severityCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Нет', 'Да'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.SeverityCondition.Severity}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'severityCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                        {
                            adverse.severityCondition === '1' && (
                            <>
                              <label>
                                Критерии серьезности
                                <div className="label-select">
                                  <select
                                    disabled={data && data?.SeverityCriterionCondition.Color != 0}
                                    ref={ref20}
                                    name="severityCriterionCondition"
                                    value={adverse.severityCriterionCondition}
                                    onChange={handleAdverse}
                                    className="exact-protocol-select"
                                  >
                                    <option value="" selected disabled>Выберите</option>
                                    {
                                                    ['Приводит к смерти', 'Представляет угрозу для жизни', 'Приводит к стойкой или значимой нетрудоспособности/инвалидности', ' Приводит к госпитализации в стационар или продлению текущей госпитализации', 'Представляет собой врожденную аномалию или порок развития', 'Любое неблагоприятное медицинское событие,\n'
                                                    + 'которое может представлять угрозу для субъекта', 'Другое'].map((item, index) => (
                                                      <option value={index} selected={index === data && data?.SeverityCriterion.SeverityCriterion}>{item}</option>
                                                    ))
                                                }
                                  </select>
                                  {/* <div className="label-select-block"> */}
                                  {/*    <StateControl color={data && data?.SeverityCondition.Color} refProps={ref19} element={ */}
                                  {/*        <select */}
                                  {/*            ref={ref19} */}
                                  {/*            name="severityCondition" */}
                                  {/*            value={adverse.severityCondition} */}
                                  {/*            onChange={handleAdverse} */}
                                  {/*            className="exact-protocol-select" */}
                                  {/*        > */}
                                  {/*            <option value="" selected disabled>Выберите</option> */}
                                  {/*            { */}
                                  {/*                ['Нет', 'Да'].map((item, index) => ( */}
                                  {/*                    <option value={index} selected={index === data && data?.SeverityCondition.Severity}>{item}</option> */}
                                  {/*                )) */}
                                  {/*            } */}
                                  {/*        </select> */}
                                  {/*    } index={index} fieldName={'severityCondition'}/> */}
                                  {/* </div> */}
                                </div>
                              </label>
                              <hr className="hr" />

                              <label>
                                Оказало ли данное СНЯ какое-либо влияние на режим введения ИП?
                                <div className="label-select">
                                  <select
                                    disabled={data && data?.TestImpactCondition.Color != 0}
                                    ref={ref21}
                                    name="testImpactCondition"
                                    value={adverse.testImpactCondition}
                                    onChange={handleAdverse}
                                    className="exact-protocol-select"
                                  >
                                    <option value="" selected disabled>Выберите</option>
                                    {
                                                    ['Нет', 'Да', 'Неизвестно'].map((item, index) => (
                                                      <option value={index} selected={index === data && data?.TestImpactCondition.TestImpact}>{item}</option>
                                                    ))
                                                }
                                  </select>
                                  {/* <div className="label-select-block"> */}
                                  {/*    <StateControl color={data && data?.SeverityCondition.Color} refProps={ref19} element={ */}
                                  {/*        <select */}
                                  {/*            ref={ref19} */}
                                  {/*            name="severityCondition" */}
                                  {/*            value={adverse.severityCondition} */}
                                  {/*            onChange={handleAdverse} */}
                                  {/*            className="exact-protocol-select" */}
                                  {/*        > */}
                                  {/*            <option value="" selected disabled>Выберите</option> */}
                                  {/*            { */}
                                  {/*                ['Нет', 'Да'].map((item, index) => ( */}
                                  {/*                    <option value={index} selected={index === data && data?.SeverityCondition.Severity}>{item}</option> */}
                                  {/*                )) */}
                                  {/*            } */}
                                  {/*        </select> */}
                                  {/*    } index={index} fieldName={'severityCondition'}/> */}
                                  {/* </div> */}
                                </div>
                              </label>
                              <hr className="hr" />

                              {
                                        adverse.testImpactCondition === '1'
                                        && (
                                        <>
                                          <label>
                                            Напишите комментарий
                                            <div className="label-select">
                                              <input
                                                disabled={data && data?.TestImpactCondition.Color != 0}
                                                type="text"
                                                ref={ref26}
                                                name="testImpactComment"
                                                value={adverse.testImpactComment}
                                                onChange={handleAdverse}
                                                className="exact-protocol-select"
                                                placeholder={adverse.testImpactComment}
                                              />
                                            </div>
                                          </label>
                                          <hr className="hr" />
                                        </>
                                        )
                                    }

                              <label>
                                Оказало ли данное СНЯ какое-либо влияние на дозу ИП?
                                <div className="label-select">
                                  <select
                                    disabled={data && data?.DoseEffectCondition.Color != 0}
                                    ref={ref22}
                                    name="doseEffectCondition"
                                    value={adverse.doseEffectCondition}
                                    onChange={handleAdverse}
                                    className="exact-protocol-select"
                                  >
                                    <option value="" selected disabled>Выберите</option>
                                    {
                                                    ['Нет', 'Да', 'Неизвестно'].map((item, index) => (
                                                      <option value={index} selected={index === data && data?.DoseEffectCondition.DoseEffect}>{item}</option>
                                                    ))
                                                }
                                  </select>
                                  {/* <div className="label-select-block"> */}
                                  {/*    <StateControl color={data && data?.SeverityCondition.Color} refProps={ref19} element={ */}
                                  {/*        <select */}
                                  {/*            ref={ref19} */}
                                  {/*            name="severityCondition" */}
                                  {/*            value={adverse.severityCondition} */}
                                  {/*            onChange={handleAdverse} */}
                                  {/*            className="exact-protocol-select" */}
                                  {/*        > */}
                                  {/*            <option value="" selected disabled>Выберите</option> */}
                                  {/*            { */}
                                  {/*                ['Нет', 'Да'].map((item, index) => ( */}
                                  {/*                    <option value={index} selected={index === data && data?.SeverityCondition.Severity}>{item}</option> */}
                                  {/*                )) */}
                                  {/*            } */}
                                  {/*        </select> */}
                                  {/*    } index={index} fieldName={'severityCondition'}/> */}
                                  {/* </div> */}
                                </div>
                              </label>
                              <hr className="hr" />

                              {
                                        adverse.doseEffectCondition === '1'
                                        && (
                                        <>
                                          <label>
                                            Напишите комментарий
                                            <div className="label-select">
                                              <input
                                                disabled={data && data?.DoseEffectCondition.Color != 0}
                                                type="text"
                                                ref={ref27}
                                                name="doseEffectComment"
                                                value={adverse.doseEffectComment}
                                                onChange={handleAdverse}
                                                className="exact-protocol-select"
                                                placeholder={adverse.doseEffectComment}
                                              />
                                            </div>
                                          </label>
                                          <hr className="hr" />
                                        </>
                                        )
                                    }

                              <label>
                                Оказало ли данное СНЯ какое-либо влияние на сроки госпитализации добровольца?
                                <div className="label-select">
                                  <select
                                    disabled={data && data?.ImpactOnHospitalStayCondition.Color != 0}
                                    ref={ref23}
                                    name="impactOnHospitalStayCondition"
                                    value={adverse.impactOnHospitalStayCondition}
                                    onChange={handleAdverse}
                                    className="exact-protocol-select"
                                  >
                                    <option value="" selected disabled>Выберите</option>
                                    {
                                                    ['Нет', 'Да', 'Неизвестно'].map((item, index) => (
                                                      <option value={index} selected={index === data && data?.ImpactOnHospitalStayCondition.ImpactOnHospitalStay}>{item}</option>
                                                    ))
                                                }
                                  </select>
                                  {/* <div className="label-select-block"> */}
                                  {/*    <StateControl color={data && data?.SeverityCondition.Color} refProps={ref19} element={ */}
                                  {/*        <select */}
                                  {/*            ref={ref19} */}
                                  {/*            name="severityCondition" */}
                                  {/*            value={adverse.severityCondition} */}
                                  {/*            onChange={handleAdverse} */}
                                  {/*            className="exact-protocol-select" */}
                                  {/*        > */}
                                  {/*            <option value="" selected disabled>Выберите</option> */}
                                  {/*            { */}
                                  {/*                ['Нет', 'Да'].map((item, index) => ( */}
                                  {/*                    <option value={index} selected={index === data && data?.SeverityCondition.Severity}>{item}</option> */}
                                  {/*                )) */}
                                  {/*            } */}
                                  {/*        </select> */}
                                  {/*    } index={index} fieldName={'severityCondition'}/> */}
                                  {/* </div> */}
                                </div>
                              </label>
                              <hr className="hr" />

                              {
                                        adverse.impactOnHospitalStayCondition === '1'
                                        && (
                                        <>
                                          <label>
                                            Напишите комментарий
                                            <div className="label-select">
                                              <input
                                                disabled={data && data?.ImpactOnHospitalStayCondition.Color != 0}
                                                type="text"
                                                ref={ref28}
                                                name="impactComment"
                                                value={adverse.impactComment}
                                                onChange={handleAdverse}
                                                className="exact-protocol-select"
                                                placeholder={adverse.impactComment}
                                              />
                                            </div>
                                          </label>
                                          <hr className="hr" />
                                        </>
                                        )
                                    }
                            </>
                            )
                        }

                        {/* 17 */}
                      <label>
                        Связь с приемом ИП (ФН), заполняется специалистом по фармаконадзору
                        <div className="label-select">
                          <select
                            disabled={data && data?.RelationshipWithMedicationCondition.Color != 0}
                            ref={ref24}
                            name="relationshipWithMedicationCondition"
                            value={adverse.relationshipWithMedicationCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Определенная', 'Вероятная', 'Возможная', 'Сомнительная', 'Условная', 'Неклассифируемая', 'Не связано'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.RelationshipWithMedicationCondition.RelationshipWithMedication}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.SeverityCondition.Color} refProps={ref19} element={ */}
                          {/*        <select */}
                          {/*            ref={ref19} */}
                          {/*            name="severityCondition" */}
                          {/*            value={adverse.severityCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Нет', 'Да'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.SeverityCondition.Severity}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'severityCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />

                      <label>
                        Ожидаемость (ФН)
                        <div className="label-select">
                          <select
                            disabled={data && data?.ExpectancyCondition.Color != 0}
                            ref={ref25}
                            name="expectancyCondition"
                            value={adverse.expectancyCondition}
                            onChange={handleAdverse}
                            className="exact-protocol-select"
                          >
                            <option value="" selected disabled>Выберите</option>
                            {
                                        ['Непредвиденное', 'Предвиденное', 'Оценка невозможна'].map((item, index) => (
                                          <option value={index} selected={index === data && data?.ExpectancyCondition.Expectancy}>{item}</option>
                                        ))
                                    }
                          </select>
                          {/* <div className="label-select-block"> */}
                          {/*    <StateControl color={data && data?.SeverityCondition.Color} refProps={ref19} element={ */}
                          {/*        <select */}
                          {/*            ref={ref19} */}
                          {/*            name="severityCondition" */}
                          {/*            value={adverse.severityCondition} */}
                          {/*            onChange={handleAdverse} */}
                          {/*            className="exact-protocol-select" */}
                          {/*        > */}
                          {/*            <option value="" selected disabled>Выберите</option> */}
                          {/*            { */}
                          {/*                ['Нет', 'Да'].map((item, index) => ( */}
                          {/*                    <option value={index} selected={index === data && data?.SeverityCondition.Severity}>{item}</option> */}
                          {/*                )) */}
                          {/*            } */}
                          {/*        </select> */}
                          {/*    } index={index} fieldName={'severityCondition'}/> */}
                          {/* </div> */}
                        </div>
                      </label>
                      <hr className="hr" />
                    </>
                    )
                }
      </div>
    </div>
  );
};

export default AdverseEvent;
