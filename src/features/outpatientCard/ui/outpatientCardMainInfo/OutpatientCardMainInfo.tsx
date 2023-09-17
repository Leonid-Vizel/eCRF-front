import { FC } from 'react';
import { FormConstructor } from 'features/form';
import {
  outPatientCardMainInfoForm,
} from 'features/outpatientCard/model/outpatientCardMainInfo/outpatientCardMainInfo';
import { Button } from 'shared/ui/Button/Button';
import cls from './OutpatientCardMainInfo.module.scss';

interface OutpatientCardMainInfoProps {
  className?: string;
}

export const OutpatientCardMainInfo:FC<OutpatientCardMainInfoProps> = (props) => {
  const { className } = props;

  return (
    <div className={`${cls.OutpatientCardMainInfo} ${className}`}>
      <FormConstructor
        formCard={outPatientCardMainInfoForm}
        onFinish={(values) => console.log(values)}
        footer={<Button htmlType="submit">sub,it</Button>}
      />
    </div>
  );
};
