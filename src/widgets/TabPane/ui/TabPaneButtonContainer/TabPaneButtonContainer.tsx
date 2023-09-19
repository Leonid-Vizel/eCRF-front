import { FC } from 'react';
import { TabPaneButtons } from 'widgets/TabPane/types/tabPaneTypes';
import { Button } from 'shared/ui/Button/Button';
import cls from './TabPaneButtonContainer.module.scss';

interface TabPaneButtonContainerProps {
  className?: string;
  buttons?: TabPaneButtons[]
}

export const TabPaneButtonContainer:FC<TabPaneButtonContainerProps> = (props) => {
  const { className, buttons } = props;
  return (
    <div className={`${cls.TabPaneButtonContainer} ${className}`}>
      {buttons?.map(({
        icon, onClick, name, disabled, form, htmlType,
      }) => <Button key={name} disabled={disabled} name={name} icon={icon} onClick={onClick} form={form} htmlType={htmlType} />)}
    </div>
  );
};
