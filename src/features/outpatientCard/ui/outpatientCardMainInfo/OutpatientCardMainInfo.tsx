import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import {
  outPatientCardMainInfoForm,
} from 'features/outpatientCard/model/outpatientCardMainInfo/outpatientCardMainInfo';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useParams } from 'react-router-dom';
import { getOutpatientCard } from 'features/outpatientCard/model/lib/getOutpatientCardAction';
import { editOutpatientCard } from 'features/outpatientCard/model/lib/editOutpatientCardAction';
import { getFormData } from '../../model/slice/outpatientCard.slice';
import { createNewOutpatientCard } from '../../model/lib/createOutpatientCardAction';

interface OutpatientCardMainInfoProps {
  className?: string;
}

export const OutpatientCardMainInfo:FC<OutpatientCardMainInfoProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const isEditing = Number.isInteger(+id);

  const onFinish = (data) => {
    dispatch(getFormData(
      { formEntityName: outPatientCardMainInfoForm.formEntityName, data },
    ));
    if (isEditing) {
      dispatch(editOutpatientCard());
    } else {
      dispatch(createNewOutpatientCard());
    }
  };

  useEffect(() => {
    if (id && isEditing) {
      dispatch(getOutpatientCard({ id }));
    }
  }, [id, dispatch, isEditing]);

  return (
    <div className={` ${className}`}>
      <FormConstructor
        formCard={outPatientCardMainInfoForm}
        onFinish={onFinish}
        footer={<Button type="primary" size="large" htmlType="submit">Соxранить</Button>}
      />
    </div>
  );
};
