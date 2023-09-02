import { PhysicalExam } from "../../../../utils/types/documentType";
import SelectInput from "../../../../components/document/inputs/selectInput/SelectInput";
import { PhysicalExamData } from "../../../../utils/types/enums/documentEnums";
import Textarea from "../../../../components/document/inputs/textarea/Textarea";

export const respiratoryPhysical = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: "Выполнено",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.RespiratoryComplete}
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
        selectValue={formData[PhysicalExamData.RespiratoryComplete]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Показатели",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.RespiratoryIndicator}
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
        selectValue={formData[PhysicalExamData.RespiratoryIndicator]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Отклонения",
    input: (
      <SelectInput
        fieldName={PhysicalExamData.RespiratoryDeviation}
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
        selectValue={formData[PhysicalExamData.RespiratoryDeviation]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: "Комментарий",
    input: (
      <Textarea
        fieldName={PhysicalExamData.RespiratoryComment}
        inputValue={formData[PhysicalExamData.RespiratoryComment]}
        setFormData={setFormData}
        width={"300px"}
      />
    ),
  },
];
