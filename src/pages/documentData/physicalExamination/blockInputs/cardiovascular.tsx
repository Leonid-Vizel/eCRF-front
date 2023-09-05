import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import Textarea from '../../../../components/document/inputs/textarea/Textarea';

export const cardiovascular = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: 'Выполнено',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.CardiovascularComplete}
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
        selectValue={formData[PhysicalExamData.CardiovascularComplete]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Показатели',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.CardiovascularIndicator}
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
        selectValue={formData[PhysicalExamData.CardiovascularIndicator]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Отклонения',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.CardiovascularDeviation}
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
        selectValue={formData[PhysicalExamData.CardiovascularDeviation]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Комментарий',
    input: (
      <Textarea
        fieldName={PhysicalExamData.CardiovascularComment}
        inputValue={formData[PhysicalExamData.CardiovascularComment]}
        setFormData={setFormData}
        width="300px"
      />
    ),
  },
];
