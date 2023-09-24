import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { FormConstructor } from '../../../form/ui/FormConstructor/FormConstructor';
import { stationaryMainInfoForm } from '../../model/stationaryCardMainInfo/stationaryCardMainInfo';

interface StationaryCardMainInfoProps {
  className?: string;
}

export const StationaryCardMainInfo:FC<StationaryCardMainInfoProps> = (props) => {
  const { className } = props;
  return (
    <div className={`${className}`}>
      <FormConstructor
        formCard={stationaryMainInfoForm}
        onFinish={(value) => window.console.log(value)}
        footer={<Button type="primary" size="large" htmlType="submit">Соxранить</Button>}
      />
    </div>
  );
};
