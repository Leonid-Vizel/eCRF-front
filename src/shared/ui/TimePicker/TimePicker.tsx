import { TimePicker as AntTimePicker, TimePickerProps as AntTimePickerProps } from 'antd';
import { FC } from 'react';

interface TimePickerProps extends AntTimePickerProps {}

export const TimePicker:FC<TimePickerProps> = (props) => <AntTimePicker {...props} />;
