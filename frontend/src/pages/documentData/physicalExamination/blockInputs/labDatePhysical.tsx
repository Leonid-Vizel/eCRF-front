import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";
import DateInput from "../../../../components/document/inputs/dateInput/DateInput";

export const labDatePhysical = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <DateInput
        fieldName={PhysicalExamData.LabDate}
        inputValue={formData[PhysicalExamData.LabDate]}
        setFormData={setFormData}
      />
    ),
  },
];
