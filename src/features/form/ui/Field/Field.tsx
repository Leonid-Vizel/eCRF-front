import { Input } from 'shared/ui/Input';
import { Select } from 'shared/ui/Select/Select';
import { DictionarySelect } from 'features/dictionary/ui/DictionarySelect/DictionarySelect';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Dictionary } from 'entities/dictionary';
import { CheckboxOptionType, Form, FormInstance } from 'antd';
import { DictionaryRadioGroup } from 'features/dictionary/ui/DictionaryRadioGroup/DictionaryRadioGroup';
import { RadioGroupOptionType } from 'antd/es/radio';
import { DefaultOptionType } from 'antd/es/select';
import { RadioGroup } from 'shared/ui/RadioGroup/RadioGroup';
import { Rule } from 'antd/es/form';
import { DatePicker } from 'shared/ui/DatePicker/DatePicker';
import { FieldType } from '../../types/types';
import cls from './Field.module.scss';
import { getEmptyValidationText } from '../../model/fieldModel/getValidation';

interface FieldProps {
  type: FieldType
  form: FormInstance
  dictionaryName?:Dictionary
  optionType?:RadioGroupOptionType
  options?:CheckboxOptionType[] & DefaultOptionType[]
  title?: string
  name: string | string[]
  rules?: Rule[]
}

export const Field = (props:FieldProps) => {
  const {
    type, form, name, title, dictionaryName, optionType, options, rules,
  } = props;
  switch (type) {
    case FieldType.Input:
      return (
        <Form.Item label={title} name={name} rules={getEmptyValidationText(rules)} className={cls.formItem}>
          <Input
            className={cls.inputType}
            onChange={(event) => form.setFieldValue(name, event.target.value)}
          />
        </Form.Item>
      );
    case FieldType.Select:
      return (
        <Form.Item label={title} name={name} rules={getEmptyValidationText(rules)} className={cls.formItem}>
          <Select
            className={cls.inputType}
            options={options}
            onChange={(value) => form.setFieldValue(name, value)}
          />

        </Form.Item>
      );
    case FieldType.DictionarySelect:
      return (
        <Form.Item label={title} name={name} rules={getEmptyValidationText(rules)} className={cls.formItem}>
          <DictionarySelect
            className={cls.inputType}
            dictionaryName={dictionaryName}
            onChange={(value) => form.setFieldValue(name, value)}
          />
        </Form.Item>
      );
    case FieldType.Checkbox:
      return (
        <Form.Item name={name} rules={getEmptyValidationText(rules)} valuePropName="checked">
          <Checkbox
            onChange={(event) => form.setFieldValue(name, event.target.checked)}
            className={cls.checkbox}
          >
            {title}
          </Checkbox>
        </Form.Item>
      );
    case FieldType.RadioGroup:
      return (
        <Form.Item label={title} name={name} rules={getEmptyValidationText(rules)} className={cls.formItem}>
          <RadioGroup
            className={cls.inputType}
            options={options}
            onChange={(event) => form.setFieldValue(name, event.target.value)}
            optionType={optionType}
          />

        </Form.Item>
      );
    case FieldType.DictionaryRadioGroup:
      return (
        <Form.Item label={title} name={name} rules={getEmptyValidationText(rules)} className={cls.formItem}>
          <DictionaryRadioGroup
            className={cls.inputType}
            onChange={(event) => form.setFieldValue(name, event.target.value)}
            dictionaryName={dictionaryName}
            optionType={optionType}
          />

        </Form.Item>
      );
    case FieldType.DatePicker:
      return (
        <Form.Item label={title} name={name} rules={getEmptyValidationText(rules)} className={cls.formItem}>
          <DatePicker
            className={cls.inputType}
            onChange={(date) => form.setFieldValue(name, date)}
          />
        </Form.Item>
      );
    default:
      return null;
  }
};
