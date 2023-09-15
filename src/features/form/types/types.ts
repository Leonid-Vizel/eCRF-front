import { CheckboxOptionType } from 'antd';
import { Rule } from 'antd/es/form';
import { RadioGroupOptionType } from 'antd/es/radio';
import { DefaultOptionType } from 'antd/es/select';
import { Dictionary } from 'entities/dictionary';

export interface FormCard {
  id:string
  title:string
  fields:FormField[]
}

export interface FormField {
  id:string
  name:string
  title:string
  type:FieldType
  dictionaryName?: Dictionary
  rules?:Rule[]
  options?:CheckboxOptionType[] & DefaultOptionType[]
  optionType?:RadioGroupOptionType
}

export enum FieldType {
  Input = 'input',
  Select = 'select',
  DictionarySelect = 'dictionarySelect',
  Checkbox = 'checkbox',
  RadioGroup = 'radioGroup',
  DictionaryRadioGroup = 'dictionaryRadioGroup',
}
