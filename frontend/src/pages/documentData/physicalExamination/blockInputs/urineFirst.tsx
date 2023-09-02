import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";
import Textarea from "../../../../components/document/inputs/textarea/Textarea";
import DefaultInput from "../../../../components/document/inputs/defaultInput/DefaultInput";

export const urineFirst = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: "Название",
    input: (
      <DefaultInput
        fieldName={PhysicalExamData.UrineAnalysisName}
        setFormData={setFormData}
        inputValue={formData[PhysicalExamData.UrineAnalysisName]}
      />
    ),
  },
  {
    inputTitle: "Проведено",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.UrineAnalysis}
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
        selectValue={formData[PhysicalExamData.UrineAnalysis]}
        setFormData={setFormData}
      />
    ),
  },
];
