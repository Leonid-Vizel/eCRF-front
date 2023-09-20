import { Dictionary } from 'entities/dictionary';
import { LifeAnamnesisCard } from 'features/outpatientCard/types/lifeAnamnesisTypes';
import { FieldType, FormConstructorModel, Hidden } from '../../../form/types/types';

const alcoholHidden:Hidden = {
  shouldUpdate(prevValues, currentValues) {
    return prevValues[0]?.alcohol !== currentValues[0]?.alcohol;
  },
  condition(values) {
    return values && values.card && values.card[0].alcohol;
  },
};

const narcoticsHidden:Hidden = {
  shouldUpdate(prevValues, currentValues) {
    return prevValues[0]?.narcotics !== currentValues[0]?.narcotics;
  },
  condition(values) {
    return values && values.card && values.card[0].narcotics;
  },
};

export const lifeAnamnesisForm: FormConstructorModel = {
  rootEntityName: 'outpatientCards',
  entityName: 'outpatientCard',
  formEntityName: 'lifeAnamnesisForm',
  cards: [
    {
      id: 'card',
      key: 'anamnesis',
      title: 'Анамнез жизни',
      columnCount: 2,
      fields: [
        {
          id: 'anamnesis',
          title: '',
          type: FieldType.TextArea,
          name: 'anamnesis',
          columnStyle: {
            width: '100%',
          },
        },
      ],
    },
    {
      id: 'card',
      key: 'medicalAnamnesis',
      title: 'Медицинский анамнез (указать все имеющиеся заболевания и представляющие интерес состояния)',
      columnCount: 2,
      fields: [
        {
          id: 'medicalAnamnesis',
          title: '',
          type: FieldType.TextArea,
          name: 'medicalAnamnesis',
          columnStyle: {
            width: '100%',
          },
        },
      ],
    },
    {
      id: 'card',
      key: 'pharmacologicalAnamnesis',
      title: 'Фармакологический анамнез (указать все принимаемые препараты и препараты, принимаемые за последние 2 месяца)',
      columnCount: 2,
      fields: [
        {
          id: 'pharmacologicalAnamnesis',
          title: '',
          type: FieldType.TextArea,
          name: 'pharmacologicalAnamnesis',
          columnStyle: {
            width: '100%',
          },
        },
      ],
    },
    {
      id: 'card',
      key: 'pharmacologicalAnamnesis',
      title: 'Аллергологический анамнез',
      columnCount: 2,
      fields: [
        {
          id: 'foodAllergies',
          title: 'Непереносимость продуктов питания',
          type: FieldType.Checkbox,
          name: 'foodAllergies',
        },
        {
          id: 'foodAllergiesString',
          title: 'Продукты питания',
          type: FieldType.Input,
          name: 'foodAllergiesString',
          hidden: {
            shouldUpdate(prevValues, currentValues) {
              return prevValues[0]?.foodAllergies !== currentValues[0]?.foodAllergies;
            },
            condition(values) {
              return values && values.card && values.card[0].foodAllergies;
            },
          },
        },
        {
          id: 'drugAllergies',
          title: 'Непереносимость лекарственных препаратов',
          type: FieldType.Checkbox,
          name: 'drugAllergies',
        },
        {
          id: 'drugAllergiesDrugName',
          title: 'Лекарственные препараты',
          type: FieldType.Input,
          name: 'drugAllergiesDrugName',
          hidden: {
            shouldUpdate(prevValues, currentValues) {
              return prevValues[0]?.drugAllergies !== currentValues[0]?.drugAllergies;
            },
            condition(values) {
              return values && values.card && values.card[0].drugAllergies;
            },
          },
        },
        {
          id: 'allergyType',
          title: 'Какие аллергические проявления отмечались',
          type: FieldType.DictionarySelect,
          dictionaryName: Dictionary.AllergyType,
          name: 'allergyType',
        },
      ],
    },
    {
      id: 'card',
      key: 'heredity',
      title: 'Наследственность',
      columnCount: 2,
      fields: [
        {
          id: 'heredity',
          title: '',
          type: FieldType.TextArea,
          name: 'heredity',
          columnStyle: {
            width: '100%',
          },
        },
      ],
    },
    {
      id: 'card',
      key: 'pastIllnesses',
      title: 'Перенесенные заболевания',
      columnCount: 2,
      fields: [
        {
          id: 'pastIllnesses',
          title: '',
          type: FieldType.TextArea,
          name: 'pastIllnesses',
          columnStyle: {
            width: '100%',
          },
        },
      ],
    },
    {
      id: 'card',
      key: 'accompanyingIllnesses',
      title: 'Cопутствующие заболевания',
      columnCount: 2,
      fields: [
        {
          id: 'accompanyingIllnesses',
          title: '',
          type: FieldType.TextArea,
          name: 'accompanyingIllnesses',
          columnStyle: {
            width: '100%',
          },
        },
      ],
    },
    {
      id: 'card',
      key: 'surgicalInterventions',
      title: 'Оперативные вмешательства',
      columnCount: 2,
      fields: [
        {
          id: 'surgicalInterventions',
          title: '',
          type: FieldType.TextArea,
          name: 'surgicalInterventions',
          columnStyle: {
            width: '100%',
          },
        },
      ],
    },
    {
      id: 'card',
      key: 'tobaccoSmoking',
      title: 'Табакокурение',
      columnCount: 2,
      fields: [
        {
          id: 'tobaccoSmoking',
          title: 'Табакокурение',
          type: FieldType.Checkbox,
          name: 'tobaccoSmoking',
        },
        {
          id: 'tobaccoDailyPack',
          title: 'Количество пачек в день',
          type: FieldType.Input,
          name: 'tobaccoDailyPack',
          hidden: {
            shouldUpdate(prevValues, currentValues) {
              return prevValues[0]?.tobaccoSmoking !== currentValues[0]?.tobaccoSmoking;
            },
            condition(values) {
              return values && values.card && values.card[0].tobaccoSmoking;
            },
          },
        },
      ],
    },
    {
      id: 'card',
      key: 'alcohol',
      title: 'Употребление алкоголя',
      columnCount: 4,
      fields: [
        {
          id: 'alcohol',
          title: 'Употребление алкоголя',
          type: FieldType.Checkbox,
          name: 'alcohol',
        },
        {
          id: 'alcoholAgeRange',
          title: 'Возрастной диапазон употребления',
          type: FieldType.Input,
          name: 'alcoholAgeRange',
          hidden: alcoholHidden,
        },
        {
          id: 'alcoholLastDate',
          title: 'Употреблял ранее (дата последнего употребления) ',
          type: FieldType.DatePicker,
          name: 'alcoholLastDate',
          hidden: alcoholHidden,
        },
        {
          id: 'alcoholOnceAmount',
          title: 'Употребляет на данный момент ____ единиц за раз',
          type: FieldType.Input,
          name: 'alcoholOnceAmount',
          hidden: alcoholHidden,
        },
        {
          id: 'alcoholWeekAmount',
          title: 'Употребляет на данный момент (единиц в неделю)',
          type: FieldType.Input,
          name: 'alcoholWeekAmount',
          hidden: alcoholHidden,
        },
      ],
    },
    {
      id: 'card',
      key: 'alcohol',
      title: 'Употребление наркотиков',
      columnCount: 3,
      fields: [
        {
          id: 'narcotics',
          title: 'Употребление наркотиков',
          type: FieldType.Checkbox,
          name: 'narcotics',
        },
        {
          id: 'narcoticsLastDate',
          title: 'Употреблял ранее (дата последнего употребления)',
          type: FieldType.DatePicker,
          name: 'narcoticsLastDate',
          hidden: narcoticsHidden,
        },
        {
          id: 'narcoticsCurrent',
          title: 'Употребляет на данный момент',
          type: FieldType.Input,
          name: 'narcoticsCurrent',
          hidden: narcoticsHidden,
        },
      ],
    },
    {
      id: 'card',
      key: 'addictionAbuse',
      title: 'Наличие в медицинском анамнезе злоупотребления наркотическими веществами, алкоголем, амфетамином и его производными либо кокаиновой зависимости',
      columnCount: 1,
      fields: [
        {
          id: 'addictionAbuse',
          title: '',
          type: FieldType.Checkbox,
          name: 'addictionAbuse',
        },
      ],
    },
    {
      id: 'card',
      key: 'past90Days',
      title: 'Участие в других клинических исследованиях в последние 90 дней?',
      columnCount: 1,
      fields: [
        {
          id: 'past90Days',
          title: '',
          type: FieldType.Checkbox,
          name: 'past90Days',
        },
      ],
    },
  ],
};

export const initialLifeAnamnesis: LifeAnamnesisCard = {
  foodAllergies: false,
  drugAllergies: false,
  tobaccoSmoking: false,
  alcohol: false,
  narcotics: false,
  addictionAbuse: false,
  past90Days: false,
};
