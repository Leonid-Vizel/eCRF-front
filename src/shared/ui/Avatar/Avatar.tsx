import { FC } from 'react';
import { Avatar as AntdAvatar, AvatarProps as AntdAvatarProps } from 'antd';

interface AvatarProps extends AntdAvatarProps {
  className?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { className } = props;
  return (
    <AntdAvatar className={className} {...props} />
  );
};
