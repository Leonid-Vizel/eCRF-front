import { Input } from 'shared/ui/Input';
import { Select } from 'shared/ui/Select/Select';
import { DictionarySelect } from 'features/dictionary/ui/DictionarySelect/DictionarySelect';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Dictionary } from 'entities/dictionary';
import {
  CheckboxOptionType, Form, FormInstance, InputNumber, Upload,
} from 'antd';
import { DictionaryRadioGroup } from 'features/dictionary/ui/DictionaryRadioGroup/DictionaryRadioGroup';
import { RadioGroupOptionType } from 'antd/es/radio';
import { DefaultOptionType } from 'antd/es/select';
import { RadioGroup } from 'shared/ui/RadioGroup/RadioGroup';
import { Rule } from 'antd/es/form';
import { DatePicker } from 'shared/ui/DatePicker/DatePicker';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import { TimePicker } from 'shared/ui/TimePicker/TimePicker';
import dayjs from 'dayjs';
import ReactInputMask from 'react-input-mask';
import { DictionaryTreeSelect } from 'features/dictionary';
import utc from 'dayjs/plugin/utc';
import tz from 'dayjs/plugin/timezone';
import { Button } from 'shared/ui/Button';
import { DownloadForm } from 'shared/ui/DownloadForm/DownloadForm';
import { FieldType, Hidden } from '../../types/types';
import cls from './Field.module.scss';

dayjs.extend(utc);
dayjs.extend(tz);

interface FieldProps {
  type: FieldType
  form: FormInstance
  dictionaryName?:Dictionary
  optionType?:RadioGroupOptionType
  options?:CheckboxOptionType[] & DefaultOptionType[]
  title?: string
  name: string | string[]
  rules?: Rule[]
  hidden?:Hidden
  mask?:string | (string | RegExp)[]
  inputNumberProps?: {
    min?: number
    max?: number
  }
  entities: {
    rootEntityName: string;
    entityName: string;
    formEntityName: string;
  }
  formListName: string
  confirmTitle?: string
  uploadAction?: string
  uploadAccept?: string
  downloadAction?: string
  fileLoaded?: boolean
  disabled?:boolean
  maxFileCount?: number | null
}

