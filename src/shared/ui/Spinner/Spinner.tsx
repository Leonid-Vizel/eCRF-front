import { Spin, SpinProps } from 'antd';
import { FC } from 'react';

interface ISpinnerProps extends SpinProps {}

export const Spinner: FC<ISpinnerProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Spin {...otherProps}>
      {children}
    </Spin>
  );
};
