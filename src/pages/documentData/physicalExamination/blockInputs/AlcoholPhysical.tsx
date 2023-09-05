import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';
import { NotDoublePattern, NotNumberPattern } from '../../../../utils/consts';

export const alcoholPhysical = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <DefaultInput
        fieldName={PhysicalExamData.AlcoholTestPromiles}
        setFormData={setFormData}
        inputValue={formData[PhysicalExamData.AlcoholTestPromiles]}
        exclusionPattern={NotDoublePattern}
        placeholder="Промилей"
      />
    ),
  },
];
