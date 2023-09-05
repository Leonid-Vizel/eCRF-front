import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import StateControl from '../../../stateControl/StateControl';
import { axiosRequest } from '../../../../utils/request/NewAxiosRequest';

const CriteriaForInclusion = ({
  data, index, anchorClassname, setIsColorRed, setIsOptionsColorRed, isOptionsColorRed,
}) => {
  const [criteriaForInclusion, setCriteriaForInclusion] = useState({
    presenceofaninformationpanel: data.PresenceOfAnInformationPanelCondition.PresenceOfAnInformationPanel,
    aged18to55years: data.Aged18To55YearsCondition.Aged18To55Years,
    negativehivtestresult: data && data.NegativeHIVTestResultCondition.NegativeHIVTestResult,
    bodymassindex: data.BodyMassIndexCondition.BodyMassIndex,
    absenceofacuteinfectiousdiseases: data.AbsenceOfAcuteInfectiousDiseasesCondition.AbsenceOfAcuteInfectiousDiseases,
    consenttouseeffectivemethodsofcontraception: data.ConsentToUseEffectiveMethodsOfContraceptionCondition.ConsentToUseEffectiveMethodsOfContraception,
    negativepregnancytest: data.NegativePregnancyTestCondition.NegativePregnancyTest,
    negativedrugtest: data && data.NegativeDrugTestCondition.NegativeDrugTest,
    negativealcoholtest: data.NegativeAlcoholTestCondition.NegativeAlcoholTest,
    nohistoryofseverepostvaccinationreactions: data.NoHistoryOfSeverePostVaccinationReactionsCondition.NoHistoryOfSeverePostVaccinationReactions,
    indicatorsbloodtestsatscreeningwithin: data.IndicatorsBloodTestsAtScreeningWithinCondition.IndicatorsBloodTestsAtScreeningWithin,
    nomyocardialchanges: data.NoMyocardialChangesCondition.NoMyocardialChanges,
    negativetestresultforCOVID: data.NegativeTestResultForCOVIDCondition.NegativeTestResultForCOVID,
    nocontraindicationstovaccination: data.NoContraindicationsToVaccinationCondition.NoContraindicationsToVaccination,
  });

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const params = useParams();
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

  const handleCriteriaForInclusion = (event) => {
    const { name, value } = event.target;
    setCriteriaForInclusion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    await axiosRequest.patch('/subject/screening/inclusioncriteria', {
      absenceofacuteinfectiousdiseases: +criteriaForInclusion.absenceofacuteinfectiousdiseases,
      aged18to55years: +criteriaForInclusion.aged18to55years,
      bodymassindex: +criteriaForInclusion.bodymassindex,
      consenttouseeffectivemethodsofcontraception: +criteriaForInclusion.consenttouseeffectivemethodsofcontraception,
      indicatorsbloodtestsatscreeningwithin: +criteriaForInclusion.indicatorsbloodtestsatscreeningwithin,
      negativealcoholtest: +criteriaForInclusion.negativealcoholtest,
      negativedrugtest: +criteriaForInclusion.negativedrugtest,
      negativehivtestresult: +criteriaForInclusion.negativehivtestresult,
      negativepregnancytest: +criteriaForInclusion.negativepregnancytest,
      negativetestresultforCOVID: +criteriaForInclusion.negativetestresultforCOVID,
      nocontraindicationstovaccination: +criteriaForInclusion.nocontraindicationstovaccination,
      nohistoryofseverepostvaccinationreactions: +criteriaForInclusion.nohistoryofseverepostvaccinationreactions,
      nomyocardialchanges: +criteriaForInclusion.nomyocardialchanges,
      presenceofaninformationpanel: +criteriaForInclusion.presenceofaninformationpanel,
      protocol_id: parseInt(params.protocolId),
      subject_num: (index).toString(),
    });
    window.location.reload();
  };

  const colors = Object.values(data).map((condition: any) => condition.Color);
  if (colors.includes(3) || colors.includes(5)) {
    setIsColorRed(true);
    if (isOptionsColorRed.inclusionCriteria !== true) {
      setIsOptionsColorRed((prevState) => ({
        ...prevState,
        inclusionCriteria: true,
      }));
    }
  }

  return (
    <div className="form" id={anchorClassname}>
      <h3>Критерии включения в исследование</h3>
      <hr className="hr" />
      <div className="section">
        <label>
          Наличие письменного информированного согласия субъекта на участие в исследовании
          <div className="label-select">
            <select
              disabled={data && data?.PresenceOfAnInformationPanelCondition.Color != 0}
              ref={ref1}
              name="presenceofaninformationpanel"
              value={criteriaForInclusion.presenceofaninformationpanel}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.PresenceOfAnInformationPanelCondition.Color}
                refProps={ref1}
                element={(
                  <select
                    ref={ref1}
                    name="presenceofaninformationpanel"
                    value={criteriaForInclusion.presenceofaninformationpanel}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="presenceofaninformationpanel"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Мужчины и женщины в возрасте от 18 до 55 лет
          <div className="label-select">
            <select
              disabled={data && data?.Aged18To55YearsCondition.Color != 0}
              ref={ref2}
              name="aged18to55years"
              value={criteriaForInclusion.aged18to55years}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.Aged18To55YearsCondition.Color}
                refProps={ref2}
                element={(
                  <select
                    ref={ref2}
                    name="aged18to55years"
                    value={criteriaForInclusion.aged18to55years}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="aged18to55years"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отрицательный результат исследования на ВИЧ, гепатиты, сифилис
          <div className="label-select">
            <select
              disabled={data && data?.NegativeHIVTestResultCondition.Color != 0}
              ref={ref3}
              name="negativehivtestresult"
              value={criteriaForInclusion.negativehivtestresult}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NegativeHIVTestResultCondition.Color}
                refProps={ref3}
                element={(
                  <select
                    ref={ref3}
                    name="negativehivtestresult"
                    value={criteriaForInclusion.negativehivtestresult}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="negativehivtestresult"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Индекс массы тела (ИМТ) составляет 18.5≤ИМТ≤30
          <div className="label-select">
            <select
              disabled={data && data?.BodyMassIndexCondition.Color != 0}
              ref={ref4}
              name="bodymassindex"
              value={criteriaForInclusion.bodymassindex}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.BodyMassIndexCondition.Color}
                refProps={ref4}
                element={(
                  <select
                    ref={ref4}
                    name="bodymassindex"
                    value={criteriaForInclusion.bodymassindex}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="bodymassindex"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отсутствие острых инфекционных и/или респираторных заболеваний по меньшей мере в течение 14-ти дней до включения в исследование
          <div className="label-select">
            <select
              disabled={data && data?.AbsenceOfAcuteInfectiousDiseasesCondition.Color != 0}
              ref={ref5}
              name="absenceofacuteinfectiousdiseases"
              value={criteriaForInclusion.absenceofacuteinfectiousdiseases}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.AbsenceOfAcuteInfectiousDiseasesCondition.Color}
                refProps={ref5}
                element={(
                  <select
                    ref={ref5}
                    name="absenceofacuteinfectiousdiseases"
                    value={criteriaForInclusion.absenceofacuteinfectiousdiseases}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="absenceofacuteinfectiousdiseases"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Согласие на использование эффективных методов контрацепции в ходе всего периода участия в исследовании
          <div className="label-select">
            <select
              disabled={data && data?.ConsentToUseEffectiveMethodsOfContraceptionCondition.Color != 0}
              ref={ref6}
              name="consenttouseeffectivemethodsofcontraception"
              value={criteriaForInclusion.consenttouseeffectivemethodsofcontraception}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.ConsentToUseEffectiveMethodsOfContraceptionCondition.Color}
                refProps={ref6}
                element={(
                  <select
                    ref={ref6}
                    name="consenttouseeffectivemethodsofcontraception"
                    value={criteriaForInclusion.consenttouseeffectivemethodsofcontraception}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="consenttouseeffectivemethodsofcontraception"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отрицательный тест на беременность по результатам исследования мочи на визите скрининга (для женщин детородного возраста)
          <div className="label-select">
            <select
              disabled={data && data?.NegativePregnancyTestCondition.Color != 0}
              ref={ref7}
              name="negativepregnancytest"
              value={criteriaForInclusion.negativepregnancytest}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NegativePregnancyTestCondition.Color}
                refProps={ref7}
                element={(
                  <select
                    ref={ref7}
                    name="negativepregnancytest"
                    value={criteriaForInclusion.negativepregnancytest}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="negativepregnancytest"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отрицательный тест на наличие наркотических и психостимулирующих средств в моче на визите скрининга
          <div className="label-select">
            <select
              disabled={data && data?.NegativeDrugTestCondition.Color != 0}
              ref={ref8}
              name="negativedrugtest"
              value={criteriaForInclusion.negativedrugtest}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NegativeDrugTestCondition.Color}
                refProps={ref8}
                element={(
                  <select
                    ref={ref8}
                    name="negativedrugtest"
                    value={criteriaForInclusion.negativedrugtest}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="negativedrugtest"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отрицательный тест на содержание алкоголя на визите скрининга
          <div className="label-select">
            <select
              disabled={data && data?.NegativeAlcoholTestCondition.Color != 0}
              ref={ref9}
              name="negativealcoholtest"
              value={criteriaForInclusion.negativealcoholtest}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NegativeAlcoholTestCondition.Color}
                refProps={ref9}
                element={(
                  <select
                    ref={ref9}
                    name="negativealcoholtest"
                    value={criteriaForInclusion.negativealcoholtest}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="negativealcoholtest"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отсутствие в анамнезе выраженных поствакцинальных реакций или поствакцинальных осложнений на предыдущее применение иммунобиологических препаратов
          <div className="label-select">
            <select
              disabled={data && data?.NoHistoryOfSeverePostVaccinationReactionsCondition.Color != 0}
              ref={ref10}
              name="nohistoryofseverepostvaccinationreactions"
              value={criteriaForInclusion.nohistoryofseverepostvaccinationreactions}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NoHistoryOfSeverePostVaccinationReactionsCondition.Color}
                refProps={ref10}
                element={(
                  <select
                    ref={ref10}
                    name="nohistoryofseverepostvaccinationreactions"
                    value={criteriaForInclusion.nohistoryofseverepostvaccinationreactions}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="nohistoryofseverepostvaccinationreactions"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Показатели общего и биохимического анализа крови на скрининге в пределах 1,1 х ВГРИ – 0,9 х НГРИ
          <div className="label-select">
            <select
              disabled={data && data?.IndicatorsBloodTestsAtScreeningWithinCondition.Color != 0}
              ref={ref11}
              name="indicatorsbloodtestsatscreeningwithin"
              value={criteriaForInclusion.indicatorsbloodtestsatscreeningwithin}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.IndicatorsBloodTestsAtScreeningWithinCondition.Color}
                refProps={11}
                element={(
                  <select
                    ref={ref11}
                    name="indicatorsbloodtestsatscreeningwithin"
                    value={criteriaForInclusion.indicatorsbloodtestsatscreeningwithin}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="indicatorsbloodtestsatscreeningwithin"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отсутствие изменений миокарда воспалительного или дистрофического характера по результатам ЭКГ на скрининге
          <div className="label-select">
            <select
              disabled={data && data?.NoMyocardialChangesCondition.Color != 0}
              ref={ref12}
              name="nomyocardialchanges"
              value={criteriaForInclusion.nomyocardialchanges}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NoMyocardialChangesCondition.Color}
                refProps={ref12}
                element={(
                  <select
                    ref={ref12}
                    name="nomyocardialchanges"
                    value={criteriaForInclusion.nomyocardialchanges}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="nomyocardialchanges"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отрицательный результат исследования на COVID-2019, определяемый методом ПЦР или экспресс-методом за 3 дня до включения в исследование
          <div className="label-select">
            <select
              disabled={data && data?.NegativeTestResultForCOVIDCondition.Color != 0}
              ref={ref13}
              name="negativetestresultforCOVID"
              value={criteriaForInclusion.negativetestresultforCOVID}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NegativeTestResultForCOVIDCondition.Color}
                refProps={ref13}
                element={(
                  <select
                    ref={ref13}
                    name="negativetestresultforCOVID"
                    value={criteriaForInclusion.negativetestresultforCOVID}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="negativetestresultforCOVID"
              />
            </div>
          </div>
        </label>
        <hr className="hr" />

        <label>
          Отсутствие противопоказаний к вакцинации
          <div className="label-select">
            <select
              disabled={data && data?.NoContraindicationsToVaccinationCondition.Color != 0}
              ref={ref14}
              name="nocontraindicationstovaccination"
              value={criteriaForInclusion.nocontraindicationstovaccination}
              onChange={handleCriteriaForInclusion}
              className="exact-protocol-select"
            >
              <option value="">Выберите</option>
              <option value={1}>Да</option>
              <option value={0}>Нет</option>
            </select>
            <div className="label-select-block">
              <StateControl
                color={data && data?.NoContraindicationsToVaccinationCondition.Color}
                refProps={ref14}
                element={(
                  <select
                    ref={ref14}
                    name="nocontraindicationstovaccination"
                    value={criteriaForInclusion.nocontraindicationstovaccination}
                    onChange={handleCriteriaForInclusion}
                    className="exact-protocol-select"
                  >
                    <option value="">Выберите</option>
                    <option value={1}>Да</option>
                    <option value={0}>Нет</option>
                  </select>
                              )}
                index={index}
                fieldName="nocontraindicationstovaccination"
              />
            </div>
          </div>
        </label>
      </div>
      {
                data && data?.NoContraindicationsToVaccinationCondition.Color !== 1
                  ? <button className="modal-button" type="submit" onClick={handleSave}>Сохранить</button>
                  : ''
            }
    </div>
  );
};

export default CriteriaForInclusion;
