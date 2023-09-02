import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";

export const XRayCopyPhysical = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <SelectInput
        fieldName={PhysicalExamData.XRayCopy}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
        ]}
        selectValue={formData[PhysicalExamData.XRayCopy]}
        setFormData={setFormData}
      />
    ),
  },
];
