import { FC } from 'react';
import { Popover as AntdPopover, PopoverProps as AntdPopoverProps } from 'antd';

interface PopoverProps extends AntdPopoverProps {
  className?: string;
}

export const Popover:FC<PopoverProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <AntdPopover className={className} {...rest} />
  );
};
