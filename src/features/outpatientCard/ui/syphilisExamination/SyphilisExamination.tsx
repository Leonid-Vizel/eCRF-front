import { FC } from 'react';
import { FormConstructor } from 'features/form';
import { Button } from 'shared/ui/Button/Button';
import { syphilisExaminationForm } from 'features/outpatientCard/model/syphilisExamination/syphilisExamination';

interface SyphilisExaminationProps {
  className?: string;
}

export const SyphilisExamination:FC<SyphilisExaminationProps> = (props) => {
  const { className } = props;

  return (
    <div className={`${className}`}>
      <FormConstructor
        formCard={syphilisExaminationForm}
        onFinish={(values) => console.log(values)}
        footer={<Button htmlType="submit">submit</Button>}
      />
    </div>
  );
};
