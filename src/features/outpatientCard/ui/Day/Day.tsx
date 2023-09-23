import { FC, useEffect } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getCardId } from 'features/outpatientCard/model/selectors/outpatientCardSelectors';
import { getFormData } from 'features/outpatientCard/model/slice/outpatientCard.slice';
import { getDay } from 'features/outpatientCard/model/lib/getDayAction';
import { modifyDay } from 'features/outpatientCard/model/lib/modifyDayAction';
import { dayForm } from 'features/outpatientCard/model/day/day';

interface DayProps {
  day:number
}

export const Day: FC<DayProps> = ({ day }) => {
  const dispatch = useAppDispatch();
  const cardId = useAppSelector(getCardId);

  useEffect(() => {
    dispatch(getDay({ cardId, day }));
  }, [dispatch, cardId, day]);

  return (
    <div>
      <FormConstructor
        formCard={{ formEntityName: `dayForm${day}`, ...dayForm }}
        onFinish={(values) => {
          dispatch(
            getFormData({
              formEntityName: `${dayForm.formEntityName}${day}`,
              data: { cardId, ...values },
            }),
          );
          dispatch(modifyDay(day));
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
