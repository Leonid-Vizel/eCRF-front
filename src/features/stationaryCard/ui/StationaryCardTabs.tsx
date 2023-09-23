import { FC, useCallback } from 'react';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { TabPane, TabPaneButtons } from 'widgets/TabPane';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'app/providers/StoreProvider';
import { setEditMode, setTabName } from '../model/slice/stationaryCard.slice';
import { stationaryCardTabsModel } from '../model/stationaryCardTabsModel/stationaryCardTabsModel';
import { cardTabPaneSelector, getCardId } from '../model/selectors/stationaryCardSelectors';

interface StationaryCardTabsProps {
}

export const StationaryCardTabs:FC<StationaryCardTabsProps> = () => {
  const dispatch = useAppDispatch();
  const tabPaneData = useAppSelector(cardTabPaneSelector);
  const cardId = useAppSelector(getCardId);

  const onTabPaneChange = useCallback(
    (key: string) => {
      dispatch(setTabName(key));
    },
    [dispatch],
  );

  const onEdit = useCallback(() => dispatch(setEditMode(true)), [dispatch]);
  const onSave = useCallback(() => dispatch(setEditMode(false)), [dispatch]);

  const tabPaneButtons: TabPaneButtons[] = [{
    icon: <EditOutlined />,
    disabled: false,
    name: 'edit',
    id: 'editBtn',
    onClick: onEdit,
  },
  {
    icon: <SaveOutlined />,
    disabled: false,
    name: 'save',
    id: 'saveBtn',
    onClick: onSave,
    form: tabPaneData.formEntityName,
    htmlType: 'submit',
  },
  ];
  return (
    <TabPane
      entityName={stationaryCardTabsModel.entityName}
      items={stationaryCardTabsModel.items}
      buttons={tabPaneButtons}
      onChange={onTabPaneChange}
      disabled={!cardId}
    />
  );
};
