import { FC, useEffect } from 'react';
import { FileCard, FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getCardId, getOutpatientCardFormData } from 'features/outpatientCard/model/selectors/outpatientCardSelectors';
import { getPhysicalExamination } from 'features/outpatientCard/model/lib/getPhysicalExaminationAction';
import { physicalExaminationForm } from 'features/outpatientCard/model/physicalExamination/physicalExamination';
import { getFormData } from 'features/outpatientCard/model/slice/outpatientCard.slice';
import { modifyPhysicalExamination } from 'features/outpatientCard/model/lib/modifyPhysicalExaminationAction';

interface PhysicalExaminationProps {
  // className?: string;
}

export const PhysicalExamination: FC<PhysicalExaminationProps> = () => {
  const dispatch = useAppDispatch();
  const cardId = useAppSelector(getCardId);
  const formData = useAppSelector(getOutpatientCardFormData(physicalExaminationForm.formEntityName));

  useEffect(() => {
    dispatch(getPhysicalExamination({ cardId }));
  }, [dispatch, cardId]);

  return (
    <div>
      <FormConstructor
        formCard={physicalExaminationForm}
        onFinish={(values) => {
          dispatch(
            getFormData({
              formEntityName: physicalExaminationForm.formEntityName,
              data: { cardId, ...values },
            }),
          );
          dispatch(modifyPhysicalExamination());
        }}
        footer={(
          <>
            <FileCard
              cardTitle="Файл ЭКГ"
              uploadAction={`/api/net/PhysicalExam/${cardId}/Files/ECG/Update`}
              download={formData?.ecgFileLoaded}
              downloadAction={`/api/net/PhysicalExam/${cardId}/Files/ECG/Download`}
              accept=".pdf"
            />
            <Button type="primary" size="large" htmlType="submit">
              Соxранить
            </Button>
          </>
        )}
      />
    </div>
  );
};
