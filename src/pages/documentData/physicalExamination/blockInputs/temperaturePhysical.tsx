import { PhysicalExam } from "../../../../utils/types/documentType";
import MaskedInput from "../../../../components/document/inputs/maskedInput/MaskedInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";
import DefaultInput from "../../../../components/document/inputs/defaultInput/DefaultInput";
import { NotDiastolicNumberPattern } from "../../../../utils/consts";
import RangeInput from "../../../../components/document/fileInput/RangeInput";

export const temperaturePhysical = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: "Систолическое давление",
    input: (
      <RangeInput
        fieldName={PhysicalExamData.SystolicPressure}
        setFormData={setFormData}
        inputValue={formData[PhysicalExamData.SystolicPressure]}
        min={90}
        max={139}
      />
    ),
  },
  {
    inputTitle: "Диастолическое давление",
    input: (
      <RangeInput
        fieldName={PhysicalExamData.DiastolicPressure}
        setFormData={setFormData}
        inputValue={formData[PhysicalExamData.DiastolicPressure]}
        min={55}
        max={95}
      />
    ),
  },
  {
    inputTitle: "ЧСС",
    input: (
      <RangeInput
        fieldName={PhysicalExamData.HeartRate}
        setFormData={setFormData}
        inputValue={formData[PhysicalExamData.HeartRate]}
        min={50}
        max={95}
      />
    ),
  },
  {
    inputTitle: "ЧДД",
    input: (
      <RangeInput
        fieldName={PhysicalExamData.RespiratoryRate}
        setFormData={setFormData}
        inputValue={formData[PhysicalExamData.RespiratoryRate]}
        min={12}
        max={21}
      />
    ),
  },
  {
    inputTitle: "Температура тела",
    input: (
      <RangeInput
        fieldName={PhysicalExamData.Temperature}
        setFormData={setFormData}
        inputValue={formData[PhysicalExamData.Temperature]}
        min={25}
        max={47}
        step={0.1}
      />
    ),
  },
];
