import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import StateControl from '../../../stateControl/StateControl';
import { axiosRequest } from '../../../../utils/request/NewAxiosRequest';

const CriteriaForNonInclusion = ({
  data, index, anchorClassname, setIsColorRed, setIsOptionsColorRed, isOptionsColorRed,
}) => {
  const [criteriaForNonInclusion, setCriteriaForNonInclusion] = useState({
    lackofsignedinformedconsent: data.LackOfSignedInformedConsentCondition.LackOfSignedInformedConsent,
    steroidtherapy: data.SteroidTherapyCondition.SteroidTherapy,
    therapywithimmunosuppressivedrugs: data.TherapyWithImmunosuppressiveDrugsCondition.TherapyWithImmunosuppressiveDrugs,
    femalesubjectsduringpregnancy: data.FemaleSubjectsDuringPregnancyCondition.FemaleSubjectsDuringPregnancy,
    strokeinlessthanoneyear: data && data.StrokeInLessThanOneYearCondition.StrokeInLessThanOneYear,
    chronicsystemicinfections: data && data.ChronicSystemicInfectionsCondition.ChronicSystemicInfections,
    aggravatedallergichistory: data && data.AggravatedAllergicHistoryCondition.AggravatedAllergicHistory,
    presenceofahistoryofneoplasms: data && data.PresenceOfAHistoryOfNeoplasmsCondition.PresenceOfAHistoryOfNeoplasms,
    historyofsplenectomy: data && data.HistoryOfSplenectomyCondition.HistoryOfSplenectomy,
    neutropenia: data && data.NeutropeniaCondition.Neutropenia,
    subjectswithactivesyphilis: data && data.SubjectsWithActiveSyphilisCondition.SubjectsWithActiveSyphilis,
    anorexia: data && data.AnorexiaCondition.Anorexia,
    extensivetattoos: data && data.ExtensiveTattoosCondition.ExtensiveTattoos,
    takingnarcoticandpsychostimulantdrugs: data && data.TakingNarcoticAndPsychostimulantDrugsCondition.TakingNarcoticAndPsychostimulantDrugs,
    smokingmorethantencigarettesaday: data && data.SmokingMoretThanTenCigarettesADayCondition.SmokingMoretThanTenCigarettesADay,
    alcoholintake: data.AlcoholIntakeCondition.AlcoholIntake,
    plannedhospitalization: data.PlannedHospitalizationConditiont.PlannedHospitalization,
    donorblooddonation: data.DonorBloodDonationCondition.DonorBloodDonation,
    subjectparticipationinanyotherstudy: data.SubjectParticipationInAnyOtherStudyCondition.SubjectParticipationInAnyOtherStudy,
    anyvaccinationinthelastmonth: data.AnyVaccinationInTheLastMonthCondition.AnyVaccinationInTheLastMonth,
    inabilitytoreadinrussian: data.InabilityToReadInRussianCondition.InabilityToReadInRussian,
    researchcenterstaff: data.ResearchCenterStaffCondition.ResearchCenterStaff,
    anyotherstateofthesubjectofthestudy: data.AnyOtherStateOfTheSubjectOfTheStudyCondition.AnyOtherStateOfTheSubjectOfTheStudy,
  });
  const params = useParams();
  const refNon1 = useRef();
  const refNon2 = useRef();
  const refNon3 = useRef();
  const refNon4 = useRef();
  const refNon5 = useRef();
  const refNon6 = useRef();
  const refNon7 = useRef();
  const refNon8 = useRef();
  const refNon9 = useRef();
  const refNon10 = useRef();
  const refNon11 = useRef();
  const refNon12 = useRef();
  const refNon13 = useRef();
  const refNon14 = useRef();
  const refNon15 = useRef();
  const refNon16 = useRef();
  const refNon17 = useRef();
  const refNon18 = useRef();
  const refNon19 = useRef();
  const refNon20 = useRef();
  const refNon21 = useRef();
  const refNon22 = useRef();
  const refNon23 = useRef();
  // console.log(data)

  const handleCriteriaForNonInclusion = (event) => {
    const { name, value } = event.target;
    setCriteriaForNonInclusion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    await axiosRequest.patch('/subject/screening/exclusioncriteria', {
      aggravatedallergichistory: +criteriaForNonInclusion.aggravatedallergichistory,
      alcoholintake: +criteriaForNonInclusion.alcoholintake,
      anorexia: +criteriaForNonInclusion.anorexia,
      anyotherstateofthesubjectofthestudy: +criteriaForNonInclusion.anyotherstateofthesubjectofthestudy,
      anyvaccinationinthelastmonth: +criteriaForNonInclusion.anyvaccinationinthelastmonth,
      chronicsystemicinfections: +criteriaForNonInclusion.chronicsystemicinfections,
      donorblooddonation: +criteriaForNonInclusion.donorblooddonation,
      extensivetattoos: +criteriaForNonInclusion.extensivetattoos,
      femalesubjectsduringpregnancy: +criteriaForNonInclusion.femalesubjectsduringpregnancy,
      historyofsplenectomy: +criteriaForNonInclusion.historyofsplenectomy,
      inabilitytoreadinrussian: +criteriaForNonInclusion.inabilitytoreadinrussian,
      lackofsignedinformedconsent: +criteriaForNonInclusion.lackofsignedinformedconsent,
      neutropenia: +criteriaForNonInclusion.neutropenia,
      plannedhospitalization: +criteriaForNonInclusion.plannedhospitalization,
      presenceofahistoryofneoplasms: +criteriaForNonInclusion.presenceofahistoryofneoplasms,
      researchcenterstaff: +criteriaForNonInclusion.researchcenterstaff,
      smokingmorethantencigarettesaday: +criteriaForNonInclusion.smokingmorethantencigarettesaday,
      steroidtherapy: +criteriaForNonInclusion.steroidtherapy,
      strokeinlessthanoneyear: +criteriaForNonInclusion.strokeinlessthanoneyear,
      subjectparticipationinanyotherstudy: +criteriaForNonInclusion.subjectparticipationinanyotherstudy,
      subjectswithactivesyphilis: +criteriaForNonInclusion.subjectswithactivesyphilis,
      takingnarcoticandpsychostimulantdrugs: +criteriaForNonInclusion.takingnarcoticandpsychostimulantdrugs,
      therapywithimmunosuppressivedrugs: +criteriaForNonInclusion.therapywithimmunosuppressivedrugs,
      protocol_id: parseInt(params.protocolId),
      subject_num: (index).toString(),
    });
    window.location.reload();
  };

  const colors = Object.values(data).map((condition: any) => condition.Color);
  if (colors.includes(3) || colors.includes(5)) {
    setIsColorRed(true);
    if (isOptionsColorRed.exclusionСriteria !== true) {
      setIsOptionsColorRed((prevState) => ({
        ...prevState,
        exclusionСriteria: true,
      }));
    }
  }

  return (
    <div className="form" id={anchorClassname}>
      <h3>Критерии невключения в иследование</h3>
      <hr className="hr" />
      <div className="section">
        <label>
          Отсутствие подписанного информированного согласия
          <div className="label-select">
            <select
              ref={refNon1}
              disabled={data && data?.LackOfSignedInformedConsentCondition.Color != 0}
              name="lackofsignedinformedconsent"
              value={criteriaForNonInclusion.lackofsignedinformedconsent}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.LackOfSignedInformedConsentCondition.Color}
                refProps={refNon1}
                element={(
                  <select
                              ref={refNon1}
                              name="lackofsignedinformedconsent"
                              value={criteriaForNonInclusion.lackofsignedinformedconsent}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="lackofsignedinformedconsent"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Терапия стероидами (за исключением гормональных контрацептивных препаратов) и/или иммуноглобулинами или другими препаратами крови, не завершившаяся за 30 дней до включения в исследование
          <div className="label-select">
            <select
              disabled={data && data?.SteroidTherapyCondition.Color != 0}
              ref={refNon2}
              name="steroidtherapy"
              value={criteriaForNonInclusion.steroidtherapy}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.SteroidTherapyCondition.Color}
                refProps={refNon2}
                element={(
                  <select
                              ref={refNon2}
                              name="steroidtherapy"
                              onChange={handleCriteriaForNonInclusion}
                              value={criteriaForNonInclusion.steroidtherapy}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="steroidtherapy"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Терапия иммуносупрессивными препаратами, завершившаяся менее чем за 3 месяца до включения в исследование
          <div className="label-select">
            <select
              disabled={data && data?.TherapyWithImmunosuppressiveDrugsCondition.Color != 0}
              ref={refNon3}
              name="therapywithimmunosuppressivedrugs"
              value={criteriaForNonInclusion.therapywithimmunosuppressivedrugs}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.TherapyWithImmunosuppressiveDrugsCondition.Color}
                refProps={refNon3}
                element={(
                  <select
                              ref={refNon3}
                              name="therapywithimmunosuppressivedrugs"
                              value={criteriaForNonInclusion.therapywithimmunosuppressivedrugs}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="therapywithimmunosuppressivedrugs"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Субъекты женского пола в период беременности или кормления грудью
          <div className="label-select">
            <select
              disabled={data && data?.FemaleSubjectsDuringPregnancyCondition.Color != 0}
              ref={refNon4}
              name="femalesubjectsduringpregnancy"
              value={criteriaForNonInclusion.femalesubjectsduringpregnancy}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.FemaleSubjectsDuringPregnancyCondition.Color}
                refProps={refNon4}
                element={(
                  <select
                              ref={refNon4}
                              name="femalesubjectsduringpregnancy"
                              value={criteriaForNonInclusion.femalesubjectsduringpregnancy}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="femalesubjectsduringpregnancy"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Перенесенный менее чем за один год до включения в исследование острый коронарный синдром или инсульт
          <div className="label-select">
            <select
              disabled={data && data?.StrokeInLessThanOneYearCondition.Color != 0}
              ref={refNon5}
              name="strokeinlessthanoneyear"
              value={criteriaForNonInclusion.strokeinlessthanoneyear}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.StrokeInLessThanOneYearCondition.Color}
                refProps={refNon5}
                element={(
                  <select
                              ref={refNon5}
                              name="strokeinlessthanoneyear"
                              value={criteriaForNonInclusion.strokeinlessthanoneyear}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="strokeinlessthanoneyear"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Туберкулез, хронические системные инфекции
          <div className="label-select">
            <select
              disabled={data && data?.ChronicSystemicInfectionsCondition.Color != 0}
              ref={refNon6}
              name="chronicsystemicinfections"
              value={criteriaForNonInclusion.chronicsystemicinfections}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.ChronicSystemicInfectionsCondition.Color}
                refProps={refNon6}
                element={(
                  <select
                              ref={refNon6}
                              name="chronicsystemicinfections"
                              value={criteriaForNonInclusion.chronicsystemicinfections}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="chronicsystemicinfections"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отягощенный аллергологический анамнез (наличие в анамнезе сведений об анафилактическом шоке, отеке Квинке, полиморфной экссудативной экземе, сывороточной болезни), гиперчувствительность или аллергические реакции на введение иммунобиологических препаратов, известные аллергические реакции на компоненты препарата, обострение аллергических заболеваний на день включения в исследование
          <div className="label-select">
            <select
              disabled={data && data?.AggravatedAllergicHistoryCondition.Color != 0}
              ref={refNon7}
              name="aggravatedallergichistory"
              value={criteriaForNonInclusion.aggravatedallergichistory}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.AggravatedAllergicHistoryCondition.Color}
                refProps={refNon7}
                element={(
                  <select
                              ref={refNon7}
                              name="aggravatedallergichistory"
                              value={criteriaForNonInclusion.aggravatedallergichistory}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="aggravatedallergichistory"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Наличие в анамнезе новообразований (коды МКБ C00-D09)
          <div className="label-select">
            <select
              disabled={data && data?.PresenceOfAHistoryOfNeoplasmsCondition.Color != 0}
              ref={refNon8}
              name="presenceofahistoryofneoplasms"
              value={criteriaForNonInclusion.presenceofahistoryofneoplasms}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.PresenceOfAHistoryOfNeoplasmsCondition.Color}
                refProps={refNon8}
                element={(
                  <select
                              ref={refNon8}
                              name="presenceofahistoryofneoplasms"
                              value={criteriaForNonInclusion.presenceofahistoryofneoplasms}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="presenceofahistoryofneoplasms"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Спленэктомия в анамнезе
          <div className="label-select">
            <select
              disabled={data && data?.HistoryOfSplenectomyCondition.Color != 0}
              ref={refNon9}
              name="historyofsplenectomy"
              value={criteriaForNonInclusion.historyofsplenectomy}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.HistoryOfSplenectomyCondition.Color}
                refProps={refNon9}
                element={(
                  <select
                              ref={refNon9}
                              name="historyofsplenectomy"
                              value={criteriaForNonInclusion.historyofsplenectomy}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="historyofsplenectomy"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Нейтропения (снижение абсолютного числа нейтрофилов менее 1000/мм3), агранулоцитоз, значительная кровопотеря, тяжелая анемия (гемоглобин менее 80 г/л), иммунодефицит в анамнезе в течение 6 месяцев до включения в исследование
          <div className="label-select">
            <select
              disabled={data && data?.NeutropeniaCondition.Color != 0}
              ref={refNon10}
              name="neutropenia"
              value={criteriaForNonInclusion.neutropenia}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NeutropeniaCondition.Color}
                refProps={refNon10}
                element={(
                  <select
                              ref={refNon10}
                              name="neutropenia"
                              value={criteriaForNonInclusion.neutropenia}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="neutropenia"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Субъекты с активной формой сифилиса, ВИЧ/СПИД, гепатиты B и C
          <div className="label-select">
            <select
              disabled={data && data?.SubjectsWithActiveSyphilisCondition.Color != 0}
              ref={refNon11}
              name="subjectswithactivesyphilis"
              value={criteriaForNonInclusion.subjectswithactivesyphilis}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.SubjectsWithActiveSyphilisCondition.Color}
                refProps={refNon11}
                element={(
                  <select
                              ref={refNon11}
                              name="subjectswithactivesyphilis"
                              value={criteriaForNonInclusion.subjectswithactivesyphilis}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="subjectswithactivesyphilis"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Анорексия, белковый дефицит любого происхождения
          <div className="label-select">
            <select
              disabled={data && data?.AnorexiaCondition.Color != 0}
              ref={refNon12}
              name="anorexia"
              value={criteriaForNonInclusion.anorexia}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.AnorexiaCondition.Color}
                refProps={refNon12}
                element={(
                  <select
                              ref={refNon12}
                              name="anorexia"
                              value={criteriaForNonInclusion.anorexia}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="anorexia"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Обширные татуировки на местах введения препарата (область дельтовидной мышцы), не позволяющие оценить местную реакцию на введение ИЛП
          <div className="label-select">
            <select
              disabled={data && data?.ExtensiveTattoosCondition.Color != 0}
              ref={refNon13}
              name="extensivetattoos"
              value={criteriaForNonInclusion.extensivetattoos}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.ExtensiveTattoosCondition.Color}
                refProps={refNon13}
                element={(
                  <select
                              ref={refNon13}
                              name="extensivetattoos"
                              value={criteriaForNonInclusion.extensivetattoos}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="extensivetattoos"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Прием наркотических и психостимулирующих препаратов в настоящее время или в анамнезе
          <div className="label-select">
            <select
              disabled={data && data?.TakingNarcoticAndPsychostimulantDrugsCondition.Color != 0}
              ref={refNon14}
              name="takingnarcoticandpsychostimulantdrugs"
              value={criteriaForNonInclusion.takingnarcoticandpsychostimulantdrugs}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.TakingNarcoticAndPsychostimulantDrugsCondition.Color}
                refProps={refNon14}
                element={(
                  <select
                              ref={refNon14}
                              name="takingnarcoticandpsychostimulantdrugs"
                              value={criteriaForNonInclusion.takingnarcoticandpsychostimulantdrugs}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="takingnarcoticandpsychostimulantdrugs"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Курение: более 10 сигарет в день
          <div className="label-select">
            <select
              disabled={data && data?.SmokingMoretThanTenCigarettesADayCondition.Color != 0}
              ref={refNon15}
              name="smokingmorethantencigarettesaday"
              value={criteriaForNonInclusion.smokingmorethantencigarettesaday}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.SmokingMoretThanTenCigarettesADayCondition.Color}
                refProps={refNon15}
                element={(
                  <select
                              ref={refNon15}
                              name="smokingmorethantencigarettesaday"
                              value={criteriaForNonInclusion.smokingmorethantencigarettesaday}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="smokingmorethantencigarettesaday"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Прием алкоголя превышающий уровень низкого риска: не более 20 граммов чистого алкоголя в день, не более 5 дней в неделю, прием алкоголя в течение 48 часов до введения исследуемого препарата
          <div className="label-select">
            <select
              disabled={data && data?.AlcoholIntakeCondition.Color != 0}
              ref={refNon16}
              name="alcoholintake"
              value={criteriaForNonInclusion.alcoholintake}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.AlcoholIntakeCondition.Color}
                refProps={refNon16}
                element={(
                  <select
                              ref={refNon16}
                              name="alcoholintake"
                              value={criteriaForNonInclusion.alcoholintake}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="alcoholintake"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Плановая госпитализация и/или хирургическое вмешательство в период участия в исследовании, а также за 4 недели до предполагаемой даты вакцинации
          <div className="label-select">
            <select
              disabled={data && data?.PlannedHospitalizationConditiont.Color != 0}
              ref={refNon17}
              name="plannedhospitalization"
              value={criteriaForNonInclusion.plannedhospitalization}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.PlannedHospitalizationConditiont.Color}
                refProps={refNon17}
                element={(
                  <select
                              ref={refNon17}
                              name="plannedhospitalization"
                              value={criteriaForNonInclusion.plannedhospitalization}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="plannedhospitalization"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Донорская сдача крови (450 мл и более крови или плазмы) менее чем за 2 месяца до начала исследования
          <div className="label-select">
            <select
              disabled={data && data?.DonorBloodDonationCondition.Color != 0}
              ref={refNon18}
              name="donorblooddonation"
              value={criteriaForNonInclusion.donorblooddonation}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.DonorBloodDonationCondition.Color}
                refProps={refNon18}
                element={(
                  <select
                              ref={refNon18}
                              name="donorblooddonation"
                              value={criteriaForNonInclusion.donorblooddonation}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="donorblooddonation"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Участие субъекта в любом другом интервенционном клиническом исследовании за последние 90 дней
          <div className="label-select">
            <select
              disabled={data && data?.SubjectParticipationInAnyOtherStudyCondition.Color != 0}
              ref={refNon19}
              name="subjectparticipationinanyotherstudy"
              value={criteriaForNonInclusion.subjectparticipationinanyotherstudy}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.SubjectParticipationInAnyOtherStudyCondition.Color}
                refProps={refNon19}
                element={(
                  <select
                              ref={refNon19}
                              name="subjectparticipationinanyotherstudy"
                              value={criteriaForNonInclusion.subjectparticipationinanyotherstudy}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="subjectparticipationinanyotherstudy"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Любая вакцинация за последние 30 дней
          <div className="label-select">
            <select
              disabled={data && data?.AnyVaccinationInTheLastMonthCondition.Color != 0}
              ref={refNon20}
              name="anyvaccinationinthelastmonth"
              value={criteriaForNonInclusion.anyvaccinationinthelastmonth}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.AnyVaccinationInTheLastMonthCondition.Color}
                refProps={refNon20}
                element={(
                  <select
                              ref={refNon20}
                              name="anyvaccinationinthelastmonth"
                              value={criteriaForNonInclusion.anyvaccinationinthelastmonth}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="anyvaccinationinthelastmonth"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Неспособность читать на русском языке; невозможность или нежелание понять суть исследования. Любые другие состояния, которые ограничивают правомерность получения информированного согласия или могут повлиять на способность добровольца принять участие в исследовании повлиять на способность добровольца принять участие в исследовании
          <div className="label-select">
            <select
              disabled={data && data?.InabilityToReadInRussianCondition.Color != 0}
              ref={refNon21}
              name="inabilitytoreadinrussian"
              value={criteriaForNonInclusion.inabilitytoreadinrussian}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.InabilityToReadInRussianCondition.Color}
                refProps={refNon21}
                element={(
                  <select
                              ref={refNon21}
                              name="inabilitytoreadinrussian"
                              value={criteriaForNonInclusion.inabilitytoreadinrussian}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="inabilitytoreadinrussian"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Персонал исследовательских центров и другие сотрудники, непосредственно участвующие в проведении исследования и члены их семей (главный исследователь и члены исследовательской команды)
          <div className="label-select">
            <select
              disabled={data && data?.ResearchCenterStaffCondition.Color != 0}
              ref={refNon22}
              name="researchcenterstaff"
              value={criteriaForNonInclusion.researchcenterstaff}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.ResearchCenterStaffCondition.Color}
                refProps={refNon22}
                element={(
                  <select
                              ref={refNon22}
                              name="researchcenterstaff"
                              value={criteriaForNonInclusion.researchcenterstaff}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="researchcenterstaff"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Любое иное состояние субъекта исследования, которое, по мнению-врача- исследователя, может препятствовать завершению исследования в соответствии с протоколом
          <div className="label-select">
            <select
              disabled={data && data?.AnyOtherStateOfTheSubjectOfTheStudyCondition.Color != 0}
              ref={refNon23}
              name="anyotherstateofthesubjectofthestudy"
              value={criteriaForNonInclusion.anyotherstateofthesubjectofthestudy}
              onChange={handleCriteriaForNonInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.AnyOtherStateOfTheSubjectOfTheStudyCondition.Color}
                refProps={refNon23}
                element={(
                  <select
                              ref={refNon23}
                              name="anyotherstateofthesubjectofthestudy"
                              value={criteriaForNonInclusion.anyotherstateofthesubjectofthestudy}
                              onChange={handleCriteriaForNonInclusion}
                              className="exact-protocol-select"
                            >
                              <option value="">Выберите</option>
                              <option value={1}>Да</option>
                              <option value={0}>Нет</option>
                            </select>
                              )}
                index={index}
                fieldName="anyotherstateofthesubjectofthestudy"
              />
            </div>
          </div>
        </label>
      </div>
      {
                data && data?.AnyOtherStateOfTheSubjectOfTheStudyCondition.Color !== 1
                  ? <button className="modal-button" type="submit" onClick={handleSave}>Сохранить</button>
                  : ''
            }
    </div>
  );
};

export default CriteriaForNonInclusion;
