import { FC, ReactNode } from 'react';

interface PrivateComponentProps {
  accessRules: string[];
  roleName: string;
  children: ReactNode;
}

export const PrivateComponent:FC<PrivateComponentProps> = (props) => {
  const { children, accessRules, roleName } = props;

  if (accessRules.includes(roleName)) {
    return children;
  }
  return null;
};
