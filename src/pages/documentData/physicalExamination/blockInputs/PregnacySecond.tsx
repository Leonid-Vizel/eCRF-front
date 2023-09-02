import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';

export const pregnacySecond = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <SelectInput
        fieldName={PhysicalExamData.PregnancyTestResult}
        options={[
          {
            name: 'Положительный',
            value: 0,
          },
          {
            name: 'Отрицательный',
            value: 1,
          },
          {
            name: 'Неприменимо',
            value: 2,
          },
        ]}
        selectValue={formData[PhysicalExamData.PregnancyTestResult]}
        setFormData={setFormData}
      />
    ),
  },
];
