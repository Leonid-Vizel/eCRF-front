import { DefaultOptionType } from 'antd/es/select';
import { Dictionary, getDictionarySelector, isLoadingSelector } from 'entities/dictionary';
import { getExternalDictionary } from 'features/dictionary/model/getDictionary';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { Select } from 'shared/ui/Select/Select';
import { Spinner } from 'shared/ui/Spinner';

interface DictionarySelectProps {
  dictionaryName:Dictionary
  onChange?:(value)=>void
  placeholder?: string
  className?: string
}

export const DictionarySelect = (props:DictionarySelectProps) => {
  const {
    dictionaryName, onChange, placeholder = 'Выберите значение', className,
  } = props;
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector(dictionaryName));
  const data = useAppSelector(getDictionarySelector(dictionaryName));
  const options:DefaultOptionType[] = data && data.map((option) => ({ key: option.value, ...option }));

  useEffect(() => {
    if (!data) {
      dispatch(getExternalDictionary({ dictionaryName }));
    }
  }, [dictionaryName, dispatch, data]);

  return (
    <Spinner spinning={isLoading}>
      <Select
        popupMatchSelectWidth={false}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </Spinner>
  );
};
