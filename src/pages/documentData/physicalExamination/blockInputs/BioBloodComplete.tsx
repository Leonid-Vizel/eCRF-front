import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import Textarea from '../../../../components/document/inputs/textarea/Textarea';

export const BioBloodComplete = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.BioBloodComplete}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[PhysicalExamData.BioBloodComplete]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.BioBloodIndicator}
        options={[
          {
            name: 'Норма',
            value: 1,
          },
          {
            name: 'Отклонение',
            value: 0,
          },
        ]}
        selectValue={formData[PhysicalExamData.BioBloodIndicator]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.BioBloodDeviation}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[PhysicalExamData.BioBloodDeviation]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        fieldName={PhysicalExamData.BioBloodComment}
        inputValue={formData[PhysicalExamData.BioBloodComment]}
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];
