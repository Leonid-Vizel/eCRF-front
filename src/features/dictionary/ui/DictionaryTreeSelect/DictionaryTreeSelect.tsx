import { useEffect } from 'react';
import { Dictionary, getDictionarySelector, isLoadingSelector } from 'entities/dictionary';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { Spinner } from 'shared/ui/Spinner';
import { TreeSelect } from 'shared/ui/TreeSelect/TreeSelect';

import { RootState } from 'app/providers/StoreProvider';
import { getDefaultDictionaryOption } from 'features/form/model/selectors/formSelectors';
import get from 'lodash/get';
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
  disabled: boolean
}

export const DictionaryTreeSelect = (props:DictionaryTreeSelectProps) => {
  const {
    dictionaryName, onChange, placeholder = 'Выберите значение', className, entities, formListName, name, disabled,
  } = props;
  const dispatch = useAppDispatch();
  const { formEntityName, entityName, rootEntityName } = entities;
  const isLoading = useAppSelector(isLoadingSelector(dictionaryName));
  const data = useAppSelector(getDictionarySelector(dictionaryName));
  const defaultOption = useAppSelector((state: RootState) => get(getDefaultDictionaryOption(state, {
    formEntityName, entityName, rootEntityName, formListName,
  }), name));

  useEffect(() => {
    if (dictionaryName && !data) {
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
        disabled={disabled}
      />
    </Spinner>
  );
};
