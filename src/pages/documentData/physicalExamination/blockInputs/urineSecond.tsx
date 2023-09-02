import { PhysicalExam } from '../../../../utils/types/documentType';
import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';

export const urineSecond = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <SelectInput
        fieldName={PhysicalExamData.UrineAnalysisResult}
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
        selectValue={formData[PhysicalExamData.UrineAnalysisResult]}
        setFormData={setFormData}
      />
    ),
  },
];
