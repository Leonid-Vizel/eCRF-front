import { Criteria } from 'features/outpatientCard/ui/Criteria/Criteria';
import { Day } from 'features/outpatientCard/ui/Day/Day';
import { LifeAnamnesis } from 'features/outpatientCard/ui/LifeAnamnesis/LifeAnamnesis';
import { PhysicalExamination } from 'features/outpatientCard/ui/PhysicalExamination/PhysicalExamination';
import { ScreeningVisit } from 'features/outpatientCard/ui/ScreeningVisit/ScreeningVisit';
import { OutpatientCardMainInfo } from 'features/outpatientCard/ui/outpatientCardMainInfo/OutpatientCardMainInfo';
import { SyphilisExamination } from 'features/outpatientCard/ui/syphilisExamination/SyphilisExamination';
import { TabPaneModel } from 'widgets/TabPane';

export const OUTAPTIENT_CARD = 'outpatientCard';

export const OUTAPTIENT_CARD_MAIN_INFO = 'outpatientMainInfoForm';
export const SYPHILIS_EXAMINATION = 'syphilisExaminationForm';
export const SCREENING_VISIT = 'screeningVisitForm';
export const LIFE_ANAMNESIS = 'lifeAnamnesisForm';
export const CRITERIA = 'criteria';
export const PHYSICAL_EXAMINATION = 'physicalExamination';
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
    children: <SyphilisExamination />,
  },
  {
    key: SCREENING_VISIT,
    label: 'Скрининговый визит',
    children: <ScreeningVisit />,
  },
  {
    key: LIFE_ANAMNESIS,
    label: 'Анамнез жизни',
    children: <LifeAnamnesis />,
  },
  {
    key: CRITERIA,
    label: 'Оценка критериев',
    children: <Criteria />,
  },
  {
    key: PHYSICAL_EXAMINATION,
    label: 'Физикальный осмотр',
    children: <PhysicalExamination />,
  },
  {
    key: VISIT_DAY_2,
    label: 'Визит 2',
    children: <Day day={2} />,
  },
  {
    key: VISIT_DAY_3,
    label: 'Визит 3',
    children: <Day day={3} />,
  },
  {
    key: VISIT_DAY_4,
    label: 'Визит 4',
    children: <Day day={4} />,
  }],
};
