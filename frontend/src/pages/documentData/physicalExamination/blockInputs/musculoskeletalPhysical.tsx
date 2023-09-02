import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";
import Textarea from "../../../../components/document/inputs/textarea/Textarea";

export const musculoskeletalPhysical = (
  setFormData,
  formData: PhysicalExam,
) => [
  {
    inputTitle: "Выполнено",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.MusculoskeletalComplete}
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
        selectValue={formData[PhysicalExamData.MusculoskeletalComplete]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Показатели",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.MusculoskeletalIndicator}
        options={[
          {
            name: "Норма",
            value: 0,
          },
          {
            name: "Отклонение",
            value: 1,
          },
        ]}
        selectValue={formData[PhysicalExamData.MusculoskeletalIndicator]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Отклонения",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.MusculoskeletalDeviation}
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
        selectValue={formData[PhysicalExamData.MusculoskeletalDeviation]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Комментарий",
    input: (
      <Textarea
        fieldName={PhysicalExamData.MusculoskeletalComment}
        inputValue={formData[PhysicalExamData.MusculoskeletalComment]}
        setFormData={setFormData}
        width={"300px"}
      />
    ),
  },
];
