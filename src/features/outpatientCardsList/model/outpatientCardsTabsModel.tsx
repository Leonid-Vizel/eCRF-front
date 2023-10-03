import { TabPaneModel } from 'widgets/TabPane';
import { OutpatientCardsTable } from '../ui/OutpatientCardsTable/OutpatientCardsTable';
import { CardsList } from './lib/getCardsList';
import { StationaryCardsTable } from '../ui/StationaryCardsTable/StationaryCardsTable';

export const outpatientCardsListTabsModel: TabPaneModel = {
  entityName: 'tabs',
  items: [{
    key: CardsList.OUTPATIENT_CARDS_LIST,
    label: 'Амбулаторные карты',
    children: <OutpatientCardsTable />,
  }, {
    key: CardsList.STATIONARY_CARDS_LIST,
    label: 'Стационарные карты',
    children: <StationaryCardsTable />,
  },
  ],
};
