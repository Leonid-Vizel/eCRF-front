import { Typography } from 'antd';
import { Dictionary } from 'entities/dictionary';
import { FormConstructor } from 'features/form';
import { FieldType, FormCard } from 'features/form/types/types';
import { Button } from 'shared/ui/Button';

const cards:FormCard[] = [
  {
    id: 'first',
    title: 'Один',
    fields: [
      {
        id: '1',
        title: 'input1',
        type: FieldType.Input,
        name: 'input1',
        rules: [{ required: true, message: 'Please input your username!' }],
      },
      {
        id: '2',
        title: 'input2',
        type: FieldType.Input,
        name: 'input2',
      },
      {
        id: '3',
        title: 'input3',
        type: FieldType.Input,
        name: 'input3',
      },
      {
        id: '4',
        title: 'input4',
        type: FieldType.Input,
        name: 'input4',
      },
      {
        id: '5',
        title: 'input5',
        type: FieldType.Input,
        name: 'input5',
      },
    ],
  },
  {
    id: 'second',
    title: 'Два',
    fields: [
      {
        id: '1',
        title: 'селект',
        type: FieldType.Select,
        options: [{ label: 'hi', value: 1, key: '1' }, { label: 'bye', value: 2, key: '2' }],
        name: 'select',
      },
      {
        id: '3',
        title: 'радио',
        type: FieldType.RadioGroup,
        options: [{ label: 'hi', value: 1, key: '1' }, { label: 'bye', value: 2, key: '2' }],
        name: 'radio',
      },
      {
        id: '2',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
    ],
  },
  {
    id: 'third',
    title: 'Три',
    fields: [
      {
        id: '1',
        title: 'селект',
        type: FieldType.DictionarySelect,
        dictionaryName: Dictionary.Family,
        name: 'select',
      },
      {
        id: '2',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
      {
        id: '3',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
      {
        id: '4',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
    ],
  },
  {
    id: 'fourth',
    title: 'Четыре',
    fields: [
      {
        id: '1',
        title: 'селект',
        type: FieldType.DictionarySelect,
        dictionaryName: Dictionary.AllergyType,
        name: 'select',
      },
      {
        id: '2',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
      {
        id: '3',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
      {
        id: '4',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
    ],
  },
  {
    id: '5',
    title: 'Четыре',
    fields: [
      {
        id: '1',
        title: 'селект',
        type: FieldType.DictionarySelect,
        dictionaryName: Dictionary.DisabilityGroup,
        name: 'select',
      },
      {
        id: '2',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
      {
        id: '3',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
      {
        id: '4',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
    ],
  },
  {
    id: '6',
    title: 'Четыре',
    fields: [
      {
        id: '1',
        title: 'селект',
        type: FieldType.DictionarySelect,
        dictionaryName: Dictionary.Locality,
        name: 'select',
      },
      {
        id: '2',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
      {
        id: '3',
        title: 'чекбокс',
        type: FieldType.Checkbox,
        name: 'checkbox',
      },
      {
        id: '4',
        title: 'radio',
        type: FieldType.DictionaryRadioGroup,
        name: 'radiogroup',
        dictionaryName: Dictionary.Sex,
        optionType: 'button',
        rules: [{ required: true }],
      },
    ],
  },
];

const { Title } = Typography;

export const FormPage = () => {
  const header = <Title>Форма для заполнения</Title>;
  const footer = (
    <Button htmlType="submit">Сохранить</Button>
  );

  return (
    <FormConstructor
      cards={cards}
      onFinish={(values) => console.log(values)}
      header={header}
      footer={footer}
    />
  );
};
