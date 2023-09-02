import { PhysicalExam } from "../../../../utils/types/documentType";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";
import MaskedInput from "../../../../components/document/inputs/maskedInput/MaskedInput";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";

export const weightHeightPhysical = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: "Вес",
    input: (
      <MaskedInput
        fieldName={PhysicalExamData.Weight}
        setFormData={setFormData}
        inputValue={formData[PhysicalExamData.Weight]}
        mask={"999"}
      />
    ),
  },
  {
    inputTitle: "Рост",
    input: (
      <MaskedInput
        fieldName={PhysicalExamData.Height}
        setFormData={setFormData}
        inputValue={formData[PhysicalExamData.Height]}
        mask={"999"}
      />
    ),
  },
  {
    inputTitle: "Мера измерения",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.WeightMeasurement}
        options={[
          {
            name: "КГ",
            value: 0,
          },
          {
            name: "Гр",
            value: 1,
          },
        ]}
        selectValue={formData[PhysicalExamData.WeightMeasurement]}
        setFormData={setFormData}
      />
    ),
  },
];
