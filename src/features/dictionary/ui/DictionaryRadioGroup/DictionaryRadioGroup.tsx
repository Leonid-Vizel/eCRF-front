import { CheckboxOptionType, RadioChangeEvent } from 'antd';
import { RadioGroupOptionType } from 'antd/es/radio';
import { Dictionary, getDictionarySelector, isLoadingSelector } from 'entities/dictionary';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { RadioGroup } from 'shared/ui/RadioGroup/RadioGroup';
import { Spinner } from 'shared/ui/Spinner';
import { RootState } from 'app/providers/StoreProvider';
import { getDefaultDictionaryOption } from 'features/form/model/selectors/formSelectors';
import { getDictionary } from '../../model/getDictionary';

interface DictionaryRadioGroupProps {
  dictionaryName:Dictionary
  onChange?:(event:RadioChangeEvent)=>void
  optionType?:RadioGroupOptionType
  className?: string
  name: string | string[]
  entities: {
    rootEntityName: string;
    entityName: string;
    formEntityName: string;
  }
  formListName: string
}

export const DictionaryRadioGroup = (props:DictionaryRadioGroupProps) => {
  const {
    dictionaryName, onChange, optionType, className, name,
    entities, formListName,
  } = props;
  const { formEntityName, entityName, rootEntityName } = entities;
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector(dictionaryName));
  const data = useAppSelector(getDictionarySelector(dictionaryName));
  const options:CheckboxOptionType[] = data && data.map((option) => ({ key: option.value, ...option }));
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
      <RadioGroup
        defaultValue={defaultOption}
        options={options}
        onChange={onChange}
        optionType={optionType}
        className={className}
      />
    </Spinner>
  );
};
