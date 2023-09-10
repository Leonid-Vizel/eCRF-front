import { ConfigProvider } from 'antd';
import { FC } from 'react';

interface RootStylesProviderProps {
  children?: React.ReactNode;
}
enum ThemeColors {
  PRIMARY = ' #32A1E3',
}

export const RootStylesProvider:FC<RootStylesProviderProps> = (props) => {
  const { children } = props;
  return (
    <ConfigProvider theme={{ token: { colorPrimary: ThemeColors.PRIMARY } }}>{ children }</ConfigProvider>
  );
};
