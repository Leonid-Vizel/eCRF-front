import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';

interface SelectProps extends AntSelectProps {}

export const Select = (props:SelectProps) => <AntSelect {...props} />;
