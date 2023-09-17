import { FieldType, FormConstructorModel } from '../../../form/types/types';

export const outPatientCardMainInfoForm: FormConstructorModel = {
  entityName: 'outpatientCard',
  formEntityName: 'outpatientMainInfoForm',
  cards:
    [
      {
        id: 'mainInfo',
        title: 'Основная информация',
        fields: [
          {
            id: 'surname',
            title: 'Фамилия',
            type: FieldType.Input,
            name: 'surname',
            rules: [{ required: true, message: 'Please input your username!' }],
          },
          {
            id: 'outpatientName',
            title: 'Имя',
            type: FieldType.Input,
            name: 'outpatientName',
          },
          {
            id: 'outpatientPatronomyc',
            title: 'Отчество',
            type: FieldType.Input,
            name: 'patronomyc',
          },
          {
            id: 'outpatientCardStartDate',
            title: 'Дата заполнения медецинской карты',
            type: FieldType.DatePicker,
            name: 'outpatientCardStartDate',
          },
          {
            id: 'outpatientSex',
            title: 'Пол',
            type: FieldType.Select,
            name: 'outpatientSex',
          },
          {
            id: 'outpatientBirthDate',
            title: 'Дата рождения',
            type: FieldType.DatePicker,
            name: 'outpatientBirthDate',
          },
          {
            id: 'outpatientRegistrationPlace',
            title: 'Место регистрации',
            type: FieldType.Input,
            name: 'outpatientRegistrationPlace',
          },
          {
            id: 'outpatientLocale',
            title: 'Местность',
            type: FieldType.Select,
            name: 'outpatientLocale',
          },
          {
            id: 'outpatientMedecineInsurance',
            title: 'Полис ОМС',
            type: FieldType.Input,
            name: 'medecineDocument',
          },
          {
            id: 'outpatientSnils',
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
            id: 'outpatientPrivilegesCode',
            title: 'Код категории льготы',
            type: FieldType.Input,
            name: 'outpatientPrivilegesCode',
          },
          {
            id: 'outpatientPrivilegesDocument',
            title: 'Документ',
            type: FieldType.Input,
            name: 'outpatientPrivilegesDocument',
          },
        ],
      },
      {
        id: 'mainInfoPersonal',
        title: 'Персональная информация',
        fields: [
          {
            id: 'familyStatus',
            title: 'Семейное положение',
            type: FieldType.RadioGroup,
            name: 'familyStatus',
          },
          {
            id: 'educationStatus',
            title: 'образование',
            type: FieldType.DictionarySelect,
            name: 'educationStatus',
          },
          {
            id: 'jobStatus',
            title: 'Занятость',
            type: FieldType.DictionarySelect,
            name: 'jobStatus',
          },
          {
            id: 'disabilityStatus',
            title: 'Инвалидность',
            type: FieldType.Input,
            name: 'disabilityStatus',
          },
          {
            id: 'jobPlace',
            title: 'Место работы',
            type: FieldType.DatePicker,
            name: 'jobPlace',
          },
          {
            id: 'jobPosition',
            title: 'Должность',
            type: FieldType.Select,
            name: 'jobPosition',
          },
          {
            id: 'jobReplacement',
            title: 'Изменение места работы',
            type: FieldType.Input,
            name: 'jobReplacement',
          },
          {
            id: 'bloodType',
            title: 'Группа крови',
            type: FieldType.Input,
            name: 'bloodType',
          },
          {
            id: 'rhFactor',
            title: 'Резус фактор',
            type: FieldType.Input,
            name: 'rhFactor',
          },
        ],
      },
      {
        id: 'outpatientDispansaryObservation',
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
            title: 'диагноз',
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
