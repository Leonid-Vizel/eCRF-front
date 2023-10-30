/* eslint-disable react/jsx-one-expression-per-line */
import { Dictionary } from 'entities/dictionary';
import { FieldType, FormConstructorModel } from 'features/form/types/types';

export const stationaryCardSecondDayForm: FormConstructorModel = {
  rootEntityName: 'stationaryCards',
  entityName: 'stationaryCard',
  formEntityName: 'stationaryCardSecondDayForm',
  cards: [
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
      id: 'inspectionMinus1Data',
      key: 'inspectionMinus1Data',
      title: 'Осмотр (-1 час)',
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
          id: 'comments',
          title: 'Комментарии',
          type: FieldType.TextArea,
          name: 'comments',
        },
      ],
    },
    {
      id: 'tableMinus1',
      key: 'tableMinus1',
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
      id: 'criteriaInfo',
      key: 'criteriaInfo',
      title: 'Оценка критериев исключения',
      fieldsLayout: 'questionnaire',
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
    {
      id: 'inspection1To12Info',
      key: 'inspection1To12Info',
      title: 'Осмотр 1-12 часов',
      fieldsLayout: 'questionnaire',
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
    {
      id: 'tablePlus12',
      key: 'tablePlus12',
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
      id: 'inspection24Info',
      key: 'inspection24Info',
      title: 'Осмотр +24 часа',
      fieldsLayout: 'questionnaire',
      nestedFields: [
        {
          label: 'label',
          value: 'value',
        },
      ],
    },
    {
      id: 'tablePlus24',
      key: 'tablePlus24',
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
      id: 'endingInfo',
      key: 'endingInfo',
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
      id: 'visitInfo',
      key: 'visitInfo',
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
