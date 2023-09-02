import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import Textarea from '../../../../components/document/inputs/textarea/Textarea';

export const eyesEarsNose = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.EyesEarsNoseComplete}
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
        selectValue={formData[PhysicalExamData.EyesEarsNoseComplete]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.EyesEarsNoseIndicator}
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
        selectValue={formData[PhysicalExamData.EyesEarsNoseIndicator]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.EyesEarsNoseDeviation}
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
        selectValue={formData[PhysicalExamData.EyesEarsNoseDeviation]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        fieldName={PhysicalExamData.EyesEarsNoseComment}
        inputValue={formData[PhysicalExamData.EyesEarsNoseComment]}
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];
