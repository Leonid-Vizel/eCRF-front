import { FC, useEffect } from 'react';
import { Button } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { getFormData } from 'features/stationaryCard/model/slice/stationaryCard.slice';
import { getStationaryCardSecondDay } from 'features/stationaryCard/model/lib/getStationaryCardSecondDayAction';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getCardId } from 'features/stationaryCard/model/selectors/stationaryCardSelectors';
import { stationaryCardSecondDayForm } from 'features/stationaryCard/model/stationaryCardSecondDay/stationaryCardSecondDay';
import { modifyStationaryCardSecondDay } from 'features/stationaryCard/model/lib/modifyStationaryCardSecondDayAction';
import { FormConstructor } from '../../../form/ui/FormConstructor/FormConstructor';

interface StationaryCardSecondDayProps {
  className?: string;
}

export const StationaryCardSecondDay:FC<StationaryCardSecondDayProps> = (props) => {
  const { className } = props;
  const cardId = useAppSelector(getCardId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cardId) {
      dispatch(getStationaryCardSecondDay({ cardId }));
    }
  }, [cardId, dispatch]);

  const onFinish = (values) => {
    dispatch(getFormData(
      {
        formEntityName: stationaryCardSecondDayForm.formEntityName,
        data: { stationaryCardId: cardId, ...values },
      },
    ));
    dispatch(modifyStationaryCardSecondDay());
  };

  return (
    <div className={`${className}`}>
      <FormConstructor
        formCard={stationaryCardSecondDayForm}
        onFinish={onFinish}
        footer={<Button type="primary" size="large" htmlType="submit">Соxранить</Button>}
      />
    </div>
  );
};
