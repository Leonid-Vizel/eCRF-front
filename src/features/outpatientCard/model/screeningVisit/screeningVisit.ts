import { Dictionary } from 'entities/dictionary';
import { FieldType, FormCards, FormCardsItem } from 'features/form/types/types';

export const screeningVisitCards:FormCardsItem[] = [
  {
    name: 'dateTime',
    fields: [
      {
        id: 'dateTime',
        name: 'dateTime',
        title: '',
        type: FieldType.DateTimePicker,
      },
    ],
  },
  {
    name: 'agreed',
    fields: [
      {
        id: 'agreed',
        name: 'agreed',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'formTime',
    fields: [
      {
        id: 'form',
        name: 'form',
        title: '',
        type: FieldType.Checkbox,
      },
      {
        id: 'formTime',
        name: 'formTime',
        title: '',
        type: FieldType.TimePicker,
      },
    ],
  },
  {
    name: 'formEnoughTime',
    fields: [
      {
        id: 'formEnoughTime',
        name: 'formEnoughTime',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'acquaintance',
    fields: [
      {
        id: 'acquaintance',
        name: 'acquaintance',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'understanding',
    fields: [
      {
        id: 'understanding',
        name: 'understanding',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'requirements',
    fields: [
      {
        id: 'requirements',
        name: 'requirements',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'questions',
    fields: [
      {
        id: 'questions',
        name: 'questions',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'fullInfo',
    fields: [
      {
        id: 'fullInfo',
        name: 'fullInfo',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'fullAgreed',
    fields: [
      {
        id: 'fullAgreed',
        name: 'fullAgreed',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'complyWithTheRequirements',
    fields: [
      {
        id: 'complyWithTheRequirements',
        name: 'complyWithTheRequirements',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'contraception',
    fields: [
      {
        id: 'contraception',
        name: 'contraception',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'signed2Examples',
    fields: [
      {
        id: 'signed2Examples',
        name: 'signed2Examples',
        title: '',
        type: FieldType.Checkbox,
      },
      {
        id: 'signed2ExamplesDateTime',
        name: 'signed2ExamplesDateTime',
        title: 'Дата и время подписания',
        type: FieldType.DateTimePicker,
      },
    ],
  },
  {
    name: 'exampleInDocumentation',
    fields: [
      {
        id: 'exampleInDocumentation',
        name: 'exampleInDocumentation',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'stacionar',
    fields: [
      {
        id: 'stacionar',
        name: 'stacionar',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'signedForm',
    fields: [
      {
        id: 'signedForm',
        name: 'signedForm',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
  {
    name: 'agreementOperator',
    fields: [
      {
        id: 'agreementOperator',
        name: 'agreementOperator',
        title: '',
        type: FieldType.Input,
      },
    ],
  },
  {
    name: 'individualString',
    fields: [
      {
        id: 'individualString',
        name: 'individualString',
        title: '',
        type: FieldType.Input,
      },
    ],
  },
  {
    name: 'polis',
    fields: [
      {
        id: 'handedPolis',
        name: 'handedPolis',
        title: '',
        type: FieldType.Checkbox,
      },
      {
        id: 'insuranceOrganisationId',
        name: 'insuranceOrganisationId',
        title: 'Название страховой компании',
        type: FieldType.DictionarySelect,
        dictionaryName: Dictionary.InsuranceOrganisation,
      },
    ],
  },
  {
    name: 'polisCopy',
    fields: [
      {
        id: 'polisCopy',
        name: 'polisCopy',
        title: '',
        type: FieldType.Checkbox,
      },
    ],
  },
];

export const screeningVisitTable:FormCards = {
  id: 'table',
  key: 'table',
  title: 'Заключения специалистов',
  fieldsLayout: 'table',
  fields: [
    {
      id: 'date',
      title: 'Дата (число, месяц, год)',
      type: FieldType.DatePicker,
      name: 'date',
      rules: [{ required: true }],
    },
    {
      id: 'place',
      title: 'Место',
      type: FieldType.Input,
      name: 'place',
    },
    {
      id: 'speciality',
      title: 'Специальность',
      type: FieldType.Input,
      name: 'speciality',
    },
    {
      id: 'result',
      title: 'Заключение',
      type: FieldType.Input,
      name: 'result',
    },
  ],
};
