import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import Textarea from '../../../../components/document/inputs/textarea/Textarea';

export const headNeckPhysical = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.HeadNeckComplete}
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
        selectValue={formData[PhysicalExamData.HeadNeckComplete]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.HeadNeckIndicator}
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
        selectValue={formData[PhysicalExamData.HeadNeckIndicator]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.HeadNeckDeviation}
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
        selectValue={formData[PhysicalExamData.HeadNeckDeviation]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        fieldName={PhysicalExamData.HeadNeckComment}
        inputValue={formData[PhysicalExamData.HeadNeckComment]}
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];
