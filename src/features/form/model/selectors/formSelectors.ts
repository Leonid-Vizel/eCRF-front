import { RootState } from 'app/providers/StoreProvider';

const getRootState = (state: RootState) => state;
export const getDefaultDictionaryOption = (state, {
  rootEntityName, entityName, formEntityName, formListName,
}) => getRootState(state)?.[rootEntityName]
  ?.[entityName]
  ?.[formEntityName]
  ?.[formListName];