export const Field = (props:FieldProps) => {
  const {
    type,
    form,
    name,
    title,
    dictionaryName,
    optionType = 'button',
    options,
    rules: fieldRules = [],
    hidden,
    mask,
    inputNumberProps,
    entities,
    formListName,
    confirmTitle,
    uploadAction,
    uploadAccept = '.pdf',
    downloadAction,
    fileLoaded,
    disabled,
    maxFileCount = 1,
  } = props;
  let field;
  const rules = disabled ? fieldRules : [
    ...fieldRules,
    {
      // eslint-disable-next-line consistent-return
      validator: async (_, value) => {
        if (value === null || value === undefined) {
          return Promise.reject(new Error(title || confirmTitle));
        }
      },
    },
  ];

  switch (type) {
    case FieldType.Input:
      field = (
        <Form.Item label={title} name={name} rules={rules} className={cls.formItem}>
          {mask
            ? (
              <ReactInputMask disabled={disabled} mask={mask} onChange={(event) => form.setFieldValue(name, event.target.value)}>
                <Input
                  className={cls.inputType}
                />
              </ReactInputMask>
            )
            : (
              <Input
                className={cls.inputType}
                onChange={(event) => form.setFieldValue(name, event.target.value)}
                disabled={disabled}
              />
            )}
        </Form.Item>
      );
      break;
    case FieldType.Select:
      field = (
        <Form.Item label={title} name={name} rules={rules} className={cls.formItem}>
          <Select
            popupMatchSelectWidth={false}
            className={cls.inputType}
            options={options}
            onChange={(value) => form.setFieldValue(name, value)}
            disabled={disabled}
          />

        </Form.Item>
      );
      break;
    case FieldType.DictionarySelect:
      field = (
        <Form.Item label={title} name={name} rules={rules} className={cls.formItem}>
          <DictionarySelect
            className={cls.inputType}
            dictionaryName={dictionaryName}
            onChange={(value) => form.setFieldValue(name, value)}
            entities={entities}
            formListName={formListName}
            name={name}
            disabled={disabled}
          />
        </Form.Item>
      );
      break;
    case FieldType.Checkbox:
      field = (
        <Form.Item
          name={name}
          rules={[...rules]}
          valuePropName="checked"
          className={cls.formItem}
        >
          <Checkbox
            onChange={(event) => form.setFieldValue(name, event.target.checked)}
            className={cls.checkbox}
            disabled={disabled}
          >
            {title}
          </Checkbox>
        </Form.Item>
      );
      break;
    case FieldType.RadioGroup:

      field = (
        <Form.Item label={title} name={name} rules={rules} className={cls.formItem}>
          <RadioGroup
            className={cls.inputType}
            options={options}
            onChange={(event) => form.setFieldValue(name, event.target.value)}
            optionType={optionType}
            disabled={disabled}
          />

        </Form.Item>
      );
      break;
    case FieldType.DictionaryRadioGroup:

      field = (
        <Form.Item label={title} name={name} rules={rules} className={cls.formItem}>
          <DictionaryRadioGroup
            className={cls.inputType}
            onChange={(event) => form.setFieldValue(name, event.target.value)}
            dictionaryName={dictionaryName}
            optionType={optionType}
            entities={entities}
            formListName={formListName}
            name={name}
            disabled={disabled}
          />

        </Form.Item>
      );
      break;
    case FieldType.DatePicker:
      field = (
        <Form.Item
          label={title}
          name={name}
          rules={rules}
          className={cls.formItem}
          getValueProps={(i) => (i ? { value: dayjs.utc(i).tz() } : { value: i })}
        >
          <DatePicker
            className={cls.inputType}
            onChange={(date) => form.setFieldValue(name, date)}
            format="DD.MM.YYYY"
            disabled={disabled}
          />
        </Form.Item>
      );
      break;
    case FieldType.DateTimePicker:
      field = (
        <Form.Item
          label={title}
          name={name}
          rules={rules}
          className={cls.formItem}
          getValueProps={(i) => (i ? { value: dayjs.utc(i).tz() } : { value: i })}
        >
          <DatePicker
            className={cls.inputType}
            onChange={(date) => form.setFieldValue(name, date)}
            format="DD.MM.YYYY HH:mm"
            placeholder="Выберите дату и время"
            showTime
            disabled={disabled}
          />
        </Form.Item>
      );
      break;
    case FieldType.TimePicker:
      field = (
        <Form.Item
          label={title}
          name={name}
          rules={rules}
          className={cls.formItem}
          getValueProps={(i) => (i ? { value: dayjs.utc(i).tz() } : { value: i })}
        >
          <TimePicker
            className={cls.inputType}
            onChange={(date) => form.setFieldValue(name, date)}
            placeholder="Выберите время"
            format="HH:mm"
            disabled={disabled}
          />
        </Form.Item>
      );
      break;
    case FieldType.TextArea:
      field = (
        <Form.Item label={title} name={name} rules={rules} className={cls.responsiveFormItem}>
          <TextArea
            className={cls.inputType}
            onChange={(event) => form.setFieldValue(name, event.target.value)}
            disabled={disabled}
          />
        </Form.Item>
      );
      break;
    case FieldType.InputNumber:
      field = (
        <Form.Item label={title} name={name} rules={rules} className={cls.formItem}>
          <InputNumber
            min={inputNumberProps?.min}
            max={inputNumberProps?.max}
            className={cls.inputType}
            onChange={(value) => form.setFieldValue(name, value)}
            disabled={disabled}
          />
        </Form.Item>
      );
      break;
    case FieldType.Text:
      field = (
        <Form.Item label={title} name={name} rules={rules}>
          <Input readOnly bordered={false} />
        </Form.Item>
      );
      break;
    case FieldType.DictionaryTreeSelect:
      field = (
        <Form.Item label={title} name={name} rules={rules} className={cls.formItem}>
          <DictionaryTreeSelect
            dictionaryName={dictionaryName}
            entities={entities}
            formListName={formListName}
            name={name}
            disabled={disabled}
          />
        </Form.Item>
      );
      break;
    case FieldType.UploadDownload:
      field = (
        <Form.Item label={title} name={name} rules={rules} className={cls.formItem}>
          <Upload
            action={uploadAction}
            accept={uploadAccept}
            disabled={disabled}
            maxCount={maxFileCount}
          >
            <Button>Загрузить</Button>
          </Upload>
          {fileLoaded && (
          <DownloadForm
            action={downloadAction}
            title="Скачать"
          />
          )}
        </Form.Item>
      );
      break;
    default:
      field = null;
  }

  return (
    hidden
      ? (
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => hidden.shouldUpdate(prevValues, currentValues)}
        >
          {({ getFieldsValue }) => {
            const values = getFieldsValue();
            if (hidden.condition(values)) {
              return field;
            }

            return null;
          }}
        </Form.Item>
      )
      : field
  );
};
