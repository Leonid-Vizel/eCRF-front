import { Tooltip as AntTooltip, TooltipProps as AntTooltipProps } from 'antd';
import { FC } from 'react';

type TooltipProps = AntTooltipProps;

export const Tooltip:FC<TooltipProps> = (props) => {
  const { children, ...otherProps } = props;

  return <AntTooltip {...otherProps}>{children}</AntTooltip>;
};
