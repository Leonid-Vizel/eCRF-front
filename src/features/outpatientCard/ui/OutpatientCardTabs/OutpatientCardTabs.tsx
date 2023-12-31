import { FC, useCallback } from 'react';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { TabPane, TabPaneButtons } from 'widgets/TabPane';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'app/providers/StoreProvider';
import { outpatientCardTabsModel } from '../../model/outpatientCardTabsModel/outpatientCardTabsModel';
import { setEditMode, setOutpatientCardTabName } from '../../model/slice/outpatientCard.slice';
import { cardTabPaneSelector, getCardId } from '../../model/selectors/outpatientCardSelectors';

interface OutpatientCardTabsProps {
  // className?: string;
}

export const OutpatientCardTabs:FC<OutpatientCardTabsProps> = () => {
  const dispatch = useAppDispatch();
  const tabPaneData = useAppSelector((state) => cardTabPaneSelector(state));
  const cardId = useAppSelector(getCardId);

  const onTabPaneChange = useCallback(
    (key: string) => {
      dispatch(setOutpatientCardTabName(key));
    },
    [dispatch],
  );

  const tabPaneButtons: TabPaneButtons[] = [{
    icon: <EditOutlined />,
    disabled: false,
    name: 'edit',
    id: 'editBtn',
    // вынести в usecallback и в функцию
    onClick: () => dispatch(setEditMode(true)),
  },
  {
    icon: <SaveOutlined />,
    disabled: false,
    name: 'save',
    id: 'saveBtn',
    onClick: () => {
      dispatch(setEditMode(false));
    },
    form: tabPaneData.formEntityName,
    htmlType: 'submit',
  },
  ];
  return (
    <TabPane
      entityName={outpatientCardTabsModel.entityName}
      items={outpatientCardTabsModel.items}
      buttons={tabPaneButtons}
      onChange={onTabPaneChange}
      disabled={!cardId}
    />
  );
};
