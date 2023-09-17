import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';

type DatePickerProps = AntDatePickerProps;

export const DatePicker = (props:DatePickerProps) => <AntDatePicker locale={locale} {...props} />;
