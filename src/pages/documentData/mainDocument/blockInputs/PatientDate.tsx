import DateInput from '../../../../components/document/inputs/dateInput/DateInput';
import { FormDataItem } from '../../../../utils/types/documentType';
import { FormDataFields } from '../../../../utils/types/enums/documentEnums';
import { InputBlockItem } from '../../../../utils/types/shared';

export const patientDate = (
  setFormData,
  formData: FormDataItem,
): InputBlockItem[] => [
  {
    inputTitle: 'Выберите Дату',
    input: (
      <DateInput
        fieldName={FormDataFields.PatientDate}
        setFormData={setFormData}
        inputValue={formData.PatientDate}
      />
    ),
  },
];
