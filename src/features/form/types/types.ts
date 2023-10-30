import { CheckboxOptionType } from 'antd';
import { Rule } from 'antd/es/form';
import { RadioGroupOptionType } from 'antd/es/radio';
import { DefaultOptionType } from 'antd/es/select';
import { Dictionary } from 'entities/dictionary';

export type FieldsLayout = 'default' | 'table' | 'questionnaire';
export type ColumnButton = 'remove';

export interface FormCards {
  id: string
  key: string
  title: string
  fieldsLayout?: FieldsLayout
  fields?: FormField[]
  nestedFields?: NestedFields[]
  columnCount?: number
  addRemoveButtons?: boolean
  isDisabledCondition?: boolean
}

export interface NestedFields {
  // todo: скорее всего атрибутивный состав увеличиться и нужно будет прокидывать FormField
  label: string,
  value: string
}

// todo: рабить на разные интерфейсы, для таблиц и для филдов
export interface FormField {
  id: string
  title: string | React.ReactNode
  name?: string
  type?: FieldType
  dictionaryName?: Dictionary
  rules?: Rule[]
  options?: CheckboxOptionType[] & DefaultOptionType[]
  optionType?: RadioGroupOptionType
  rowType?: string
  hidden?: Hidden
  action?: (args:unknown) => string
  columnStyle?: React.CSSProperties
  columnButton?: ColumnButton;
  mask?: string | (string | RegExp)[]
  inputNumberProps?: {
    min?: number
    max?: number
  }
}

export interface Hidden {
  shouldUpdate: (prevValues: any, currentValues: any) => boolean
  condition: (values: any) => boolean
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
  InputNumber = 'inputNumber',
  Text = 'text',
  DictionaryTreeSelect = 'dictionaryTreeSelect',
  UploadDownload = 'uploadDownload',
  UploadDownloadList = 'uploadDownloadList',
}

export interface FormConstructorModel {
  rootEntityName: string;
  entityName: string;
  formEntityName?: string
  cards: FormCards[]
  disabledCondition?: {
    name:(string | number)[]
    value:number | string | boolean
  }
}

export interface FormSchemaItem {
  label:string,
  value:unknown[]
}

export interface FormCardsItem {
  name:string,
  fields:FormField[]
}
