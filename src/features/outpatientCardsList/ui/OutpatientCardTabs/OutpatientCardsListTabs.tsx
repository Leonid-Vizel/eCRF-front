import { PlusOutlined } from '@ant-design/icons';
import { FC, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { TabPane, TabPaneButtons } from 'widgets/TabPane';
import { CardsList, getCardsList } from '../../model/lib/getCardsList';
import { initOutpatientMainInfo, setOutpatientCardTabName } from '../../../outpatientCard/model/slice/outpatientCard.slice';
import { outpatientCardsListTabsModel } from '../../model/outpatientCardsTabsModel';
import { OUTAPTIENT_CARD_MAIN_INFO } from '../../../outpatientCard/model/outpatientCardTabsModel/outpatientCardTabsModel';

interface OutpatientCardTabsProps {
//   className?: string;
}

export const OutpatientCardsListTabs:FC<OutpatientCardTabsProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [tab, setTab] = useState(CardsList.OUTPATIENT_CARDS_LIST);

  const onClick = useCallback(() => {
    navigate('/outpatientCards/card/create');
    dispatch(initOutpatientMainInfo(id));
    dispatch(setOutpatientCardTabName(OUTAPTIENT_CARD_MAIN_INFO));
  }, [id, navigate]);

  const onTabPaneChange = useCallback(
    (key: string) => {
      setTab(key as CardsList);
      dispatch(getCardsList({ entity: key as CardsList, id }));
    },
    [dispatch],
  );

  const tabPaneButtons: TabPaneButtons[] = [{
    icon: <PlusOutlined />,
    title: 'Создать амбулаторную карту',
    disabled: false,
    name: 'createOutpatientCard',
    id: 'editBtn',
    type: 'primary',
    onClick: () => onClick(),
  },
  ];

  return (
    <TabPane
      entityName={outpatientCardsListTabsModel.entityName}
      items={outpatientCardsListTabsModel.items}
      buttons={tab === CardsList.OUTPATIENT_CARDS_LIST ? tabPaneButtons : null}
      onChange={onTabPaneChange}
    />
  );
};
