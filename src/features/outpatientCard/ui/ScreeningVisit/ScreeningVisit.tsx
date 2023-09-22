import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { screeningVisitCards, screeningVisitTable } from 'features/outpatientCard/model/screeningVisit/screeningVisit';
import { getFormCards } from 'shared/lib/getFormCards/getFormCards';
import { FormSkeleton } from 'widgets/Skeleton';
import { getScreeningVisit } from 'features/outpatientCard/model/lib/getScreeningVisitAction';
import { getFormData, setForm } from 'features/outpatientCard/model/slice/outpatientCard.slice';
import { getCardId, getOutpatientCardFormData } from 'features/outpatientCard/model/selectors/outpatientCardSelectors';
import { modifyScreeningVisit } from 'features/outpatientCard/model/lib/modifyScreeningVisitAction';

interface ScreeningVisitProps {
  className?: string;
}

export const ScreeningVisit: FC<ScreeningVisitProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const formData = useAppSelector(getOutpatientCardFormData('screeningVisitSchema'));
  const cardId = useAppSelector(getCardId);
  const cards = formData
    && formData.data
    && getFormCards({
      data: formData.data,
      formCards: screeningVisitCards,
      cardId: 'card',
      dispatch,
      formEntityName: 'screeningVisitForm',
    });

  const screeningVisitForm = cards && {
    rootEntityName: 'outpatientCards',
    entityName: 'outpatientCard',
    formEntityName: 'screeningVisitForm',
    cards: [...cards, screeningVisitTable],
  };
  useEffect(() => {
    dispatch(getScreeningVisit({ cardId }));
  }, [dispatch, cardId]);

  useEffect(() => {
    if (formData) {
      dispatch(setForm({
        formEntityName: 'screeningVisitForm',
        data: {
          cardId: formData?.cardId,
          table: formData?.table,
        },
      }));
    }
  }, [formData, dispatch]);

  return (
    <div className={`${className}`}>
      {screeningVisitForm ? (
        <FormConstructor
          formCard={screeningVisitForm}
          onFinish={(values) => {
            dispatch(getFormData(
              { formEntityName: screeningVisitForm.formEntityName, data: { cardId, ...values } },
            ));
            dispatch(modifyScreeningVisit());
          }}
          footer={<Button htmlType="submit">submit</Button>}
        />
      ) : (
        <FormSkeleton />
      )}
    </div>
  );
};
