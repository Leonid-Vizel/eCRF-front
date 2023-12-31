import { Dictionary } from 'entities/dictionary';
import { LifeAnamnesisCard } from 'features/outpatientCard/types/lifeAnamnesisTypes';
import { hideField } from 'features/form';
import { FieldType, FormConstructorModel } from '../../../form/types/types';

const alcoholHidden = hideField('card', 'alcohol', 0);

const narcoticsHidden = hideField('card', 'narcotics', 0);

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
          title: 'Анамнез жизни',
          type: FieldType.TextArea,
          name: 'anamnesis',
          // columnStyle: {
          //   width: '100%',
          // },
        },
        {
          id: 'medicalAnamnesis',
          title: 'Медицинский анамнез (указать все имеющиеся заболевания и представляющие интерес состояния)',
          type: FieldType.TextArea,
          name: 'medicalAnamnesis',
          // columnStyle: {
          //   width: '100%',
          // },
        },
        {
          id: 'pharmacologicalAnamnesis',
          title: 'Фармакологический анамнез (указать все принимаемые препараты и препараты, принимаемые за последние 2 месяца)',
          type: FieldType.TextArea,
          name: 'pharmacologicalAnamnesis',
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
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
          name: 'foodAllergies',
        },
        {
          id: 'foodAllergiesString',
          title: 'Продукты питания',
          type: FieldType.Input,
          name: 'foodAllergiesString',
          hidden: hideField('card', 'foodAllergies', 0),
        },
        {
          id: 'drugAllergies',
          title: 'Непереносимость лекарственных препаратов',
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
          name: 'drugAllergies',
        },
        {
          id: 'drugAllergiesDrugName',
          title: 'Лекарственные препараты',
          type: FieldType.Input,
          name: 'drugAllergiesDrugName',
          hidden: hideField('card', 'drugAllergies', 0),
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
      title: 'Детальная информация о заболеваниях',
      columnCount: 2,
      fields: [
        {
          id: 'heredity',
          title: 'Наследственность',
          type: FieldType.TextArea,
          name: 'heredity',
          columnStyle: {
            width: '100%',
          },
        },
        {
          id: 'pastIllnesses',
          title: 'Перенесенные заболевания',
          type: FieldType.TextArea,
          name: 'pastIllnesses',
          columnStyle: {
            width: '100%',
          },
        },
        {
          id: 'accompanyingIllnesses',
          title: 'Cопутствующие заболевания',
          type: FieldType.TextArea,
          name: 'accompanyingIllnesses',
          columnStyle: {
            width: '100%',
          },
        },
        {
          id: 'surgicalInterventions',
          title: 'Оперативные вмешательства',
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
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
          name: 'tobaccoSmoking',
        },
        {
          id: 'tobaccoDailyPack',
          title: 'Количество пачек в день',
          type: FieldType.InputNumber,
          name: 'tobaccoDailyPack',
          hidden: hideField('card', 'tobaccoSmoking', 0),
        },
        {
          id: 'electroTobaccoSmoking',
          title: 'Употребление электронного табака',
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
          name: 'electroTobaccoSmoking',
        },
        {
          id: 'electroTobaccoSmokingComment',
          title: 'Как часто?',
          type: FieldType.Input,
          name: 'electroTobaccoSmokingComment',
          hidden: hideField('card', 'electroTobaccoSmoking', 0),
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
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
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
          type: FieldType.InputNumber,
          name: 'alcoholOnceAmount',
          hidden: alcoholHidden,
        },
        {
          id: 'alcoholWeekAmount',
          title: 'Употребляет на данный момент (единиц в неделю)',
          type: FieldType.InputNumber,
          name: 'alcoholWeekAmount',
          hidden: alcoholHidden,
        },
        {
          id: 'commentsToAlcohol',
          title: 'Комментарий',
          type: FieldType.Input,
          name: 'commentsToAlcohol',
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
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
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
        {
          id: 'commentsToDrugs',
          title: 'Комментарий',
          type: FieldType.Input,
          name: 'commentsToDrugs',
          hidden: narcoticsHidden,
        },
      ],
    },
    {
      id: 'card',
      key: 'addictionAbuse',
      title: `Наличие в медицинском анамнезе злоупотребления наркотическими веществами,
       алкоголем, амфетамином и его производными либо кокаиновой зависимости`,
      columnCount: 1,
      fields: [
        {
          id: 'addictionAbuse',
          title: '',
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
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
          type: FieldType.DictionaryRadioGroup,
          dictionaryName: Dictionary.YesNoNotSuitable,
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
