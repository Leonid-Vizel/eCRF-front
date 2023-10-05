import { FC, useEffect } from 'react';
import { Button } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { getFormData } from 'features/stationaryCard/model/slice/stationaryCard.slice';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getCardId } from 'features/stationaryCard/model/selectors/stationaryCardSelectors';
import { stationaryCardFirstDayForm } from 'features/stationaryCard/model/stationaryCardFirstDay/stationaryCardFirstDay';
import { getStationaryCardFirstDay } from 'features/stationaryCard/model/lib/getStationaryCardFirstDayAction';
import { modifyStationaryCardFirstDay } from 'features/stationaryCard/model/lib/modifyStationaryCardFirstDayAction';
import { FormConstructor } from '../../../form/ui/FormConstructor/FormConstructor';

interface StationaryCardFirstDayProps {
  className?: string;
}

export const StationaryCardFirstDay:FC<StationaryCardFirstDayProps> = (props) => {
  const { className } = props;
  const cardId = useAppSelector(getCardId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cardId) {
      dispatch(getStationaryCardFirstDay({ cardId }));
    }
  }, [cardId, dispatch]);

  const onFinish = (values) => {
    dispatch(getFormData(
      {
        formEntityName: stationaryCardFirstDayForm.formEntityName,
        data: { stationaryCardId: cardId, ...values },
      },
    ));
    dispatch(modifyStationaryCardFirstDay());
  };

  return (
    <div className={`${className}`}>
      <FormConstructor
        formCard={stationaryCardFirstDayForm}
        onFinish={onFinish}
        footer={<Button type="primary" size="large" htmlType="submit">Соxранить</Button>}
      />
    </div>
  );
};
