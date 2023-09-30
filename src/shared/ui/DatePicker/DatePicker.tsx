import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps } from 'antd';

type DatePickerProps = AntDatePickerProps;

export const DatePicker = (props:DatePickerProps) => <AntDatePicker {...props} />;
