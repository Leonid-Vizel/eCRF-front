import { FC, useCallback } from 'react';
import { Tabs } from 'shared/ui/Tabs/Tabs';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { RootState } from 'app/providers/StoreProvider';
import cls from './TabPane.module.scss';
import { TabPaneModel } from '../../types/tabPaneTypes';
import { TabPaneButtonContainer } from '../TabPaneButtonContainer/TabPaneButtonContainer';

export interface TabPaneProps extends TabPaneModel {
  className?: string;
  disabled?: boolean
}

export const TabPane:FC<TabPaneProps> = (props) => {
  const {
    className, buttons, items, entityName, onChange, disabled,
  } = props;
  const editMode = useAppSelector((state: RootState) => state?.[entityName]?.tabPane.editMode);
  const onTabPaneChange = useCallback(
    (key: string) => {
      onChange(key);
    },
    [onChange],
  );

  return (
    <div className={`${cls.TabPane} ${className}`}>
      <Tabs
        type="card"
        // todo что то не так  ерндером, проверить
        items={items.map((item) => {
          const { itemDisabled } = item;
          const isDisabledTab = itemDisabled || editMode || disabled || false;
          return ({ ...item, disabled: isDisabledTab });
        })}
        tabBarExtraContent={{
          right: <TabPaneButtonContainer buttons={buttons} />,
        }}
        onChange={onTabPaneChange}
      />
    </div>
  );
};
