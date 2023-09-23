/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Layout } from 'antd';
import { Logo } from 'shared/ui/Logo/Logo';
import { defaultRedirect } from 'shared/lib/defaultRedirect';
import cls from './Footer.module.scss';

const { Footer: AntFooter } = Layout;

interface FooterProps {
  className?: string
}

export const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <AntFooter className={`${cls.Footer} ${className}`}>
      <div style={{ cursor: 'pointer' }} onClick={() => defaultRedirect(`${__BASE_URL__}/api/net/Protocols`)}>
        <Logo className={cls.logo} />
      </div>
      <span className={cls.text}>Developed and designed by Nabla Lab.</span>
    </AntFooter>
  );
};
