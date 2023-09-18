import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps } from 'antd';
import cls from './Checkbox.module.scss';

interface CheckboxProps extends AntCheckboxProps {
  className?: string
}

export const Checkbox = (props:CheckboxProps) => {
  const { className, ...otherProps } = props;
  return <AntCheckbox className={`${cls.Checkbox} ${className}`} {...otherProps} />;
};
