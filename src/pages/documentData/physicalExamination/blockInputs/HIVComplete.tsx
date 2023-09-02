import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";
import Textarea from "../../../../components/document/inputs/textarea/Textarea";

export const HIVComplete = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: "Выполнено",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.HIVComplete}
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
        selectValue={formData[PhysicalExamData.HIVComplete]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Показатели",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.HIVIndicator}
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
        selectValue={formData[PhysicalExamData.HIVIndicator]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Отклонения",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.HIVDeviation}
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
        selectValue={formData[PhysicalExamData.HIVDeviation]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Комментарий",
    input: (
      <Textarea
        fieldName={PhysicalExamData.HIVComment}
        inputValue={formData[PhysicalExamData.HIVComment]}
        setFormData={setFormData}
        width={"300px"}
      />
    ),
  },
];
