import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";
import DateInput from "../../../../components/document/inputs/dateInput/DateInput";

export const covidOldPhysical = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <DateInput
        fieldName={PhysicalExamData.CovidOldTestDate}
        inputValue={formData[PhysicalExamData.CovidOldTestDate]}
        setFormData={setFormData}
      />
    ),
  },
  {
    input: (
      <SelectInput
        fieldName={PhysicalExamData.CovidOldTest}
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
        selectValue={formData[PhysicalExamData.CovidOldTest]}
        setFormData={setFormData}
      />
    ),
  },
];
