import { TabPaneModel } from 'widgets/TabPane';
import { StationaryCardMainInfo } from '../../ui/StationaryCardMainInfo/StationaryCardMainInfo';

export const STATIONARY_CARD = 'stationaryCard';

export const STATIONARY_CARD_MAIN_INFO = 'stationaryMainInfoForm';

export const stationaryCardTabsModel: TabPaneModel = {
  entityName: STATIONARY_CARD,
  items: [{
    key: STATIONARY_CARD_MAIN_INFO,
    label: 'Основная информация',
    children: <StationaryCardMainInfo />,
  },
  ],
};
