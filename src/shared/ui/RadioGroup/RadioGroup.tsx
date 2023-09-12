import { Radio, RadioGroupProps as AntRadioGroupProps } from 'antd';

interface RadioGroupProps extends AntRadioGroupProps {}

export const RadioGroup = (props:RadioGroupProps) => <Radio.Group {...props} />;
