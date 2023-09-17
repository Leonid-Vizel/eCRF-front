import { OutpatientCardMainInfo } from 'features/outpatientCard/ui/outpatientCardMainInfo/OutpatientCardMainInfo';
import { TabPaneModel } from 'widgets/TabPane';

export const OUTAPTIENT_CARD = 'outpatientCard';

export const OUTAPTIENT_CARD_MAIN_INFO = 'outaptientCardMainInfo';
export const SYPHILIS_EXAMINATION = 'syphilisExamination';
export const SCREENING_VISIT = 'screeningVisit';
export const LIFE_ANAMNESIS = 'lifeAnamnesis';
export const VISIT_DAY_2 = 'visitDay2';
export const VISIT_DAY_3 = 'visitDay3';
export const VISIT_DAY_4 = 'visitDay4';

export const outpatientCardTabsModel: TabPaneModel = {
  entityName: OUTAPTIENT_CARD,
  items: [{
    key: OUTAPTIENT_CARD_MAIN_INFO,
    label: 'Основная информация',
    children: <OutpatientCardMainInfo />,
  },
  {
    key: SYPHILIS_EXAMINATION,
    label: 'Обследование на сифилис',
    children: <div>обследование на сифилис</div>,
  },
  {
    key: SCREENING_VISIT,
    label: 'Скрининговый визит',
    children: <div>Скрининговый визит</div>,
  },
  {
    key: LIFE_ANAMNESIS,
    label: 'Анамнез жизни',
    children: <div>Анамнез жизни</div>,
  },
  {
    key: VISIT_DAY_2,
    label: 'Визит 2',
    children: <div>Визит 2</div>,
  },
  {
    key: VISIT_DAY_3,
    label: 'Визит 3',
    children: <div>Визит 3</div>,
  },
  {
    key: VISIT_DAY_4,
    label: 'Визит 4',
    children: <div>Визит 4</div>,
  }],
};
