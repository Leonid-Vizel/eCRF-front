import {
  FieldType, FormConstructorModel,
} from 'features/form/types/types';

export const scrVisit: FormConstructorModel = {
  rootEntityName: 'outpatientCards',
  entityName: 'outpatientCard',
  formEntityName: 'screeningVisitSchema',
  cards: [
    {
      id: 'data',
      key: 'data',
      title: 'Скрининговый визит',
      fieldsLayout: 'questionnaire',
      nestedFields: [{
        label: 'label',
        value: 'value',
      }],
    },
    {
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
    },
  ],
};
