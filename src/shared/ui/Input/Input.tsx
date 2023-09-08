/* eslint-disable react/jsx-props-no-spreading */
import { Input as AntInput, InputProps } from 'antd';
import { FC } from 'react';

interface IInputProps extends InputProps {}

export const Input: FC<IInputProps> = (props) => <AntInput {...props} />;
