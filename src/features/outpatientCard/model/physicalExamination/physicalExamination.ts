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
        },
        {
          id: 'height',
          title: 'Рост',
          type: FieldType.InputNumber,
          name: 'height',
        },
        {
          id: 'weightMeasurement',
          title: 'Мера измерения',
          type: FieldType.DictionarySelect,
          dictionaryName: Dictionary.WeightMeasurementType,
          name: 'weightMeasurement',
        },
        {
          id: 'systolicPressure',
          title: 'Систолическое давление',
          type: FieldType.InputNumber,
          name: 'systolicPressure',
        },
        {
          id: 'diastolicPressure',
          title: 'Диастолическое давление',
          type: FieldType.InputNumber,
          name: 'diastolicPressure',
        },
        {
          id: 'heartRate',
          title: 'ЧСС',
          type: FieldType.InputNumber,
          name: 'heartRate',
        },
        {
          id: 'respiratoryRate',
          title: 'ЧДД',
          type: FieldType.InputNumber,
          name: 'respiratoryRate',
        },
        {
          id: 'temperature',
          title: 'Температура тела',
          type: FieldType.InputNumber,
          name: 'temperature',
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
          type: FieldType.Checkbox,
          name: 'isCompleted',
        },
        {
          id: 'isNorm',
          title: 'Показатели в норме?',
          type: FieldType.Checkbox,
          name: 'isNorm',
        },
        {
          id: 'isDeviation',
          title: 'Отклонения',
          type: FieldType.Checkbox,
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
          type: FieldType.Checkbox,
          name: 'isCompleted',
        },
        {
          id: 'isNorm',
          title: 'Показатели в норме?',
          type: FieldType.Checkbox,
          name: 'isNorm',
        },
        {
          id: 'isDeviation',
          title: 'Отклонения',
          type: FieldType.Checkbox,
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
