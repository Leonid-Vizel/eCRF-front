import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getCardId } from 'features/outpatientCard/model/selectors/outpatientCardSelectors';
import { getFormData } from 'features/outpatientCard/model/slice/outpatientCard.slice';
import { getCriteria } from 'features/outpatientCard/model/lib/getCriteriaAction';
import { criteriaForm } from 'features/outpatientCard/model/criteria/criteria';
import { modifyCriteria } from 'features/outpatientCard/model/lib/modifyCriteriaAction';

interface CriteriaProps {
  // className?: string;
}

export const Criteria: FC<CriteriaProps> = () => {
  const dispatch = useAppDispatch();
  const cardId = useAppSelector(getCardId);

  useEffect(() => {
    dispatch(getCriteria({ cardId }));
  }, [dispatch, cardId]);

  return (
    <div>
      <FormConstructor
        formCard={criteriaForm}
        onFinish={(values) => {
          dispatch(
            getFormData({
              formEntityName: criteriaForm.formEntityName,
              data: { cardId, ...values },
            }),
          );
          dispatch(modifyCriteria());
        }}
        footer={(
          <Button type="primary" size="large" htmlType="submit">
            Соxранить
          </Button>
        )}
      />
    </div>
  );
};
