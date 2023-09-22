import { InputNumber as AntInputNumber, InputNumberProps as AntInputNumberProps } from 'antd';
import { FC } from 'react';

interface InputNumberProps extends AntInputNumberProps {}

export const InputNumber:FC<InputNumberProps> = (props) => <AntInputNumber {...props} />;
