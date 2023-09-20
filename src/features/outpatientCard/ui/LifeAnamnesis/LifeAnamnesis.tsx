import { FC } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { lifeAnamnesisForm } from 'features/outpatientCard/model/lifeAnamnesis/lifeAnamnesis';

interface LifeAnamnesisProps {
  className?: string;
}

export const LifeAnamnesis:FC<LifeAnamnesisProps> = (props) => {
  const { className } = props;

  return (
    <div className={`${className}`}>
      <FormConstructor
        formCard={lifeAnamnesisForm}
        onFinish={(values) => console.log(values)}
        footer={<Button htmlType="submit">submit</Button>}
      />
    </div>
  );
};
