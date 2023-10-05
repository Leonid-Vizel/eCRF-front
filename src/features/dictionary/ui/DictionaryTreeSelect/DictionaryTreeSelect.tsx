import { useEffect } from 'react';
import { Dictionary, getDictionarySelector, isLoadingSelector } from 'entities/dictionary';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { Spinner } from 'shared/ui/Spinner';
import { TreeSelect } from 'shared/ui/TreeSelect/TreeSelect';

import { RootState } from 'app/providers/StoreProvider';
import { getDefaultDictionaryOption } from 'features/form/model/selectors/formSelectors';
import { getDictionary } from '../../model/getDictionary';

interface DictionaryTreeSelectProps {
  dictionaryName:Dictionary
  onChange?:(value:unknown)=>void
  placeholder?: string
  className?: string
  name: string | string[]
  entities: {
    rootEntityName: string;
    entityName: string;
    formEntityName: string;
  }
  formListName: string
}

export const DictionaryTreeSelect = (props:DictionaryTreeSelectProps) => {
  const {
    dictionaryName, onChange, placeholder = 'Выберите значение', className, entities, formListName, name,
  } = props;
  const dispatch = useAppDispatch();
  const { formEntityName, entityName, rootEntityName } = entities;
  const isLoading = useAppSelector(isLoadingSelector(dictionaryName));
  const data = useAppSelector(getDictionarySelector(dictionaryName));
  const defaultOption = useAppSelector((state: RootState) => getDefaultDictionaryOption(state, {
    formEntityName, entityName, rootEntityName, formListName,
  })?.[name[0]]?.[name[1]]);

  useEffect(() => {
    if (!data) {
      dispatch(getDictionary(dictionaryName));
    }
  }, [dictionaryName, dispatch, data]);

  return (
    <Spinner spinning={isLoading}>
      <TreeSelect
        placeholder={placeholder}
        defaultValue={defaultOption}
        popupMatchSelectWidth={false}
        treeData={data}
        onChange={onChange}
        className={className}
      />
    </Spinner>
  );
};
