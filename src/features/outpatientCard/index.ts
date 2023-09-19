export { OUTAPTIENT_CARD_MAIN_INFO } from './model/outpatientCardTabsModel/outpatientCardTabsModel';

export { cardTabPaneSelector } from './model/selectors/outpatientCardSelectors';
export { OutpatientCardTabs } from './ui/OutpatientCardTabs/OutpatientCardTabs';
export {
  outpatientCardReducer, outpatientCardSlice, setEditMode, createNewCard, setTabName,
} from './model/slice/outpatientCard.slice';
export { OutpatientMainInfoForm } from './types/outpatientCardMainInfoTypes';
