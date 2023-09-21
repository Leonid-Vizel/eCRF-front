import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { lifeAnamnesisForm } from 'features/outpatientCard/model/lifeAnamnesis/lifeAnamnesis';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getCardId } from 'features/outpatientCard/model/selectors/outpatientCardSelectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { getLifeAnamnesis } from 'features/outpatientCard/model/lib/getLifeAnamnesisAction';
import { modifyLifeAnamnesis } from 'features/outpatientCard/model/lib/modifyLifeAnamnesisAction';

interface LifeAnamnesisProps {
  className?: string;
}

export const LifeAnamnesis:FC<LifeAnamnesisProps> = (props) => {
  const { className } = props;
  const cardId = useAppSelector(getCardId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cardId) {
      dispatch(getLifeAnamnesis({ cardId }));
    }
  }, [cardId, dispatch]);

  return (
    <div className={`${className}`}>
      <FormConstructor
        formCard={lifeAnamnesisForm}
        onFinish={(values) => dispatch(modifyLifeAnamnesis({ cardId, ...values }))}
        footer={<Button htmlType="submit">submit</Button>}
      />
    </div>
  );
};
