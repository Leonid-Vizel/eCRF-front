import { Dictionary } from 'entities/dictionary';
import { hideField } from 'features/form';
import { FieldType, FormConstructorModel } from '../../../form/types/types';

export const stationaryMainInfoForm: FormConstructorModel = {
  rootEntityName: 'stationaryCards',
  entityName: 'stationaryCard',
  formEntityName: 'stationaryMainInfoForm',
  cards:
    [
      {
        id: 'hospitalInfo',
        key: 'hospitalInfo',
        title: 'Информация о стационаре',
        fields: [
          {
            id: 'receiptDateTime',
            title: 'Дата и время поступления',
            type: FieldType.DateTimePicker,
            name: 'receiptDateTime',
            rules: [{ required: true }],
          },
          {
            id: 'checkoutDateTime',
            title: 'Дата и время выписки',
            type: FieldType.DateTimePicker,
            name: 'checkoutDateTime',
            rules: [{ required: true }],
          },
          {
            id: 'department',
            title: 'Отделение',
            type: FieldType.Input,
            name: 'department',
            rules: [{ required: true }],
          },
          {
            id: 'chamberNumber',
            title: 'Палата №',
            type: FieldType.InputNumber,
            name: 'chamberNumber',
            rules: [{ required: true }],
          },
          {
            id: 'transferredToDepartment',
            title: 'Переведен в отделение',
            type: FieldType.Input,
            name: 'transferredToDepartment',
            rules: [{ required: true }],
          },
          {
            id: 'bedDaysSpent',
            title: 'Проведено койко-дней',
            type: FieldType.InputNumber,
            name: 'bedDaysSpent',
            rules: [{ required: true }],
          },
        ],
      },
      {
        id: 'patientInfo',
        key: 'patientInfo',
        title: 'Информация о пациенте',
        fields: [
          {
            id: 'transportationType',
            title: 'Вид транспортировки',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.TransportationType,
            name: 'transportationType',
            rules: [{ required: true }],
          },
          {
            id: 'workType',
            title: 'Занятость',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.Work,
            name: 'workType',
            rules: [{ required: true }],
          },
          {
            id: 'work',
            title: 'Место работы',
            type: FieldType.Input,
            name: 'work',
          },
        ],
      },
      {
        id: 'patientInfo',
        key: 'location',
        title: 'Постоянное место жительства',
        fields: [
          {
            id: 'russiaSubjectId',
            title: 'Субъект РФ',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.RussiaSubject,
            name: 'russiaSubjectId',
          },
          {
            id: 'city',
            title: 'Город',
            type: FieldType.Input,
            name: 'city',
          },
          {
            id: 'district',
            title: 'Район',
            type: FieldType.Input,
            name: 'district',
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
            title: 'Строение',
            type: FieldType.Input,
            name: 'building',
          },
          {
            id: 'flat',
            title: 'Квартира',
            type: FieldType.Input,
            name: 'flat',
          },
        ],
      },
      {
        id: 'hospitalisationInfo',
        key: 'hospitalisationInfo',
        title: 'Данные о госпитализации',
        fields: [
          {
            id: 'referredBy',
            title: 'Кем направлен больной',
            type: FieldType.Input,
            name: 'referredBy',
          },
          {
            id: 'reason',
            title: 'Причина доставки в стационар',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.StationaryReason,
            name: 'reason',
          },
          {
            id: 'emergencyReason',
            title: 'Причина доставки в стационар',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.StationaryEmergencyReason,
            name: 'emergencyReason',
            hidden: hideField('hospitalisationInfo', 'reason', 0),
          },
          {
            id: 'stationaryTransportationHours',
            title: 'Через сколько часов доставлен в стационар?',
            type: FieldType.InputNumber,
            name: 'stationaryTransportationHours',
            hidden: hideField('hospitalisationInfo', 'reason', 0),
          },
          {
            id: 'referringDiagnosis',
            title: 'Диагноз направившего учреждения',
            type: FieldType.Input,
            name: 'referringDiagnosis',
          },
          {
            id: 'hospitalisation',
            title: 'Госпитализирован в данном году',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.StationaryHospitalisation,
            name: 'hospitalisation',
          },
          {
            id: 'totalHospitalisationAmount',
            title: 'Количество госпитализаций',
            type: FieldType.InputNumber,
            name: 'totalHospitalisationAmount',
            hidden: hideField('hospitalisationInfo', 'hospitalisation', 1),
          },
          {
            id: 'otherTreatments',
            title: 'Другие виды лечения',
            type: FieldType.DictionaryTreeSelect,
            dictionaryName: Dictionary.OtherTreatments,
            name: 'otherTreatments',
          },
        ],
      },
      {
        id: 'diagnosisTable',
        key: 'diagnosisTable',
        title: 'Диагнозы',
        fieldsLayout: 'table',
        columnCount: 5,
        addRemoveButtons: false,
        fields: [
          {
            id: 'system',
            title: '',
            type: FieldType.Text,
            name: 'system',
          },
          {
            id: 'state',
            title: 'Состояние',
            type: FieldType.Input,
            name: 'state',
          },
          {
            id: 'date',
            title: 'Дата установления',
            type: FieldType.DatePicker,
            name: 'date',
          },
          {
            id: 'icbCode',
            title: 'Код по МКБ-10',
            type: FieldType.Input,
            name: 'icbCode',
          },
          {
            id: 'doctor',
            title: 'Врач (Фамилия И.О.)',
            type: FieldType.Input,
            name: 'doctor',
          },
        ],
      },
      {
        id: 'surgicalOperationsTable',
        key: 'surgicalOperationsTable',
        title: 'Хирургические операции, методы обезболивания и послеоперационные осложнения',
        fieldsLayout: 'table',
        fields: [
          {
            id: 'type',
            title: 'Вид операции',
            type: FieldType.Input,
            name: 'type',
          },
          {
            id: 'complications',
            title: 'Осложнения',
            type: FieldType.Input,
            name: 'complications',
          },
          {
            id: 'operator',
            title: 'Оперировал',
            type: FieldType.Input,
            name: 'operator',
          },
          {
            id: 'remove',
            title: '',
            columnButton: 'remove',
          },
        ],
      },
      {
        id: 'resultInfo',
        key: 'incapacity',
        title: 'Лист о нетрудоспособности',
        columnCount: 3,
        fields: [
          {
            id: 'incapacity1Number',
            title: 'Номер листа о нетрудоспособности',
            type: FieldType.Input,
            name: 'incapacity1Number',
          },
          {
            id: 'incapacity1Start',
            title: 'Дата начала листа',
            type: FieldType.DatePicker,
            name: 'incapacity1Start',
          },
          {
            id: 'incapacity1End',
            title: 'Дата окончания листа',
            type: FieldType.DatePicker,
            name: 'incapacity1End',
          },
          {
            id: 'incapacity2Number',
            title: 'Номер листа о нетрудоспособности',
            type: FieldType.Input,
            name: 'incapacity2Number',
          },
          {
            id: 'incapacity2Start',
            title: 'Дата начала листа',
            type: FieldType.DatePicker,
            name: 'incapacity2Start',
          },
          {
            id: 'incapacity2End',
            title: 'Дата окончания листа',
            type: FieldType.DatePicker,
            name: 'incapacity2End',
          },
        ],
      },
      {
        id: 'resultInfo',
        key: 'resultInfo',
        title: '',
        fields: [
          {
            id: 'diseaseOutcome',
            title: 'Исход заболевания',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.DiseaseOutcome,
            name: 'diseaseOutcome',
          },
          {
            id: 'transferredOutcomeInstitutionName',
            title: 'Название лечебного учреждения',
            type: FieldType.Input,
            hidden: hideField('resultInfo', 'diseaseOutcome', 3),
            name: 'transferredOutcomeInstitutionName',
          },
          {
            id: 'workAbility',
            title: 'Трудособность',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.WorkAbility,
            name: 'workAbility',
          },
          {
            id: 'specialMarks',
            title: 'Особые отметки',
            type: FieldType.Input,
            name: 'specialMarks',
          },
        ],
      },
      {
        id: 'resultInfo',
        key: 'doctorInfo',
        title: 'Главный врач (ФИО полностью)',
        fields: [
          {
            id: 'surnameDoctor',
            title: 'Фамилия',
            type: FieldType.Input,
            name: 'surnameDoctor',
          },
          {
            id: 'nameDoctor',
            title: 'Имя',
            type: FieldType.Input,
            name: 'nameDoctor',
          },
          {
            id: 'patronymycDoctor',
            title: 'Отчество',
            type: FieldType.Input,
            name: 'patronymycDoctor',
          },
        ],
      },
    ],
};
