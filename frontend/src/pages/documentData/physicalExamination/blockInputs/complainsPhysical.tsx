import { PhysicalExam } from "../../../../utils/types/documentType";
import Textarea from "../../../../components/document/inputs/textarea/Textarea";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";

export const complainsPhysical = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: "",
    input: (
      <Textarea
        fieldName={PhysicalExamData.Complaints}
        inputValue={formData[PhysicalExamData.Complaints]}
        setFormData={setFormData}
        width={"800px"}
      />
    ),
  },
];
