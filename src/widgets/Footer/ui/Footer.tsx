import { Layout } from 'antd';
import NablaLabLogo from 'shared/assets/images/NablaLabLogo.svg';
import cls from './Footer.module.scss';

const { Footer: AntFooter } = Layout;

interface FooterProps {
  className?: string
}

export const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <AntFooter className={`${cls.Footer} ${className}`}>
      <span className={cls.text}>
        <span>Разработано в</span>
        <NablaLabLogo className={cls.developerLogo} />
      </span>
    </AntFooter>
  );
};
