import { ConfigProvider } from 'antd';
import { FC } from 'react';
import ru_RU from 'antd/lib/locale/ru_RU';

interface RootStylesProviderProps {
  children?: React.ReactNode;
}
enum ThemeColors {
  PRIMARY = ' #32A1E3',
}

export const RootStylesProvider:FC<RootStylesProviderProps> = (props) => {
  const { children } = props;
  return (
    <ConfigProvider locale={ru_RU} theme={{ token: { colorPrimary: ThemeColors.PRIMARY } }}>{ children }</ConfigProvider>
  );
};
