import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { scrVisit } from 'features/outpatientCard/model/screeningVisit/screeningVisit';
import { getScreeningVisit } from 'features/outpatientCard/model/lib/getScreeningVisitAction';
import { getCardId } from 'features/outpatientCard/model/selectors/outpatientCardSelectors';
import { modifyScreeningVisit } from 'features/outpatientCard/model/lib/modifyScreeningVisitAction';
import { getFormData } from 'features/outpatientCard/model/slice/outpatientCard.slice';

interface ScreeningVisitProps {
  // className?: string;
}

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
        onFinish={(values) => {
          dispatch(getFormData(
            { formEntityName: scrVisit.formEntityName, data: { cardId, ...values } },
          ));
          dispatch(modifyScreeningVisit());
        }}
        footer={<Button type="primary" size="large" htmlType="submit">Соxранить</Button>}
      />

    </div>
  );
};
