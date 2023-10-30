/* eslint-disable react/jsx-one-expression-per-line */
import { Dictionary } from 'entities/dictionary';
import { FieldType, FormConstructorModel } from 'features/form/types/types';

export const stationaryCardFirstDayForm: FormConstructorModel = {
  rootEntityName: 'stationaryCards',
  entityName: 'stationaryCard',
  formEntityName: 'stationaryCardFirstDayForm',
  cards: [
    {
      id: 'physycalData',
      key: 'physycalData',
      title: 'Физикальный осмотр',
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
          title: <>Частота сердечных сокращений <br /> (уд/мин)</>,
          type: FieldType.InputNumber,
          name: 'heartRate',
          inputNumberProps: {
            min: 50,
            max: 95,
          },
        },
        {
          id: 'respiratoryRate',
          title: <>Частота дыхательных движений <br /> (дв/мин)</>,
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
        {
          id: 'complaints',
          title: 'Жалобы',
          type: FieldType.TextArea,
          name: 'complaints',
        }],
    },
    {
      id: 'table',
      key: 'table',
      title: 'Физикальный осмотр',
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
      id: 'beginningInfo',
      key: 'beginningInfo',
      title: '',
      fieldsLayout: 'questionnaire',
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
    {
      id: 'labAndInstrumentalReseachInfo',
      key: 'labAndInstrumentalReseachInfo',
      title: 'Лабораторные и инструментальные исследования',
      fieldsLayout: 'questionnaire',
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
    {
      id: 'factsOfInclusionsInfo',
      key: 'factsOfInclusionsInfo',
      title: 'Оценка критериев включения',
      fieldsLayout: 'questionnaire',
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
    {
      id: 'factsOfNonInclusionsInfo',
      key: 'factsOfNonInclusionsInfo',
      title: 'Оценка критериев невключения',
      fieldsLayout: 'questionnaire',
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
    {
      id: 'analysisCriteriasInfo',
      key: 'analysisCriteriasInfo',
      title: '',
      fieldsLayout: 'questionnaire',
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
  ],
};
