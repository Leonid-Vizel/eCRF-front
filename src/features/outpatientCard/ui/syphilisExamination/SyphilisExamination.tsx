import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { syphilisExaminationForm } from 'features/outpatientCard/model/syphilisExamination/syphilisExamination';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getCardId } from 'features/outpatientCard/model/selectors/outpatientCardSelectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { modifySyphilisExamination } from 'features/outpatientCard/model/lib/modifySyphilisExaminationAction';
import { getSyphilisExamination } from 'features/outpatientCard/model/lib/getSyphilisExaminationAction';
import { getFormData } from 'features/outpatientCard/model/slice/outpatientCard.slice';

interface SyphilisExaminationProps {
  className?: string;
}

export const SyphilisExamination:FC<SyphilisExaminationProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const cardId = useAppSelector(getCardId);

  useEffect(() => {
    if (cardId) {
      dispatch(getSyphilisExamination({ id: cardId }));
    }
  }, [cardId, dispatch]);

  return (
    <div className={`${className}`}>
      <FormConstructor
        formCard={syphilisExaminationForm}
        onFinish={(values) => {
          dispatch(getFormData(
            { formEntityName: syphilisExaminationForm.formEntityName, data: { cardId, ...values } },
          ));
          dispatch(modifySyphilisExamination());
        }}
        footer={<Button htmlType="submit">submit</Button>}
      />
    </div>
  );
};
