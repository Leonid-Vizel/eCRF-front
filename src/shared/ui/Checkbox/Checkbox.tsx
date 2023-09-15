import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps } from 'antd';

interface CheckboxProps extends AntCheckboxProps {}

export const Checkbox = (props:CheckboxProps) => <AntCheckbox {...props} />;
