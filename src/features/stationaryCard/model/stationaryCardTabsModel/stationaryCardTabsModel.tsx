import { TabPaneModel } from 'widgets/TabPane';

export const STATIONARY_CARD = 'stationaryCard';

export const STATIONARY_CARD_MAIN_INFO = 'stationaryMainInfoForm';
export const SYPHILIS_EXAMINATION = 'syphilisExaminationForm';

export const stationaryCardTabsModel: TabPaneModel = {
  entityName: STATIONARY_CARD,
  items: [{
    key: STATIONARY_CARD_MAIN_INFO,
    label: 'Основная информация',
    children: <div>Основная информация</div>,
  },
  {
    key: SYPHILIS_EXAMINATION,
    label: 'Обследование на сифилис',
    children: <div>Обследование на сифилис</div>,
  },
  ],
};
