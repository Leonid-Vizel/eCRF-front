import { Input } from 'shared/ui/Input';
import { Select } from 'shared/ui/Select/Select';
import { DictionarySelect } from 'features/dictionary/ui/DictionarySelect/DictionarySelect';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Dictionary } from 'entities/dictionary';
import { CheckboxOptionType, FormInstance } from 'antd';
import { DictionaryRadioGroup } from 'features/dictionary/ui/DictionaryRadioGroup/DictionaryRadioGroup';
import { RadioGroupOptionType } from 'antd/es/radio';
import { DefaultOptionType } from 'antd/es/select';
import { RadioGroup } from 'shared/ui/RadioGroup/RadioGroup';
import { FieldType } from '../types/types';

interface FieldProps {
  type: FieldType
  form: FormInstance
  fieldName: string
  dictionaryName?:Dictionary
  optionType?:RadioGroupOptionType
  options?:CheckboxOptionType[] & DefaultOptionType[]
}

export const Field = (props:FieldProps) => {
  const {
    type, form, fieldName, dictionaryName, optionType, options,
  } = props;
  switch (type) {
    case FieldType.Input:
      return (
        <Input
          onChange={(event) => form.setFieldValue(fieldName, event.target.value)}
        />
      );
    case FieldType.Select:
      return (
        <Select
          options={options}
          onChange={(value) => form.setFieldValue(fieldName, value)}
        />
      );
    case FieldType.DictionarySelect:
      return (
        <DictionarySelect
          dictionaryName={dictionaryName}
          onChange={(value) => form.setFieldValue(fieldName, value)}
        />
      );
    case FieldType.Checkbox:
      return <Checkbox onChange={(event) => form.setFieldValue(fieldName, event.target.checked)} />;
    case FieldType.RadioGroup:
      return (
        <RadioGroup
          options={options}
          onChange={(event) => form.setFieldValue(fieldName, event.target.value)}
          optionType={optionType}
        />
      );
    case FieldType.DictionaryRadioGroup:
      return (
        <DictionaryRadioGroup
          onChange={(event) => form.setFieldValue(fieldName, event.target.value)}
          dictionaryName={dictionaryName}
          optionType={optionType}
        />
      );
    default:
      return null;
  }
};
