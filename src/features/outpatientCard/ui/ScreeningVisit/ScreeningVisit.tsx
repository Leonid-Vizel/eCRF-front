import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { scrVisit } from 'features/outpatientCard/model/screeningVisit/screeningVisit';
import { getScreeningVisit } from 'features/outpatientCard/model/lib/getScreeningVisitAction';
import { getCardId } from 'features/outpatientCard/model/selectors/outpatientCardSelectors';

interface ScreeningVisitProps {
  // className?: string;
}

// const { className } = props;

// const formData = useAppSelector(
//   (state) => state.outpatientCards.outpatientCard.screeningVisitSchema,
// );

// const cards = formData
//   && formData.data
//   && getFormCards({
//     data: formData.data,
//     formCards: screeningVisitCards,
//     cardId: 'card',
//     dispatch,
//     formEntityName: 'screeningVisitForm',
//   });

// const screeningVisitForm = cards && {
//   rootEntityName: 'outpatientCards',
//   entityName: 'outpatientCard',
//   formEntityName: 'screeningVisitForm',
//   cards: [...cards, screeningVisitTable],
// };

// useEffect(() => {
//   if (formData) {
//     dispatch(setForm({
//       formEntityName: 'screeningVisitForm',
//       data: {
//         cardId: formData?.cardId,
//         table: formData?.table,
//       },
//     }));
//   }
// }, [formData, dispatch]);

// <div className={`${className}`}>
//   {screeningVisitForm ? (
//     <FormConstructor
//       formCard={screeningVisitForm}
//       onFinish={(values) => dispatch(modifyScreeningVisit({ cardId, ...values }))}
//       footer={<Button htmlType="submit">submit</Button>}
//     />
//   ) : (
//     <FormSkeleton />
//   )}
// </div>

export const ScreeningVisit: FC<ScreeningVisitProps> = () => {
  const dispatch = useAppDispatch();
  const cardId = useAppSelector(getCardId);
  useEffect(() => {
    dispatch(getScreeningVisit({ cardId }));
  }, [dispatch, cardId]);
  return (
    <div>
      <FormConstructor
        formCard={scrVisit}
        onFinish={(values) => window.console.log(values)}
        footer={<Button type="primary" size="large" htmlType="submit">Соxранить</Button>}
      />
    </div>
  );
};
