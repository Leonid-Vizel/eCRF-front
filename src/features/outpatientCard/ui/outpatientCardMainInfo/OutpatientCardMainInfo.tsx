import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import {
  outPatientCardMainInfoForm,
} from 'features/outpatientCard/model/outpatientCardMainInfo/outpatientCardMainInfo';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import cls from './OutpatientCardMainInfo.module.scss';
import { getFormData } from '../../model/slice/outpatientCard.slice';
import { createNewOutpatientCard } from '../../model/lib/createOutpatientCardAction';

interface OutpatientCardMainInfoProps {
  className?: string;
}

export const OutpatientCardMainInfo:FC<OutpatientCardMainInfoProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  return (
    <div className={`${cls.OutpatientCardMainInfo} ${className}`}>
      <FormConstructor
        formCard={outPatientCardMainInfoForm}
        onFinish={(data) => {
          dispatch(getFormData(
            { formEntityName: outPatientCardMainInfoForm.formEntityName, data },
          ));
          dispatch(createNewOutpatientCard());
        }}
        footer={<Button htmlType="submit">sub,it</Button>}
      />
    </div>
  );
};
