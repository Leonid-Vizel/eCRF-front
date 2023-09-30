import { FC, useEffect } from 'react';
import { Button } from 'shared/ui/Button';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { getStationaryCard } from 'features/stationaryCard/model/lib/getStationaryCardAction';
import { getFormData } from 'features/stationaryCard/model/slice/stationaryCard.slice';
import { modifyStationaryCard } from 'features/stationaryCard/model/lib/modifyStationaryCardAction';
import { stationaryMainInfoForm } from '../../model/stationaryCardMainInfo/stationaryCardMainInfo';
import { FormConstructor } from '../../../form/ui/FormConstructor/FormConstructor';

interface StationaryCardMainInfoProps {
  className?: string;
}

export const StationaryCardMainInfo:FC<StationaryCardMainInfoProps> = (props) => {
  const { className } = props;
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getStationaryCard({ cardId: +id }));
    }
  }, [id, dispatch]);

  const onFinish = (values) => {
    dispatch(getFormData({ formEntityName: stationaryMainInfoForm.formEntityName, data: { outpatientCardId: +id, ...values } }));
    dispatch(modifyStationaryCard());
  };

  return (
    <div className={`${className}`}>
      <FormConstructor
        formCard={stationaryMainInfoForm}
        onFinish={onFinish}
        footer={<Button type="primary" size="large" htmlType="submit">Соxранить</Button>}
      />
    </div>
  );
};
