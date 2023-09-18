import { Dictionary } from 'entities/dictionary';
import { FieldType, FormConstructorModel } from '../../../form/types/types';

export const outPatientCardMainInfoForm: FormConstructorModel = {
  entityName: 'outpatientCard',
  formEntityName: 'outpatientMainInfoForm',
  cards:
    [
      {
        id: 'mainInfo',
        key: 'mainInfo',
        title: 'Основная информация',
        fields: [
          {
            id: 'secondName',
            title: 'Фамилия',
            type: FieldType.Input,
            name: 'secondName',
            rules: [{ required: true }],
          },
          {
            id: 'firstName',
            title: 'Имя',
            type: FieldType.Input,
            name: 'firstName',
            rules: [{ required: true }],
          },
          {
            id: 'thirdName',
            title: 'Отчество',
            type: FieldType.Input,
            name: 'thirdName',
          },
          {
            id: 'createDate',
            title: 'Дата заполнения медицинской карты',
            type: FieldType.DatePicker,
            name: 'createDate',
            rules: [{ required: true }],
          },
          {
            id: 'sex',
            title: 'Пол',
            type: FieldType.DictionaryRadioGroup,
            dictionaryName: Dictionary.Sex,
            optionType: 'button',
            name: 'sex',
          },
          {
            id: 'birthDate',
            title: 'Дата рождения',
            type: FieldType.DatePicker,
            name: 'birthDate',
          },
          {
            id: 'chIseries',
            title: 'Полис ОМС - Серия',
            type: FieldType.Input,
            name: 'chIseries',
          },
          {
            id: 'chInumber',
            title: 'Полис ОМС - Номер',
            type: FieldType.Input,
            name: 'chInumber',
          },
          {
            id: 'snils',
            title: 'СНИЛС',
            type: FieldType.Input,
            name: 'snils',
          },
          {
            id: 'outpatientMedecineInsuranceOrg',
            title: 'Наименование страховой медицинской организации',
            type: FieldType.Input,
            name: 'outpatientMedecineInsuranceOrg',
          },
          {
            id: 'benefitCategoryCode',
            title: 'Код категории льготы',
            type: FieldType.Input,
            name: 'benefitCategoryCode',
          },
          {
            id: 'documentName',
            title: 'Документ - Название',
            type: FieldType.Input,
            name: 'documentName',
          },
          {
            id: 'documentSeries',
            title: 'Документ - Серия',
            type: FieldType.Input,
            name: 'documentSeries',
          },
          {
            id: 'documentNumber',
            title: 'Документ - Номер',
            type: FieldType.Input,
            name: 'documentNumber',
          },
        ],
      },
      {
        id: 'mainInfo',
        key: 'address',
        title: 'Место жительства',
        fields: [
          {
            id: 'district',
            title: 'Район',
            type: FieldType.Input,
            name: 'district',
          },
          {
            id: 'city',
            title: 'Город',
            type: FieldType.Input,
            name: 'city',
          },
          {
            id: 'community',
            title: 'Населенный пункт',
            type: FieldType.Input,
            name: 'community',
          },
          {
            id: 'street',
            title: 'Улица',
            type: FieldType.Input,
            name: 'street',
          },
          {
            id: 'house',
            title: 'Дом',
            type: FieldType.Input,
            name: 'house',
          },
          {
            id: 'building',
            title: 'Корпус',
            type: FieldType.Input,
            name: 'building',
          },
          {
            id: 'flat',
            title: 'Квартира',
            type: FieldType.Input,
            name: 'flat',
          },
          {
            id: 'locality',
            title: 'Местность',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.Locality,
            name: 'locality',
          },
        ],
      },
      {
        id: 'mainInfoPersonal',
        key: 'mainInfoPersonal',
        title: 'Персональная информация',
        fields: [
          {
            id: 'family',
            title: 'Семейное положение',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.Family,
            name: 'family',
          },
          {
            id: 'education',
            title: 'Образование',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.Education,
            name: 'education',
          },
          {
            id: 'work',
            title: 'Занятость',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.Work,
            name: 'work',
          },
          {
            id: 'disabilityType',
            title: 'Тип инвалидности',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.DisabilityType,
            name: 'disabilityType',
          },
          {
            id: 'disabilityDate',
            title: 'Дата',
            type: FieldType.DatePicker,
            name: 'disabilityDate',
          },
          {
            id: 'workPlace',
            title: 'Место работы',
            type: FieldType.Input,
            name: 'workPlace',
          },
          {
            id: 'workPosition',
            title: 'Должность',
            type: FieldType.Input,
            name: 'workPosition',
          },
          {
            id: 'workPlaceChange',
            title: 'Изменение места работы',
            type: FieldType.Input,
            name: 'workPlaceChange',
          },
          {
            id: 'registrationPlaceChange',
            title: 'Изменение места регистрации',
            type: FieldType.Input,
            name: 'registrationPlaceChange',
          },
          {
            id: 'bloodGroup',
            title: 'Группа крови',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.BloodGroup,
            name: 'bloodGroup',
          },
          {
            id: 'rhFactor',
            title: 'Резус фактор',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.RhFactor,
            name: 'rhFactor',
          },
          {
            id: 'allergicReactions',
            title: 'Аллергические реакции',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.RhFactor,
            name: 'allergicReactions',
          },
        ],
      },
      {
        id: 'outpatientDispansaryObservation',
        key: 'outpatientDispansaryObservation',
        title: 'Заболевания, по поводу которых осуществляется диспансерное наблюдение',
        fieldsLayout: 'table',
        fields: [
          {
            id: 'dispensaryObservationStartDate',
            title: 'Дата начала диспансерного наблюдения',
            type: FieldType.DatePicker,
            name: 'dispensaryObservationStartDate',
          },
          {
            id: 'dispensaryObservationEndDate',
            title: 'Дата прекращения диспансерного наблюдения',
            type: FieldType.DatePicker,
            name: 'dispensaryObservationEndDate',
          },
          {
            id: 'diagnosis',
            title: 'Диагноз',
            type: FieldType.Input,
            name: 'diagnosis',
          },
          {
            id: 'icbCode',
            title: 'Код по МКБ-10',
            type: FieldType.Input,
            name: 'icbCode',
          },
          {
            id: 'doctor',
            title: 'Врач',
            name: 'doctor',
            type: FieldType.Input,
          },
        ],
      },
      {
        id: 'refinedDiagnosesSheet',
        key: 'refinedDiagnosesSheet',
        title: 'Лист записи заключительных (уточненных) диагнозов',
        fieldsLayout: 'table',
        fields: [
          {
            id: 'refinedDate',
            title: 'Дата (число, месяц, год)',
            type: FieldType.DatePicker,
            name: 'dispensaryObservationStartDate',
          },
          {
            id: 'refindDiagnosis',
            title: 'Заключительные (уточненные) диагнозы',
            type: FieldType.Input,
            name: 'dispensaryObservationEndDate',
          },
          {
            id: 'refindFirstTime',
            title: 'Установленные впервые или повторно (+/-)',
            type: FieldType.Input,
            name: 'refindFirstTime',
          },
          {
            id: 'doctor',
            title: 'Врач',
            type: FieldType.Input,
            name: 'doctor',
          },
        ],
      },
    ],
};
