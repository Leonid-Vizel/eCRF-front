import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Logo } from 'shared/ui/Logo/Logo';

import cls from './Footer.module.scss';

const { Footer: AntFooter } = Layout;

interface FooterProps {
  className?: string
}

export const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <AntFooter className={`${cls.Footer} ${className}`}>
      <Link to="/document/1">
        <Logo className={cls.logo} />
      </Link>
      <span className={cls.text}>Developed and designed by Nabla Lab.</span>
    </AntFooter>
  );
};
