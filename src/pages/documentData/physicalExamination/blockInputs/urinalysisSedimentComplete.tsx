import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import Textarea from '../../../../components/document/inputs/textarea/Textarea';

export const urinalysisSedimentComplete = (
  setFormData,
  formData: PhysicalExam,
) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.UrinalysisSedimentComplete}
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
        selectValue={formData[PhysicalExamData.UrinalysisSedimentComplete]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.UrinalysisSedimentIndicator}
        options={[
          {
            name: 'Норма',
            value: 0,
          },
          {
            name: 'Отклонение',
            value: 1,
          },
        ]}
        selectValue={formData[PhysicalExamData.UrinalysisSedimentIndicator]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.UrinalysisSedimentDeviation}
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
        selectValue={formData[PhysicalExamData.UrinalysisSedimentDeviation]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        fieldName={PhysicalExamData.UrinalysisSedimentComment}
        inputValue={formData[PhysicalExamData.UrinalysisSedimentComment]}
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];
