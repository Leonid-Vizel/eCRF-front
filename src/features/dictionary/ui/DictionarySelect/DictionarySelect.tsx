import { DefaultOptionType } from 'antd/es/select';
import { RootState } from 'app/providers/StoreProvider';
import { Dictionary, getDictionarySelector, isLoadingSelector } from 'entities/dictionary';
import { getDictionary } from 'features/dictionary/model/getDictionary';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { Select } from 'shared/ui/Select/Select';
import { Spinner } from 'shared/ui/Spinner';
import get from 'lodash/get';
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
  disabled?: boolean
}

export const DictionarySelect = (props:DictionarySelectProps) => {
  const {
    dictionaryName, onChange, placeholder = 'Выберите значение', name,
    className, entities, formListName, disabled,
  } = props;
  const dispatch = useAppDispatch();
  const { formEntityName, entityName, rootEntityName } = entities;

  const isLoading = useAppSelector(isLoadingSelector(dictionaryName));
  const data = useAppSelector(getDictionarySelector(dictionaryName));
  const options:DefaultOptionType[] = data && data.map((option) => ({ key: option.value, ...option }));
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
      <Select
        defaultValue={defaultOption}
        popupMatchSelectWidth={false}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        disabled={disabled}
      />
    </Spinner>
  );
};
