import { CheckboxOptionType } from 'antd';
import { Rule } from 'antd/es/form';
import { RadioGroupOptionType } from 'antd/es/radio';
import { DefaultOptionType } from 'antd/es/select';
import { Dictionary } from 'entities/dictionary';

export interface FormCards {
  id:string
  key:string
  title:string
  fieldsLayout?: 'default' | 'table'
  fields: FormField[]
  columnCount?: number
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
  rowType?: string
  initialValue?: unknown
}

export enum FieldType {
  Input = 'input',
  Select = 'select',
  DictionarySelect = 'dictionarySelect',
  Checkbox = 'checkbox',
  RadioGroup = 'radioGroup',
  DictionaryRadioGroup = 'dictionaryRadioGroup',
  DatePicker = 'datePicker',
}

export interface FormConstructorModel {
  entityName: string;
  formEntityName: string
  cards: FormCards[]
}
