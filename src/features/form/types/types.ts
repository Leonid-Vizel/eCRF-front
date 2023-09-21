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
  hidden?:Hidden
  columnStyle?:React.CSSProperties
}

export interface Hidden {
  shouldUpdate: (prevValues:any, currentValues:any)=>boolean
  condition: (values:any)=>boolean
}

export enum FieldType {
  Input = 'input',
  Select = 'select',
  DictionarySelect = 'dictionarySelect',
  Checkbox = 'checkbox',
  RadioGroup = 'radioGroup',
  DictionaryRadioGroup = 'dictionaryRadioGroup',
  DatePicker = 'datePicker',
  DateTimePicker = 'dateTimePicker',
  TimePicker = 'timePicker',
  TextArea = 'textArea',
}

export interface FormConstructorModel {
  rootEntityName: string;
  entityName: string;
  formEntityName: string
  cards: FormCards[]
}

export interface FormSchemaItem {
  label:string,
  value:unknown[]
}

export interface FormCardsItem {
  name:string,
  fields:FormField[]
}
