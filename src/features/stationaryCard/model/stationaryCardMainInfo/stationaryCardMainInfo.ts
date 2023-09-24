import { Dictionary } from 'entities/dictionary';
import { hideField } from 'features/form';
import { FieldType, FormConstructorModel } from '../../../form/types/types';

export const stationaryMainInfoForm: FormConstructorModel = {
  rootEntityName: 'stationaryCards',
  entityName: 'stationaryCard',
  formEntityName: 'stationaryMainInfoForm',
  cards:
    [
      {
        id: 'stationaryMainInfo',
        key: 'stationaryMainInfo',
        title: 'Основная информация стационарной карты',
        fields: [
          {
            id: 'receiptDate',
            title: 'Дата и время поступления',
            type: FieldType.DateTimePicker,
            name: 'receiptDate',
            rules: [{ required: true }],
          },
          {
            id: 'dischargDeate',
            title: 'Дата и время выписки',
            type: FieldType.DateTimePicker,
            name: 'dischargDeate',
            rules: [{ required: true }],
          },
          {
            id: 'department',
            title: 'Отделение',
            type: FieldType.Input,
            name: 'department',
            rules: [{ required: true }],
          },
          {
            id: 'countDays',
            title: 'Проведено койко-дней',
            type: FieldType.Input,
            name: 'countDays',
            rules: [{ required: true }],
          },
          {
            id: 'patientTransportation',
            title: 'Виды транспортировки: на каталке',
            type: FieldType.Input,
            name: 'patientTransportation',
            rules: [{ required: true }],
          },
          {
            id: 'bloodGroup',
            title: 'Группа крови',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.BloodGroup,
            name: 'bloodGroup',
          },
          {
            id: 'rhFactor',
            title: 'Резус фактор',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.RhFactor,
            name: 'rhFactor',
          },
          {
            id: 'drugsSideEffects ',
            title: 'Побочное действие лекарств',
            type: FieldType.TextArea,
            name: 'drugsSideEffects ',
            rules: [{ required: true }],
          },
          {
            id: 'surName',
            title: 'Фамилия',
            type: FieldType.Input,
            name: 'surName',
            rules: [{ required: true }],
          },
          {
            id: 'firstName',
            title: 'Имя',
            type: FieldType.Input,
            name: 'firstName',
            rules: [{ required: true }],
          },
          {
            id: 'patronymic',
            title: 'Отчество',
            type: FieldType.Input,
            name: 'patronymic',
          },
          {
            id: 'sex',
            title: 'Пол',
            type: FieldType.DictionaryRadioGroup,
            dictionaryName: Dictionary.Sex,
            optionType: 'button',
            name: 'sex',
          },
        ],
      },
      {
        id: 'location',
        key: 'location',
        title: 'Постоянное место жительства',
        fields: [
          {
            id: 'locality',
            title: 'Постоянное место жительства',
            type: FieldType.DictionaryRadioGroup,
            dictionaryName: Dictionary.Locality,
            name: 'locality',
          },
          {
            id: 'region',
            title: 'Область',
            type: FieldType.Input,
            name: 'region',
          },
          {
            id: 'district',
            title: 'Район',
            type: FieldType.Input,
            name: 'district',
            hidden: hideField('location', 'locality', 2),
          },
          {
            id: 'inhabitedLocality',
            title: 'Населенный пункт',
            type: FieldType.Input,
            name: 'inhabitedLocality',
            hidden: hideField('location', 'locality', 2),
          },
          {
            id: 'address',
            title: 'Адрес',
            type: FieldType.Input,
            name: 'address',
          },
        ],
      },
      {
        id: 'relationContacts',
        key: 'relationContacts',
        title: 'Данные родственников',
        fieldsLayout: 'table',
        addRemoveButtons: true,
        fields: [
          {
            id: 'phone',
            title: 'Номер телефона',
            type: FieldType.Input,
            name: 'phone',
          },
          {
            id: 'address',
            title: 'Адрес',
            type: FieldType.TextArea,
            name: 'adress',
          },
          {
            id: 'remove',
            title: '',
            columnButton: 'remove',
          },
        ],
      },
      {
        id: 'location',
        key: 'location',
        title: 'Постоянное место жительства',
        fields: [
          {
            id: 'work',
            title: 'Занятость',
            type: FieldType.DictionarySelect,
            dictionaryName: Dictionary.Work,
            name: 'work',
          },
          {
            id: 'workPlace',
            title: 'Место работы',
            type: FieldType.Input,
            name: 'workPlace',
          },
          {
            id: 'workPosition',
            title: 'Должность',
            type: FieldType.Input,
            name: 'workPosition',
          },
          {
            id: 'educationPlace',
            title: '',
            type: FieldType.Input,
            name: 'educationPlace',
          },
        ],
      },
    ],
};
