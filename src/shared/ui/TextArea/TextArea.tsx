import { Input as AntInput } from 'antd';
import { TextAreaProps as AntTextAreaProps } from 'antd/lib/input/TextArea';
import { FC } from 'react';

const { TextArea: AntTextArea } = AntInput;

interface TextAreaProps extends AntTextAreaProps {}

export const TextArea: FC<TextAreaProps> = (props) => <AntTextArea {...props} />;
