import { FC, ReactNode } from 'react';
import { roleSelector } from 'entities/user';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';

interface PrivateComponentProps {
  accessRules: string[]
  children: ReactNode;
}

export const PrivateComponent:FC<PrivateComponentProps> = (props) => {
  const { children, accessRules } = props;
  const role = useAppSelector(roleSelector) as unknown as string;
  if (accessRules.includes(role)) {
    return children;
  }
  return null;
};
