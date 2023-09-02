import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";
import Textarea from "../../../../components/document/inputs/textarea/Textarea";

export const mentalPhysical = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: "Выполнено",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.MentalComplete}
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
        selectValue={formData[PhysicalExamData.MentalComplete]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Показатели",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.MentalIndicator}
        options={[
          {
            name: "Норма",
            value: 1,
          },
          {
            name: "Отклонение",
            value: 0,
          },
        ]}
        selectValue={formData[PhysicalExamData.MentalIndicator]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Отклонения",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.MentalDeviation}
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
        selectValue={formData[PhysicalExamData.MentalDeviation]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Комментарий",
    input: (
      <Textarea
        fieldName={PhysicalExamData.MentalComment}
        inputValue={formData[PhysicalExamData.MentalComment]}
        setFormData={setFormData}
        width={"300px"}
      />
    ),
  },
];
