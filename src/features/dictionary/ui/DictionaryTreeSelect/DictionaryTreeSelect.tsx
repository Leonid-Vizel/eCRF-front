import { useEffect } from 'react';
import { Dictionary, getDictionarySelector, isLoadingSelector } from 'entities/dictionary';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { Spinner } from 'shared/ui/Spinner';
import { TreeSelect } from 'shared/ui/TreeSelect/TreeSelect';

import { getDictionary } from '../../model/getDictionary';

interface DictionaryTreeSelectProps {
  dictionaryName:Dictionary
  onChange?:(value:unknown)=>void
  className?: string
}

export const DictionaryTreeSelect = (props:DictionaryTreeSelectProps) => {
  const {
    dictionaryName, onChange, className,
  } = props;
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector(dictionaryName));
  const data = useAppSelector(getDictionarySelector(dictionaryName));

  useEffect(() => {
    if (!data) {
      dispatch(getDictionary(dictionaryName));
    }
  }, [dictionaryName, dispatch, data]);

  return (
    <Spinner spinning={isLoading}>
      <TreeSelect
        treeData={data}
        onChange={onChange}
        className={className}
      />
    </Spinner>
  );
};
