import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import DateInput from '../../../../components/document/inputs/dateInput/DateInput';

export const analysisPhysical = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <DateInput
        fieldName={PhysicalExamData.AnalysisDate}
        inputValue={formData[PhysicalExamData.AnalysisDate]}
        setFormData={setFormData}
      />
    ),
  },
  {
    input: (
      <SelectInput
        fieldName={PhysicalExamData.Analysis}
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
        selectValue={formData[PhysicalExamData.Analysis]}
        setFormData={setFormData}
      />
    ),
  },
];
