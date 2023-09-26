import { TreeSelect as AntTreeSelect, TreeSelectProps as AntTreeSelectProps } from 'antd';

interface TreeSelectProps extends AntTreeSelectProps {}

export const TreeSelect = (props:TreeSelectProps) => <AntTreeSelect {...props} />;
