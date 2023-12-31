/* eslint-disable react/jsx-one-expression-per-line */
import { Dictionary } from 'entities/dictionary';
import { FieldType, FormConstructorModel } from 'features/form/types/types';

export const dayForm: FormConstructorModel = {
  rootEntityName: 'outpatientCards',
  entityName: 'outpatientCard',
  disabledCondition: {
    name: ['bodyInfo', 0, 'noSuitable'],
    value: true,
  },
  cards: [
    {
      id: 'bodyInfo',
      key: 'notSuitable',
      title: '',
      fields: [
        {
          id: 'noSuitable',
          title: 'Не применимо',
          type: FieldType.Checkbox,
          name: 'noSuitable',
        },
      ],
    },
    {
      id: 'bodyInfo',
      key: 'bodyInfo',
      title: 'Дата визита',
      isDisabledCondition: true,
      fields: [
        {
          id: 'date',
          title: 'Дата визита',
          type: FieldType.DatePicker,
          name: 'date',
        },
      ],
    },
    {
      id: 'bodyInfo',
      key: 'complaints',
      title: 'Жалобы добровольца',
      isDisabledCondition: true,
      fields: [
        {
          id: 'complaints',
          title: '',
          type: FieldType.TextArea,
          name: 'complaints',
          columnStyle: {
            width: '100%',
          },
        },
      ],
    },
    {
      id: 'bodyInfo',
      key: 'pressureTemperature',
      title: 'Давление и температура',
      isDisabledCondition: true,
      fields: [
        {
          id: 'systolicPressure',
          title: 'Систолическое давление (мм. рт. ст.)',
          type: FieldType.InputNumber,
          name: 'systolicPressure',
          inputNumberProps: {
            min: 90,
            max: 139,
          },
        },
        {
          id: 'diastolicPressure',
          title: <>Диастолическое давление <br /> (мм. рт. ст.)</>,
          type: FieldType.InputNumber,
          name: 'diastolicPressure',
          inputNumberProps: {
            min: 55,
            max: 95,
          },
        },
        {
          id: 'heartRate',
          title: <>Частота сердечных сокращений <br />(уд/мин)</>,
          type: FieldType.InputNumber,
          name: 'heartRate',
          inputNumberProps: {
            min: 50,
            max: 95,
          },
        },
        {
          id: 'respiratoryRate',
          title: <>Частота дыхательных движений <br />(дв/мин)</>,
          type: FieldType.InputNumber,
          name: 'respiratoryRate',
          inputNumberProps: {
            min: 12,
            max: 21,
          },
        },
        {
          id: 'temperature',
          title: 'Температура тела (°С)',
          type: FieldType.InputNumber,
          name: 'temperature',
          inputNumberProps: {
            min: 25,
            max: 41,
          },
        },
      ],
    },
    {
      id: 'table',
      key: 'table',
      title: 'Физикальный осмотр',
      fieldsLayout: 'table',
      addRemoveButtons: false,
      columnCount: 5,
      isDisabledCondition: true,
      fields: [
        {
          id: 'system',
          title: 'Система',
          type: FieldType.Text,
          name: 'system',
        },
        {
          id: 'isCompleted',
          title: 'Выполнено',
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
          name: 'isCompleted',
        },
        {
          id: 'isNorm',
          title: 'Показатели в норме?',
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
          name: 'isNorm',
        },
        {
          id: 'isDeviation',
          title: 'Отклонения',
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
          name: 'isDeviation',
        },
        {
          id: 'comment',
          title: 'Комментарий',
          type: FieldType.TextArea,
          name: 'comment',
        },
      ],
    },
    {
      id: 'labInstrumentalInfo',
      key: 'labInstrumentalInfo',
      title: 'Лабораторные и инструментальные исследования',
      fieldsLayout: 'questionnaire',
      isDisabledCondition: true,
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
    {
      id: 'criteriaInfo',
      key: 'criteriaInfo',
      title: 'Оценка критериев исключения',
      fieldsLayout: 'questionnaire',
      isDisabledCondition: true,
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
    {
      id: 'visitInfo',
      key: 'visitInfo',
      title: 'Информация о визите',
      fieldsLayout: 'questionnaire',
      isDisabledCondition: true,
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
  ],
};
