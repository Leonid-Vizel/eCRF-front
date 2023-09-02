import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";

export const pregnacyFirst = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <SelectInput
        fieldName={PhysicalExamData.PregnancyTest}
        options={[
          {
            name: "Нет",
            value: 0,
          },
          {
            name: "Да",
            value: 1,
          },
          {
            name: "Неприменимо",
            value: 2,
          },
        ]}
        selectValue={formData[PhysicalExamData.PregnancyTest]}
        setFormData={setFormData}
      />
    ),
  },
];
