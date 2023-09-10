import { FC } from 'react';
import MainLogo from 'shared/assets/images/logo.png';
import cls from './Logo.module.scss';

interface LogoProps {
  className?: string;
  alt?: string
}

export const Logo:FC<LogoProps> = (props: LogoProps) => {
  const { className, alt = 'ecrf' } = props;
  return (<img className={`${cls.logo} ${className}`} src={MainLogo} alt={alt} />);
};
