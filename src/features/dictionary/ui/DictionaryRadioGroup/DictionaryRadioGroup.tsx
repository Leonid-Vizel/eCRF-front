import { CheckboxOptionType, RadioChangeEvent } from 'antd';
import { RadioGroupOptionType } from 'antd/es/radio';
import { Dictionary, getDictionarySelector, isLoadingSelector } from 'entities/dictionary';
import { getDictionary } from 'features/dictionary/model/getDictionary';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { RadioGroup } from 'shared/ui/RadioGroup/RadioGroup';
import { Spinner } from 'shared/ui/Spinner';

interface DictionaryRadioGroupProps {
  dictionaryName:Dictionary
  onChange?:(event:RadioChangeEvent)=>void
  optionType?:RadioGroupOptionType
  className?: string
}

export const DictionaryRadioGroup = (props:DictionaryRadioGroupProps) => {
  const {
    dictionaryName, onChange, optionType, className,
  } = props;
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector(dictionaryName));
  const data = useAppSelector(getDictionarySelector(dictionaryName));
  const options:CheckboxOptionType[] = data && data.map((option) => ({ key: option.value, ...option }));

  useEffect(() => {
    if (!data) {
      dispatch(getDictionary({ dictionaryName }));
    }
  }, [dictionaryName, dispatch, data]);

  return (
    <Spinner spinning={isLoading}>
      <RadioGroup
        options={options}
        onChange={onChange}
        optionType={optionType}
        className={className}
      />
    </Spinner>
  );
};
