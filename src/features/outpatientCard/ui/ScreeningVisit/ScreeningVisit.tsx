import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { screeningVisitCards, screeningVisitTable } from 'features/outpatientCard/model/screeningVisit/screeningVisit';
import { getFormCards } from 'shared/lib/getFormCards/getFormCards';
import { FormSkeleton } from 'widgets/Skeleton';
import { getScreeningVisit } from 'features/outpatientCard/model/screeningVisit/getScreeningVisit';
import { setForm } from 'features/outpatientCard/model/slice/outpatientCard.slice';

interface ScreeningVisitProps {
  className?: string;
}

export const ScreeningVisit: FC<ScreeningVisitProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const formData = useAppSelector(
    (state) => state.outpatientCards.outpatientCard.screeningVisitSchema,
  );
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
    dispatch(getScreeningVisit({ cardId: '4' }));
  }, [dispatch]);

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
          onFinish={(values) => console.log(values)}
          footer={<Button htmlType="submit">submit</Button>}
        />
      ) : (
        <FormSkeleton />
      )}
    </div>
  );
};
