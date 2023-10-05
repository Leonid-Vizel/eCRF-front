import { TabPaneModel } from 'widgets/TabPane';
import { StationaryCardSecondDay } from 'features/stationaryCard/ui/StationaryCardSecondDay/StationaryCardSecondDay';
import { StationaryCardFirstDay } from 'features/stationaryCard/ui/StationaryCardFirstDay/StationaryCardFirstDay';
import { StationaryCardMainInfo } from '../../ui/StationaryCardMainInfo/StationaryCardMainInfo';

export const STATIONARY_CARD = 'stationaryCard';

export const STATIONARY_CARD_MAIN_INFO = 'stationaryMainInfoForm';
export const STATIONARY_CARD_FIRST_DAY = 'stationaryCardFirstDayForm';
export const STATIONARY_CARD_SECOND_DAY = 'stationaryCardSecondDayForm';

export const stationaryCardTabsModel: TabPaneModel = {
  entityName: STATIONARY_CARD,
  items: [
    {
      key: STATIONARY_CARD_MAIN_INFO,
      label: 'Основная информация',
      children: <StationaryCardMainInfo />,
    },
    {
      key: STATIONARY_CARD_FIRST_DAY,
      label: 'День -1',
      children: <StationaryCardFirstDay />,
    },
    {
      key: STATIONARY_CARD_SECOND_DAY,
      label: 'День 1-2',
      children: <StationaryCardSecondDay />,
    },
  ],
};
