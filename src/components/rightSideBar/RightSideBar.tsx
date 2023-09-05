import React, { useState } from 'react';
import './rightSideBar.scss';
import DropDown from './errorComponents/demographyError/DropDown';
import Anthropometry from '../protocols/screeningAll/anthropometry/Anthropometry';
import Demography from '../protocols/screeningAll/demography/Demography';

const RightSidebar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const object = {
    StartOfScreening: 'Начало скрининга',
    DateStartOfScreeningCondition: 'Дата подписания',
    TimeStartOfScreeningCondition: 'Время подписания',

    InformaionConsent: 'Доброволец получил на руки один экземпляр информированного согласия?',
    SignedCondition: 'Информированное согласие подписано?',
    DateOfSignCondition: 'Дата подписания',
    TimeOfSignCondition: 'Время подписания',
    ReceivedAnInsurancePolicyCondition: 'Доброволец получил на руки оригинал страхового Полиса участника исследования?',
    ReceivedAnInformaionConsentCondition: 'Доброволец получил на руки один экземпляр информированного согласия?',

    Demography: 'Демография',
    SexCondition: 'Пол',
    RaceCondition: 'Раса',
    BirthDateCondition: 'Дата рождения',

    InclusionCriteria: 'Критерии включения в иследование',
    PresenceOfAnInformationPanelCondition: 'Наличие письменного информированного согласия субъекта на участие в исследовании',
    Aged18To55YearsCondition: 'Мужчины и женщины в возрасте от 18 до 55 лет',
    NegativeHIVTestResultCondition: 'Отрицательный результат исследования на ВИЧ, гепатиты, сифилис',
    BodyMassIndexCondition: 'Индекс массы тела (ИМТ) составляет 18.5≤ИМТ≤30',
    AbsenceOfAcuteInfectiousDiseasesCondition: 'Отсутствие острых инфекционных и/или респираторных заболеваний по меньшей мере в течение 14-ти дней до включения в исследование',
    ConsentToUseEffectiveMethodsOfContraceptionCondition: 'Согласие на использование эффективных методов контрацепции в ходе всего периода участия в исследовании',
    NegativePregnancyTestCondition: 'Отрицательный тест на беременность по результатам исследования мочи на визите скрининга (для женщин детородного возраста)',
    NegativeDrugTestCondition: 'Отрицательный тест на наличие наркотических и психостимулирующих средств в моче на визите скрининга',
    NegativeAlcoholTestCondition: 'Отрицательный тест на содержание алкоголя на визите скрининга',
    NoHistoryOfSeverePostVaccinationReactionsCondition: 'Отсутствие в анамнезе выраженных поствакцинальных реакций или поствакцинальных осложнений на предыдущее применение иммунобиологических препаратов',
    IndicatorsBloodTestsAtScreeningWithinCondition: 'Показатели общего и биохимического анализа крови на скрининге в пределах 1,1 х ВГРИ – 0,9 х НГРИ',
    NoMyocardialChangesCondition: 'Отсутствие изменений миокарда воспалительного или дистрофического характера по результатам ЭКГ на скрининге',
    NegativeTestResultForCOVIDCondition: 'Отрицательный результат исследования на COVID-2019, определяемый методом ПЦР или экспресс-методом за 3 дня до включения в исследование',
    NoContraindicationsToVaccinationCondition: 'Отсутствие противопоказаний к вакцинации',

    ExclusionСriteria: 'Критерии невключения в иследование',
    LackOfSignedInformedConsentCondition: 'Отсутствие подписанного информированного согласия',
    SteroidTherapyCondition: 'Терапия стероидами (за исключением гормональных контрацептивных препаратов) и/или иммуноглобулинами или другими препаратами крови, не завершившаяся за 30 дней до включения в исследование',
    TherapyWithImmunosuppressiveDrugsCondition: 'Терапия иммуносупрессивными препаратами, завершившаяся менее чем за 3 месяца до включения в исследование',
    FemaleSubjectsDuringPregnancyCondition: 'Субъекты женского пола в период беременности или кормления грудью',
    StrokeInLessThanOneYearCondition: 'Перенесенный менее чем за один год до включения в исследование острый коронарный синдром или инсульт',
    ChronicSystemicInfectionsCondition: 'Туберкулез, хронические системные инфекции',
    AggravatedAllergicHistoryCondition: ' Отягощенный аллергологический анамнез (наличие в анамнезе сведений об анафилактическом шоке, отеке Квинке, полиморфной экссудативной экземе, сывороточной болезни), гиперчувствительность или аллергические реакции на введение иммунобиологических препаратов, известные аллергические реакции на компоненты препарата, обострение аллергических заболеваний на день включения в исследование',
    PresenceOfAHistoryOfNeoplasmsCondition: 'Наличие в анамнезе новообразований (коды МКБ C00-D09)',
    HistoryOfSplenectomyCondition: 'Спленэктомия в анамнезе',
    NeutropeniaCondition: 'Нейтропения (снижение абсолютного числа нейтрофилов менее 1000/мм3), агранулоцитоз, значительная кровопотеря, тяжелая анемия (гемоглобин менее 80 г/л), иммунодефицит в анамнезе в течение 6 месяцев до включения в исследование',
    SubjectsWithActiveSyphilisCondition: 'Субъекты с активной формой сифилиса, ВИЧ/СПИД, гепатиты B и C',
    AnorexiaCondition: 'Анорексия, белковый дефицит любого происхождения',
    ExtensiveTattoosCondition: 'Обширные татуировки на местах введения препарата (область дельтовидной мышцы), не позволяющие оценить местную реакцию на введение ИЛП',
    TakingNarcoticAndPsychostimulantDrugsCondition: 'Прием наркотических и психостимулирующих препаратов в настоящее время или в анамнезе',
    SmokingMoretThanTenCigarettesADayCondition: 'Курение: более 10 сигарет в день',
    AlcoholIntakeCondition: 'Прием алкоголя превышающий уровень низкого риска: не более 20 граммов чистого алкоголя в день, не более 5 дней в неделю, прием алкоголя в течение 48 часов до введения исследуемого препарата',
    PlannedHospitalizationConditiont: 'Плановая госпитализация и/или хирургическое вмешательство в период участия в исследовании, а также за 4 недели до предполагаемой даты вакцинации',
    DonorBloodDonationCondition: 'Донорская сдача крови (450 мл и более крови или плазмы) менее чем за 2 месяца до начала исследования',
    SubjectParticipationInAnyOtherStudyCondition: 'Участие субъекта в любом другом интервенционном клиническом исследовании за последние 90 дней',
    AnyVaccinationInTheLastMonthCondition: 'Любая вакцинация за последние 30 дней',
    InabilityToReadInRussianCondition: 'Неспособность читать на русском языке; невозможность или нежелание понять суть исследования. Любые другие состояния, которые ограничивают правомерность получения информированного согласия или могут повлиять на способность добровольца принять участие в исследовании повлиять на способность добровольца принять участие в исследовании',
    ResearchCenterStaffCondition: 'Персонал исследовательских центров и другие сотрудники, непосредственно участвующие в проведении исследования и члены их семей (главный исследователь и члены исследовательской команды)',
    AnyOtherStateOfTheSubjectOfTheStudyCondition: 'Любое иное состояние субъекта исследования, которое, по мнению-врача- исследователя, может препятствовать завершению исследования в соответствии с протоколом',

    CompletionOfScreening: 'Завершение скрининга',
    VolunteerEligibleCondition: 'Доброволец соответствует критериям включения?',
    NoExclusionCriteriaCondition: 'Критерии невключения отсутствуют?',
    InformedOfTheRestrictionsCondition: 'Доброволец был проинформирован об ограничениях, требуемых протоколом и согласен их соблюдать в течение исследования?',
    VolunteerIncludedCondition: 'Доброволец включен в исследование?',
    ReasonIfNotCondition: 'Если «НЕТ», необходимо указать причину',
    CommentCondition: 'Поле «Комментарий» заполняется по желанию в произвольном тексте.',

    Anthropometry: 'Антропометрия',
    AnthropometricDataBeenMeasuredCondition: 'Измерение антропометрических данных проведено?',
    // ReasonIfNotCondition: 'Если НЕТ, то укажите причину',
    DateOfStartMeasuredCondition: 'Дата проведения измерений',
    WeightOfBodyCondition: 'Масса тела',
    HeightOfBodyCondition: 'Рост',
    IndexWeigthOfBodyCondition: 'Индекс массы тела(рассчетное значение)',
  };

  return (
    <div className="right-sidebar-div">
      <div className="right-sidebar">
        <span>Обсуждения</span>
        <hr className="hr" />
        {data && Object.entries(data).map(([key, value]: any) => {
          const arr = Object.keys(value).map((item, index) => (
            value[Object.keys(value)[index]]?.Reason !== ('' || undefined)
                        && value[Object.keys(value)[index]]?.Comment !== ('' || undefined)
                        && (value[Object.keys(value)[index]]?.Color === 3 || value[Object.keys(value)[index]]?.Color === 5)
                        && <DropDown key={index} value={value} index={index} object={object} span={object[key]} />
          ));
          let flag = false;
          arr.forEach((item) => {
            if (item) {
              flag = true;
            }
          });
          return flag ? (
            <div key={key} className="right-sidebar-info">
              <span className="right-sidebar-info">{object[key]}</span>
              {arr}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default RightSidebar;
