import { PhysicalExam } from '../../../../utils/types/documentType';
import SelectInput from '../../../../components/document/inputs/selectInput/SelectInput';
import { PhysicalExamData } from '../../../../utils/types/enums/documentEnums';
import Textarea from '../../../../components/document/inputs/textarea/Textarea';
import DefaultInput from '../../../../components/document/inputs/defaultInput/DefaultInput';

export const ECGPhysical = (setFormData, formData: PhysicalExam) => [
  {
    inputTitle: 'Проведено снятие ЭКГ',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.ECGTaken}
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
        selectValue={formData[PhysicalExamData.ECGTaken]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Пленка ЭКГ приложена',
    input: (
      <SelectInput
        fieldName={PhysicalExamData.ECGTapeAttached}
        options={[
          {
            name: 'Норма',
            value: 1,
          },
          {
            name: 'Отклонение',
            value: 0,
          },
        ]}
        selectValue={formData[PhysicalExamData.ECGTapeAttached]}
        setFormData={setFormData}
      />
    ),
  },
  {
    inputTitle: 'Расшифровка ЭКГ',
    input: (
      <Textarea
        fieldName={PhysicalExamData.ECGComment}
        inputValue={formData[PhysicalExamData.ECGComment]}
        setFormData={setFormData}
        width="2fr"
      />
    ),
  },
];
