import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";

export const covidSecond = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <SelectInput
        fieldName={PhysicalExamData.CovidTestResult}
        options={[
          {
            name: "Обнаружен",
            value: 0,
          },
          {
            name: "Не обнаружен",
            value: 1,
          },
        ]}
        selectValue={formData[PhysicalExamData.CovidTestResult]}
        setFormData={setFormData}
      />
    ),
  },
];
