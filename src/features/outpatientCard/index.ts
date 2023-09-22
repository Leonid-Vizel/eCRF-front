export { OUTAPTIENT_CARD_MAIN_INFO } from './model/outpatientCardTabsModel/outpatientCardTabsModel';

export {
  cardTabPaneSelector,
  outpatientCardMainInfo,
  getProtocolId,
  getOutpatientCardFormData,
} from './model/selectors/outpatientCardSelectors';
export { OutpatientCardTabs } from './ui/OutpatientCardTabs/OutpatientCardTabs';
export {
  outpatientCardReducer,
  outpatientCardSlice,
  setEditMode,
  initOutpatientMainInfo,
  setTabName,
  setFormData,
  setForm,
  getFormData,
} from './model/slice/outpatientCard.slice';
export { OutpatientMainInfoForm } from './types/outpatientCardMainInfoTypes';