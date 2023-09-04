import { notification } from 'antd';

export const openErrorNotification = (
  message: string | React.ReactNode,
  duration = 10,
) => {
  notification.error({
    duration,
    message,
    placement: 'bottomRight',
  });
};
