import { Dictionary } from 'entities/dictionary';
import { FieldType, FormConstructorModel } from 'features/form/types/types';

export const physicalExaminationForm: FormConstructorModel = {
  rootEntityName: 'outpatientCards',
  entityName: 'outpatientCard',
  formEntityName: 'physicalExaminationForm',
  cards: [
    {
      id: 'bodyInfo',
      key: 'bodyInfo',
      title: 'Данные тела',
      fields: [
        {
          id: 'weight',
          title: 'Вес',
          type: FieldType.InputNumber,
          name: 'weight',
          inputNumberProps: {
            min: 10,
            max: 300,
          },
        },
        {
          id: 'height',
          title: 'Рост',
          type: FieldType.InputNumber,
          name: 'height',
        },
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
          title: 'Диастолическое давление (мм. рт. ст.)',
          type: FieldType.InputNumber,
          name: 'diastolicPressure',
          inputNumberProps: {
            min: 55,
            max: 95,
          },
        },
        {
          id: 'heartRate',
          title: 'Частота сердечных сокращений (уд/мин)',
          type: FieldType.InputNumber,
          name: 'heartRate',
          inputNumberProps: {
            min: 50,
            max: 95,
          },
        },
        {
          id: 'respiratoryRate',
          title: 'Частота дыхательных движений (дв/мин)',
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
      id: 'bodyInfo',
      key: 'complaints',
      title: 'Жалобы добровольца',
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
      id: 'table',
      key: 'table',
      title: 'Физикальный осмотр',
      fieldsLayout: 'table',
      addRemoveButtons: false,
      columnCount: 5,
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
      id: 'instrumentalInfo',
      key: 'instrumentalInfo',
      title: 'Лабораторные и инструментальные исследования',
      fieldsLayout: 'questionnaire',
      nestedFields: [{
        label: 'label',
        value: 'value',
      }],
    },
    {
      id: 'labInfo',
      key: 'labInfo',
      title: 'Лабораторные исследования',
      fieldsLayout: 'questionnaire',
      nestedFields: [{
        label: 'label',
        value: 'value',
      }],
    },
    {
      id: 'labTable',
      key: 'labTable',
      title: '',
      fieldsLayout: 'table',
      fields: [
        {
          id: 'system',
          title: 'Анализ',
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
  ],
};
