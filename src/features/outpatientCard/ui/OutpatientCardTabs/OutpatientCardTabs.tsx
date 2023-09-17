import { FC } from 'react';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { TabPane } from 'widgets/TabPane';
import { outpatientCardTabsModel } from 'features/outpatientCard/model/outpatientCardTabsModel/outpatientCardTabsModel';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import cls from './OutpatientCardTabs.module.scss';
import { setEditMode } from '../../model/slice/outpatientCard.slice';

interface OutpatientCardTabsProps {
  className?: string;
}

export const OutpatientCardTabs:FC<OutpatientCardTabsProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const tabPaneButtons = [{
    icon: <EditOutlined />, disabled: false, name: 'edit', id: 'editBtn', onClick: () => dispatch(setEditMode(true)),
  },
  {
    icon: <SaveOutlined />, disabled: false, name: 'save', id: 'saveBtn', onClick: () => dispatch(setEditMode(false)),
  },
  ];
  return (
    <TabPane
      entityName={outpatientCardTabsModel.entityName}
      items={outpatientCardTabsModel.items}
      buttons={tabPaneButtons}
    />
  );
};
