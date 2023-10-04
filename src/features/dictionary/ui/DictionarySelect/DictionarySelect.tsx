import { DefaultOptionType } from 'antd/es/select';
import { RootState } from 'app/providers/StoreProvider';
import { Dictionary, getDictionarySelector, isLoadingSelector } from 'entities/dictionary';
import { getDictionary } from 'features/dictionary/model/getDictionary';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { Select } from 'shared/ui/Select/Select';
import { Spinner } from 'shared/ui/Spinner';
import { getDefaultDictionaryOption } from '../../../form/model/selectors/formSelectors';

interface DictionarySelectProps {
  dictionaryName:Dictionary
  onChange?:(value)=>void
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

export const DictionarySelect = (props:DictionarySelectProps) => {
  const {
    dictionaryName, onChange, placeholder = 'Выберите значение', name,
    className, entities, formListName,
  } = props;
  const dispatch = useAppDispatch();
  const { formEntityName, entityName, rootEntityName } = entities;

  const isLoading = useAppSelector(isLoadingSelector(dictionaryName));
  const data = useAppSelector(getDictionarySelector(dictionaryName));
  const options:DefaultOptionType[] = data && data.map((option) => ({ key: option.value, ...option }));
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
      <Select
        defaultValue={defaultOption}
        popupMatchSelectWidth={false}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </Spinner>
  );
};
