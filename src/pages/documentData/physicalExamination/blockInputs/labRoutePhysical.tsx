import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';

export const labRoutePhysical = (setFormData, formData: PhysicalExam) => [
  {
    input: (
      <DefaultInput
        fieldName={PhysicalExamData.LabRouteName}
        inputValue={formData[PhysicalExamData.LabRouteName]}
        setFormData={setFormData}
        placeholder="Название"
        inputWidth="200px"
      />
    ),
  },
  {
    input: (
      <SelectInput
        fieldName={PhysicalExamData.LabRoute}
        options={[
          {
            name: 'Нет',
            value: 0,
          },
          {
            name: 'Да',
            value: 1,
          },
        ]}
        selectValue={formData[PhysicalExamData.LabRoute]}
        setFormData={setFormData}
      />
    ),
  },
];
