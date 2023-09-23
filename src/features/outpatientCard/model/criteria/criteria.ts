import { FormConstructorModel } from 'features/form/types/types';

export const criteriaForm: FormConstructorModel = {
  rootEntityName: 'outpatientCards',
  entityName: 'outpatientCard',
  formEntityName: 'criteriaForm',
  cards: [
    {
      id: 'include',
      key: 'include',
      title: 'Оценка критериев включения',
      fieldsLayout: 'questionnaire',
      nestedFields: [{
        label: 'label',
        value: 'value',
      }],
    },
    {
      id: 'exclude',
      key: 'exclude',
      title: 'Оценка критериев невключения',
      fieldsLayout: 'questionnaire',
      nestedFields: [{
        label: 'label',
        value: 'value',
      }],
    },
    {
      id: 'others',
      key: 'others',
      title: 'Прочее',
      fieldsLayout: 'questionnaire',
      nestedFields: [{
        label: 'label',
        value: 'value',
      }],
    },

  ],
};
