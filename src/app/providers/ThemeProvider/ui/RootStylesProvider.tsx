import { ConfigProvider } from 'antd';
import { FC } from 'react';
import ru_RU from 'antd/lib/locale/ru_RU';
import 'dayjs/locale/ru';

interface RootStylesProviderProps {
  children?: React.ReactNode;
}
enum ThemeColors {
  PRIMARY = ' #32A1E3',
}

export const RootStylesProvider:FC<RootStylesProviderProps> = (props) => {
  const { children } = props;
  return (
    <ConfigProvider theme={{ token: { colorPrimary: ThemeColors.PRIMARY } }} locale={ru_RU}>{ children }</ConfigProvider>
  );
};
